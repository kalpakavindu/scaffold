DB_NAME = process.env.DB_NAME;

db = db.getSiblingDB(DB_NAME);

db.users.insertOne({
  username: "admin",
  email: "admin@localhost",
  role: "system",
  password: "bee082e21aaf7e476e873b646536d6173b0c2a7b03d449e3c849b878a72172f1",
  createdAt: new Date(),
});
