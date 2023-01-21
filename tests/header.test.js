/**
 * @jest-environment puppeteer
 */

const sessionFactory = require("./factories/sessionFactory");
const userFactory = require("./factories/userFactory");
// const Page = require("./helpers/page");

// let page;

describe("Header tests", () => {
  beforeEach(async () => {
    //  page = await Page.build();

    await page.goto("http://localhost:3000/");
  });

  // afterEach(async () => {
  //   await page.close();
  // });

  it("Renders Blogster logo", async () => {
    const text = await page.$eval("a.brand-logo", (el) => el.innerHTML);

    await expect(text).toEqual("Blogster");
  });

  it.skip("Clicking login starts oauth flow", async () => {
    await page.click(".right a");

    const url = await page.url();

    await expect(url).toMatch(/accounts\.google\.com/);
  });

  it.skip("When signed in, shows logout button", async () => {
    const user = await userFactory();
    const { session, sig } = sessionFactory(user);

    await page.setCookie({ name: "session", value: session });
    await page.setCookie({ name: "session.sig", value: sig });

    // refresh the page after cookies set
    // await page.goto("http://localhost:3000/");
    await page.reload();

    // wait for Logout anchor to render
    await page.waitForSelector('a[href="/auth/logout"]');

    const text = await page.$eval(
      'a[href="/auth/logout"]',
      (el) => el.innerHTML
    );

    expect(text).toEqual("Logout");
  });
});

// describe("Header authenticated tests", () => {
//   beforeEach(async () => {
//     await page.goto("http://localhost:3000/");
//   });

//   it("When signed in, shows logout button", async () => {
//     const user = await userFactory();
//     const { session, sig } = sessionFactory(user);

//     await page.setCookie({ name: "session", value: session });
//     await page.setCookie({ name: "session.sig", value: sig });

//     // refresh the page after cookies set
//     // await page.goto("http://localhost:3000/");
//     await page.reload();

//     // wait for Logout anchor to render
//     await page.waitForSelector('a[href="/auth/logout"]');

//     const text = await page.$eval(
//       'a[href="/auth/logout"]',
//       (el) => el.innerHTML
//     );

//     expect(text).toEqual("Logout");
//   });
// });
