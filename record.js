const { _electron: electron } = require('playwright');

(async () => {
  const app = await electron.launch({
    executablePath: '/home/nvidia/.local/share/asr-fe/asr-fe',
    // 如果想继续保留调试端口，可以传 args: ['--remote-debugging-port=9222']，但不是必须的
    args: ['--disable-gpu'],   // 禁用GPU
    timeout: 30000             // 增加启动超时（默认 30s 也可能不够）
  });
  const window = await app.firstWindow();
  await window.pause();   // 从这里开始录制
})();
