DB_NAME = process.env.DB_NAME;

db = db.getSiblingDB(DB_NAME);

db.createCollection("users");
