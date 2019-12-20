const request = require("supertest");

const server = require("../api/server");

describe("GET /auth/login", function() {
  it("should return 200 OK", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "rasha", password: "maxy" })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  //How to check for token?
  // it("should return a token", function() {
  //   return request(server)
  //     .post("/api/auth/login")
  //     .send({ username: "rasha", password: "maxy" })
  //     .then(res => {
  //       expect(res.body.token).toBe(true);
  //     });
  // });
  it("fails with missing credentials", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "", password: "" })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});
