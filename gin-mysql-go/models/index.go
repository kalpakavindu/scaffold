package models

import "example.com/m/config"

func MigrateDatabase() {
	db := config.Database

	db.AutoMigrate(&User{})
}
