import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test app.ts", () => {
  it("Main route", () => {
    return request.get("/").expect(200).expect("Hello TS & Express");
  });
});
