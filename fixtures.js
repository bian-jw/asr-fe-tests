const { test: base, expect } = require('@playwright/test');
const { _electron: electron } = require('playwright');

// 用 base.extend 扩展 test 对象
let test = base.extend({
  electronApp: [   // fixture 名称
    async ({}, use) => {
      console.log('🚀 全局启动 Electron...');
      const app = await electron.launch({
	      executablePath: '/home/nvidia/.local/share/asr-fe/asr-fe'
      });
      const window = await app.firstWindow();
  //网络空闲指的就是：浏览器在一段时间内（比如 500 毫秒）不再发出任何新的网络请求，说明页面需要的数据基本都加载完了，界面也应该渲染出来了。
      await window.waitForLoadState('networkidle');

      // 将 window 挂在 app 上，方便测试里直接用
      app.mainWindow = window;

      // 使用 use(app) 把 app 暴露给测试
      await use(app);

      // 所有测试结束后，执行清理
      console.log('🧹 关闭 Electron');
      await app.close();
    },
    { scope: 'worker' }   // ← 关键：worker 级别，同一个文件只启动一次
  ]
});

module.exports = { test, expect };

