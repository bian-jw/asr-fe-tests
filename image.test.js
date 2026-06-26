const { test, expect } = require('./fixtures');


test('图片设置', async ({ electronApp }) => {
  const window = electronApp.mainWindow;
  await window.getByRole('menuitem', { name: 'setting 设置' }).click();
  await window.getByText('图像').click();
  // 等待全屏 loading 消失
 // await window.waitForSelector('.ant-spin-fullscreen', { state: 'hidden', timeout: 15000 });
  await window.locator('.loading-spinner').waitFor({ state: 'hidden', timeout: 15000 });
  await window.getByRole('button', { name: 'Increase Value' }).click({ force: true });
  await window.getByText('解析阈值采样间隔5秒/次10秒/次').click();
});      
