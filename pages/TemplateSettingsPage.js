// pages/TemplateSettingsPage.js
const { expect } = require('@playwright/test');

class TemplateSettingsPage {
  constructor(window) {
    this.window = window;
    // 核心元素定位器（集中管理）
    this.addButton = window.getByRole('button', { name: 'plus 添加' });
    this.templateNameInput = window.getByRole('textbox', { name: '* 模板名称' });
    this.apiKeyInput = window.getByRole('textbox', { name: '* API Key' });
    this.saveButton = window.getByRole('button', { name: '保 存' });
    this.successMessage = window.getByText('创建成功');
    this.menuSetting = window.getByRole('menuitem', { name: 'setting 设置' });
    this.templateSettingLink = window.getByText('模板设置');
  }

  async navigate() {
    await this.menuSetting.click();
    await this.menuSetting.click();
    await this.templateSettingLink.click();
  }

  async addTemplate(name, apiKey) {
    await this.addButton.click();
    await this.templateNameInput.fill(name);
    await this.apiKeyInput.fill(apiKey);
    await this.saveButton.click();
  }

  async expectSaveSuccess() {
    await expect(this.successMessage).toBeVisible({ timeout: 5000 });
  }
}

module.exports = TemplateSettingsPage;
