#!/bin/bash

mysql -u $DB_USER -p"$DB_PASS" <<-EOSQL
USE $DB_NAME;
INSERT INTO users (first_name,last_name,username,email,password_hash,role) 
VALUES
  ('System','Admin','admin','admin@localhost','\$2a\$10\$sEFy1W/9RMOj0HL4JyUh0.kCfi0f.CcpyhVancSEEhUl.Gi4xoDXC','system');
EOSQL