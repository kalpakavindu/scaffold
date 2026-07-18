#!/bin/bash

mysql -u $DB_USER -p"$DB_PASS" <<-EOSQL
USE $DB_NAME;
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    verified TINYINT(1) DEFAULT 0,
    last_login TIMESTAMP,
    refresh_token_hash VARCHAR(64),
    password_reset_token VARCHAR(64),
    password_reset_token_hash VARCHAR(64),
    verification_token VARCHAR(64),
    verification_token_hash VARCHAR(64),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
EOSQL
