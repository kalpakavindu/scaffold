package config

import (
	"fmt"
	"log"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var Database *gorm.DB

func ConnectDatabase() {
	dbUser := GetEnv("DB_USER")
	dbPass := GetEnv("DB_PASS")
	dbHost := GetEnv("DB_HOST")
	dbPort := 3306
	dbName := GetEnv("DB_NAME")

	conStr := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)

	var db *gorm.DB
	var err error

	// Retry loop (5). Try this it's good for your health bro...
	for i := range 5 {
		log.Printf("[database] Connecting to database (Attempt %d/5)...", i+1)
		db, err = gorm.Open(mysql.Open(conStr), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		})

		if err == nil {
			log.Println("[database] Connected to database!")
			Database = db
			return
		}

		log.Printf("[database] Failed to connect to database: %v", err)
	}

	if err != nil {
		log.Fatalf("[database] Fatal: Failed to connect to database after 5 attempts: %v", err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalf("[database] Fatal: Failed to get database connection: %v", err)
	}

	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)
	sqlDB.SetConnMaxLifetime(30 * time.Minute)

	log.Println("[database] Database connection successful!")
}
