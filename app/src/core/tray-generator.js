const { nativeImage } = require("electron");
const { BehaviorSubject, Observable } = require("rxjs");
const { takeWhile } = require("rxjs/operators");
const timerStateType = require("./timer-state-types");
const mergeImg = require("merge-img");
const rootDir = require("../../dir");

class TrayGenerator {
  constructor(tray) {
    this.tray = tray;
    this.trayValue$ = new BehaviorSubject({
      timer: 0,
      state: timerStateType.Hi
    });

    this.breakStateAnimation$ = this._getAlarmAnimation();
    this.breakStateAnimationSub;

    this.trayValue$.subscribe(payload => {
      if (
        payload.state !== timerStateType.Alarm &&
        this.breakStateAnimationSub &&
        this.breakStateAnimationSub.unsubscribe
      ) {
        this.breakStateAnimationSub.unsubscribe();
        this.breakStateAnimationSub = null;
      }

      switch (payload.state) {
        case timerStateType.Hi:
          break;
        case timerStateType.Working:
          this.set(payload.timer, payload.state);
          break;
        case timerStateType.Break:
          this.set(payload.timer, payload.state);
          break;
        case timerStateType.Alarm: {
          // this.set(payload.timer, payload.state);
          if (!this.breakStateAnimationSub) {
            this.breakStateAnimationSub = this.breakStateAnimation$
              .pipe(takeWhile(_ => payload.state === timerStateType.Alarm))
              .subscribe(alarmIcon =>
                this.set(this.trayValue$.value.timer, alarmIcon)
              );
          }
          return;
        }
        default:
          break;
      }
    });
  }

  _getAlarmAnimation() {
    return Observable.create(observer => {
      const oneSecInterval = setInterval(() => {
        observer.next(timerStateType.Alarm2);
        setTimeout(() => {
          observer.next(timerStateType.Alarm);
        }, 300);
      }, 1000);
      return () => clearInterval(oneSecInterval);
    });
  }

  _generateImage(dizaine, minute, icon) {
    return mergeImg(
      [
        ...((icon && icon === "alarm2") || icon === "alarm"
          ? [
              `${rootDir}/src/assets/frame${
                icon === "alarm2" ? "_active" : ""
              }.png`
            ]
          : [`${rootDir}/src/assets/frame_base.png`]),
        `${rootDir}/src/assets/dizaine${dizaine}.png`,
        `${rootDir}/src/assets/minute${minute}.png`,
        `${rootDir}/src/assets/icon_${icon}.png`
      ],
      // [`${rootDir}/src/assets/db.png`],
      {
        offset: -141
      }
    );
  }

  _getTimerStateIcon(timerState) {
    const icons = {
      [timerStateType.Hi]: "hi",
      [timerStateType.Working]: "working",
      [timerStateType.Break]: "break",
      [timerStateType.Alarm]: "alarm",
      [timerStateType.Alarm2]: "alarm2"
    };
    return icons[timerState];
  }

  set(timer, icon) {
    if (timer === timerStateType.Hi) return;
    const g = timer.toString().length > 1 ? timer.toString()[0] : "0";
    const m = timer.toString().length > 1 ? timer[1] : timer.toString();
    const d = this._getTimerStateIcon(icon);

    this._generateImage(g, m, d).then(img => {
      const natImg = nativeImage.createFromBuffer(img.bitmap.data, {
        width: img.bitmap.width,
        height: img.bitmap.height,
        scaleFactor: 2
      });
      natImg.isMacTemplateImage = true;
      this.tray.setImage(natImg);
    });
  }

  destroy() {
    this.trayValue$.unsubscribe();
  }
}

module.exports = TrayGenerator;
