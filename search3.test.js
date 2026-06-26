const { test, expect } = require('./fixtures');
const TemplateSettingsPage = require('./pages/TemplateSettingsPage');
const testData = [
  { name: '模板A', apiKey: 'keyA', expected: '创建成功' },
  { name: '模板B', apiKey: 'keyB', expected: '创建成功' },
];

// 直接用 for...of 循环动态创建测试
for (const data of testData) {
  test(`添加模板 ${data.name}`, async ({ electronApp }) => {

  const window = electronApp.mainWindow;
  const templatePage = new TemplateSettingsPage(window);
  await templatePage.navigate();
  await templatePage.addTemplate(data.name, data.apiKey);
  await expect(window.getByText(data.expected)).toBeVisible();

});
}
