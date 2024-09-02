const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('User Login', function() {
  this.timeout(30000);
  let driver:any;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should log in and redirect to user profile', async () => {
    await driver.get('http://localhost:3000/sign-in');
    await driver.findElement(By.name('email')).sendKeys('test@example.com');
    await driver.findElement(By.name('password')).sendKeys('password');
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.urlContains('/username'), 10000);
    const url = await driver.getCurrentUrl();
    expect(url).to.include('/username');
  });
});