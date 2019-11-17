const { Menu, app } = require("electron");
const { BehaviorSubject, merge, timer, concat } = require("rxjs");
const { take, tap } = require("rxjs/operators");
const timerStateTypes = require("./timer-state-types");

class App {
  constructor(tray, TimerManipulator, TrayGenerator) {
    this.tray = tray;
    this.timerManipulator = new TimerManipulator();
    this.trayGenerator = new TrayGenerator(tray);

    this.trayClicks$ = new BehaviorSubject({ type: "" });

    this.timerState$ = new BehaviorSubject(timerStateTypes.Hi);

    this.TIME_WORKING = 55;
    this.TIME_BREAK = 5;

    this._init();
  }

  _init() {
    this._generateContextMenu();

    // After 3s, start timer and listening to Events
    concat(
      timer(3000).pipe(
        take(1),
        tap(() => this.timerManipulator.startTimer())
      ),
      this.timerManipulator
        .getTimer$()
        .pipe(tap(this.timerState$.next(timerStateTypes.Working)))
    ).subscribe(event => {
      console.log("TIME", event, this.timerState$.value);
      this._generateContextMenu();
      if (!event) return;
      const { timer } = event;
      /**
       * If we are working
       * and Timer > TIME_WORKING
       */
      if (
        this.timerState$.value === timerStateTypes.Working &&
        timer >= this.TIME_WORKING
      ) {
        this.timerState$.next(timerStateTypes.Alarm);
        this.trayGenerator.trayValue$.next({
          timer: timer.toString(),
          state: this.timerState$.value
        });
        this.timerManipulator.startTimer();
        return;
      }

      /**
       * If we are in Break
       * and Timer > TIME_BREAK
       */
      if (
        this.timerState$.value === timerStateTypes.Break &&
        timer >= this.TIME_BREAK
      ) {
        this.timerState$.next(timerStateTypes.Working);
        this.timerManipulator.startTimer();
        this.trayGenerator.trayValue$.next({
          timer: 0,
          state: this.timerState$.value
        });
        return;
      }

      /**
       * No special Event, increase value
       */
      this.trayGenerator.trayValue$.next({
        timer: timer.toString(),
        state: this.timerState$.value
      });
    });
  }

  _generateContextMenu() {
    const state = this.timerState$.value;
    const contextMenu = Menu.buildFromTemplate([
      ...(state === timerStateTypes.Break
        ? [
            {
              label: "I'm back to work",
              type: "normal",
              click: () => {
                if (this.timerState$.value === timerStateTypes.Break) {
                  this.timerState$.next(timerStateTypes.Working);
                  this.timerManipulator.startTimer();
                }
              }
            }
          ]
        : []),
      ...(state === timerStateTypes.Alarm
        ? [
            {
              label: "Take a break",
              type: "normal",
              click: () => {
                if (this.timerState$.value === timerStateTypes.Alarm) {
                  this.timerState$.next(timerStateTypes.Break);
                  this.timerManipulator.startTimer();
                }
              }
            }
          ]
        : []),
      ...(state === timerStateTypes.Working
        ? [
            {
              label: "Restart Timer",
              type: "normal",
              click: () => {
                if (this.timerState$.value === timerStateTypes.Working) {
                  this.timerManipulator.startTimer();
                }
              }
            }
          ]
        : []),
      {
        label: "Quit Break o'clock",
        type: "normal",
        click: e => app.quit()
      }
    ]);
    this.tray.setContextMenu(contextMenu);
  }

  destroy() {
    this.TimerManipulator.destroy();
    this.TrayGenerator.destroy();

    this.timerState$.unsubscribe();
  }
}

module.exports = App;
