package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"gin-mysql-go/config"
	"gin-mysql-go/middlewares"
	"gin-mysql-go/services"
)

func main() {
	config.LoadEnv()
	config.ConnectDatabase()

	srv := services.NewRegistry()

	router := gin.Default()
	router.Use(gin.Logger())
	router.Use(middlewares.ErrorMiddleware())

	router.NoRoute(func(c *gin.Context) {
		response := gin.H{"message": "Resource not found"}
		if config.Mode() == "development" {
			response["details"] = fmt.Sprintf("Mismatched %s request to: %s", c.Request.Method, c.Request.URL.Path)
		}
		c.JSON(http.StatusNotFound, response)
	})

	router.GET("/users/:id", srv.UserService.GetUserById)
	router.GET("/users", srv.UserService.GetUsers)
	router.POST("/users", srv.UserService.CreateUser)

	var HOST string = config.GetEnv("SERVER_HOST")
	var PORT string = config.GetEnv("SERVER_PORT")

	println("[server] Listening on http://" + HOST + ":" + PORT)
	router.Run(HOST + ":" + PORT)
}
