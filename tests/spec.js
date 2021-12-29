var TEST_DATA = [{
    "name": "apple"
  },
  {
    "name": "orange"
  },
  {
    "name": "grapes"
  }

];

for (let item of TEST_DATA) {
  describe("suite", function () {
    var keys = element(by.model("todoList.todoText"));

    it("spec", function () {
      browser.get("https://angularjs.org/");
      browser.driver.manage().window().maximize();
      browser.sleep(2000);
      keys.sendKeys(item.name);
      element(by.buttonText("add")).click();
      browser.sleep(2000);
    });
  });
}