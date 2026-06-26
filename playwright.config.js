const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  workers: 1,   // 强制所有测试文件在一个 worker 中串行执行
  timeout: 50000, // 全局测试超时，单位 ms，可根据需要调整
  testDir: './',                  // 测试文件目录        
  expect: { timeout: 10 * 1000 }, // 断言超时
  retries: 1,                     // 失败重试1次
  use: {
	//失败时自动截图、录像，并在 test-results/ 下生成资料
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',      // 失败重试时收集追踪
  },
});
