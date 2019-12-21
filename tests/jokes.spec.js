const request = require("supertest");

const server = require("../api/server");

describe("GET /api/jokes", function() {
  it("should return array of jokes", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "rasha", password: "maxy" })
      .then(res => {
        const token = res.body.token;

        return request(server)
          .get("/api/jokes")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });

  it("should return a JSON object", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "rasha", password: "maxy" })
      .then(res => {
        const token = res.body.token;

        return request(server)
          .get("/api/jokes")
          .then(res => {
            expect(res.type).toMatch(/json/i);
          });
      });
  });
});
