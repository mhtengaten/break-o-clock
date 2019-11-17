const { timer, BehaviorSubject } = require("rxjs");
const trayActionTypes = require("./tray-action-types");

class TimerManipulator {
  constructor() {
    this.source$ = timer(60000, 60000);
    this.timer$ = new BehaviorSubject({
      type: trayActionTypes.TimerValue,
      timer: 0
    });

    this.sourceSub;
  }

  startTimer() {
    /**
     * Check if there is an instance
     */
    if (this.sourceSub && this.sourceSub.unsubscribe) {
      this.sourceSub.unsubscribe();
      this.setTimer(0);
    }

    this.sourceSub = this.source$.subscribe(_ => {
      this.timer$.next({
        type: trayActionTypes.TimerValue,
        timer: this.timer$.value.timer + 1
      });
    });
  }

  setTimer(number) {
    this.timer$.next({
      type: trayActionTypes.TimerValue,
      timer: number
    });
  }

  getTimer$() {
    return this.timer$;
  }

  destroy() {
    this.sourceSub.unsubscribe();
  }
}

module.exports = TimerManipulator;
