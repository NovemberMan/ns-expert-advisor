import { ExpertAdvisor } from './lib/expert-advisor';
import { Log, Util } from 'ns-common';

const config = require('config');
Log.init(Log.category.system, Log.level.ALL, 'ns-expert-advisor');

const expertAdvisor = new ExpertAdvisor();
expertAdvisor.start();
/*
const stopServ = (serv: ExpertAdvisor) => {
  Log.system.info('EA程序退出方法[启动]');
  // 资源释放
  const stopTask = new Scheduler('01 15 * * *');
  stopTask.invok((ea: ExpertAdvisor) => {
    Log.system.info('启动定时终止EA程序[服务退出]');
    ea.destroy();
    // 删除定时任务
    stopTask.reminder.cancel();
  }, serv);
  Log.system.info('EA程序退出方法[终了]');
}

// 如果为交易时间或回测模式，直接启动EA服务
if (Util.isTradeTime() || config.backtest.test) {
  Log.system.info('当前为交易时间，直接启动EA程序');
  expertAdvisor.start();
  stopServ(expertAdvisor);
}
Log.system.info('注册定时EA服务程序[开始]');
const eaTask = new Scheduler('0 9 * * *'); //
eaTask.invok(async (ea: ExpertAdvisor) => {
  // eaTask.reminder.cancel()
  if (!Util.isTradeDate(new Date())) {
    Log.system.info('当前非交易日，不启动EA程序');
    return;
  }

  Log.system.info('定时启动EA服务');
  try {
    await expertAdvisor.dataProvider.init();
    await expertAdvisor.start();
  } catch (err) {
    Log.system.error(`EA服务异常：${err.stack}`);
  };
  stopServ(expertAdvisor);
}, expertAdvisor);
Log.system.info('注册定时EA服务程序[终了]');
*/
