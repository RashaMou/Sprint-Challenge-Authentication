const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("auth").select("id", "username", "password");
}

function findBy(filter) {
  return db("auth").where(filter);
}

async function add(user) {
  const [id] = await db("auth").insert(user);

  return findById(id);
}

function findById(id) {
  return db("auth")
    .where({ id })
    .first();
}
