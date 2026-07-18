package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"example.com/m/config"
	"example.com/m/middlewares"
	"example.com/m/services"
)

func main() {
	config.Env_LoadEnv()
	srv := services.NewRegistry()

	router := gin.Default()
	router.Use(gin.Logger())
	router.Use(middlewares.ErrorMiddleware())

	router.NoRoute(func(c *gin.Context) {
		response := gin.H{"message": "Resource not found"}
		if config.Env_MODE() == "development" {
			response["details"] = fmt.Sprintf("Mismatched %s request to: %s", c.Request.Method, c.Request.URL.Path)
		}
		c.JSON(http.StatusNotFound, response)
	})

	router.GET("/users/:id", srv.UserService.GetUserById)
	router.GET("/users", srv.UserService.GetUsers)
	router.POST("/users", srv.UserService.CreateUser)

	var HOST string
	var PORT string
	if HOST = os.Getenv("HOST"); HOST == "" {
		HOST = "127.0.0.1"
	}
	if PORT = os.Getenv("PORT"); PORT == "" {
		PORT = "4000"
	}

	println("[server] Listening on http://" + HOST + ":" + PORT)
	router.Run(HOST + ":" + PORT)
}
