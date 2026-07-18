package config

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func LoadEnv() {
	godotenv.Load()

	requiredVars := []string{"DB_HOST", "DB_USER", "DB_PASS", "DB_NAME"}

	for _, v := range requiredVars {
		if d := os.Getenv(v); d == "" {
			println("[server] Missing " + v + " environment variable")
			os.Exit(1)
		}
	}

	var appEnv string
	if appEnv = os.Getenv("APP_ENV"); appEnv == "" || appEnv == "production" {
		gin.SetMode(gin.ReleaseMode)
	} else {
		gin.SetMode(gin.DebugMode)
	}
}

func GetEnv(key string) string {
	defaultValues := map[string]string{
		"SERVER_HOST": "localhost",
		"SERVER_PORT": "root",
		"APP_ENV":     "production",
	}

	if val, ok := os.LookupEnv(key); ok || val != "" {
		return val
	} else {
		return defaultValues[key]
	}
}

func Mode() string {
	var appEnv string
	if appEnv = os.Getenv("APP_ENV"); appEnv == "" || appEnv == "production" {
		return "production"
	} else {
		return "development"
	}
}
