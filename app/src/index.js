const { app, Tray } = require("electron");
const AppClass = require("./core/app");
const TrayGeneratorClass = require("./core/tray-generator");
const TimerManipulatorClass = require("./core/timer-manipulator");

let tray = null;
let App = null;

/**
 * Hide Dock Icon
 */
// app.dock.hide();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  tray = new Tray(`${__dirname}/assets/hiTemplate@2x.png`);
  App = new AppClass(tray, TimerManipulatorClass, TrayGeneratorClass);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    App.destroy();
    app.quit();
  }
});
