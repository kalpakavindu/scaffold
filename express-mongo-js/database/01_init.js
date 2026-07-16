DB_NAME = process.env.DB_NAME;
DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;

db = db.getSiblingDB(DB_NAME);

db.createUser({
  user: DB_USER,
  pwd: DB_PASS,
  roles: [{ role: "readWrite", db: DB_NAME }],
});
