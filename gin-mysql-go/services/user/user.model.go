package user

import (
	"time"

	"gin-mysql-go/enums"

	"gin-mysql-go/config"
)

type User struct {
	ID                     uint           `json:"id" gorm:"type:bigint unsigned;unique;primaryKey;autoIncrement"`
	FirstName              string         `json:"first_name" gorm:"type:varchar(50);not null"`
	LastName               string         `json:"last_name" gorm:"type:varchar(50)"`
	Username               string         `json:"username" gorm:"type:varchar(50);unique;not null"`
	Email                  string         `json:"email" gorm:"type:varchar(100);unique;not null"`
	PasswordHash           string         `json:"-" gorm:"type:varchar(60);not null"`
	Role                   enums.UserRole `json:"role" gorm:"type:varchar(20);default:user"`
	Verified               bool           `json:"verified" gorm:"type:tinyint(1);default:0"`
	LastLogin              time.Time      `json:"last_login" gorm:"type:timestamp"`
	RefreshTokenHash       string         `json:"-" gorm:"type:varchar(64)"`
	PasswordResetToken     string         `json:"-" gorm:"type:varchar(64)"`
	PasswordResetTokenHash string         `json:"-" gorm:"type:varchar(64)"`
	VerificationToken      string         `json:"-" gorm:"type:varchar(64)"`
	VerificationTokenHash  string         `json:"-" gorm:"type:varchar(64)"`
	CreatedAt              time.Time      `json:"-" gorm:"type:timestamp;default:CURRENT_TIMESTAMP;autoCreateTime"`
	UpdatedAt              time.Time      `json:"-" gorm:"type:timestamp;default:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;autoUpdateTime"`
}

func (e *Extension) Migrate() {
	config.Database.AutoMigrate(&User{})
}
