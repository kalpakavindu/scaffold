package config

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func Env_LoadEnv() {
	godotenv.Load()

	var appEnv string
	if appEnv = os.Getenv("APP_ENV"); appEnv == "" || appEnv == "production" {
		gin.SetMode(gin.ReleaseMode)
	} else {
		gin.SetMode(gin.DebugMode)
	}
}

func Env_MODE() string {
	if mode := os.Getenv("APP_ENV"); mode != "" {
		return mode
	}
	return "production"
}

func Env_PORT() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}
	return "8080"
}

func Env_HOST() string {
	if host := os.Getenv("HOST"); host != "" {
		return host
	}
	return "localhost"
}
