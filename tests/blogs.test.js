describe("Blog tests", () => {
  beforeEach(async () => {
    //  page = await Page.build();

    await page.goto("http://localhost:3000/");
  });

  // afterEach(async () => {
  //   await page.close();
  // });

  it("When logged id, can see blog create form", () => {});
});
