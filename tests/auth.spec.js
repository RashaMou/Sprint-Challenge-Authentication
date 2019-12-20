const request = require("supertest");

const server = require("../api/server");

describe("GET /auth/login", function() {
  it("should login", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "rasha", password: "maxy" })
      .then(res => {
        expect(res.status).toBe(200);
        // expect(res.token).tobe(true);
      });
  });
});
