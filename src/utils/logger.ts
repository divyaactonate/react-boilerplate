import logatim from 'logatim';

export enum LoggerLevels {
  TRACE = 0,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  SILENT,
}

export class Logger {
  public static setLevel(level: LoggerLevels) {
    console.log('LogLevel ', level);
    logatim.setLevel(level);
  }

  public static getLevel() {
    logatim.getLevel();
  }

  /**
   * Show info for endusers
   * @param msg []
   */
  public static info(...msg: any[]) {
    // logatim.red.bgYellow.bold.info(msg);
    logatim.info(msg);
  }

  public static trace(...msg: any[]) {
    logatim.trace(msg);
  }

  public static debug(...msg: any[]) {
    logatim.debug(msg);
  }

  public static warn(...msg: any[]) {
    logatim.warn(msg);
  }

  public static error(...msg: any[]) {
    logatim.error(msg);
  }

  public static silent(...msg: any[]) {
    logatim.silent(msg);
  }
}
