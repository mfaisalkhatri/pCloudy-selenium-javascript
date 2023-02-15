const { Builder, By, WebElement } = require("selenium-webdriver");
let chai = require("chai");
let should = chai.should();

describe("get attributes test", () => {
  let driver;
  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("should get attributes of field with href", async () => {
    await driver.get("https://pcloudy.com");
    let loginBtn = await driver.findElement(By.css("a.secondaryBtn"));
    let loginBtnHrefValue = await loginBtn
      .getAttribute("href")
      .then((value) => value);

    console.log(loginBtnHrefValue);
    loginBtnHrefValue.should.equal("https://device.pcloudy.com/");
  });

  it("should get attributes of field with image src", async () => {
    await driver.get("https://pcloudy.com");
    let logoImage = await driver.findElement(By.css("nav > div > a > img"));
    let logoImageSrc = await logoImage
      .getAttribute("src")
      .then((value) => value);

    console.log(logoImageSrc);
    logoImageSrc.should.equal(
      "https://www.pcloudy.com/wp-content/themes/Pcloudy_2022/assets/images/logo.svg"
    );
  });

  it("should get attributes of field with placeholder", async () => {
    await driver.get("https://device.pcloudy.com/");
    let userNamefield = await driver.findElement(By.id("userId"));
    let userNameFieldPlaceHolder = await userNamefield
      .getAttribute("placeholder")
      .then((value) => value);

    console.log(userNameFieldPlaceHolder);
    userNameFieldPlaceHolder.should.equal("Email");
  });

  it("should get attributes of field with type and Label text", async () => {
    await driver.get("https://device.pcloudy.com/");

    let submitBtn = await driver.findElement(By.id("loginSubmitBtn"));
    let submitBtnLabel = await submitBtn
      .getAttribute("textContent")
      .then((value) => value);

    console.log(submitBtnLabel);
    submitBtnLabel.should.equal("Login");

    let submitBtnFieldType = await submitBtn
      .getAttribute("type")
      .then((value) => value);

    console.log(submitBtnFieldType);
    submitBtnFieldType.should.equal("button");
  });

  after(async () => {
    await driver.quit();
  });
});
