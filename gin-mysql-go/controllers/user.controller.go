package controllers

import (
	"net/http"

	"example.com/m/config"
	"example.com/m/models"
	"example.com/m/utils"
	"github.com/gin-gonic/gin"
)

type UserController struct{}

func (e *UserController) GetUsers(c *gin.Context) {
	var users []models.User
	c.JSON(http.StatusOK, users)
}

func (e *UserController) GetUser(c *gin.Context) {
	var id string
	if id = c.Param("id"); id == "" {
		c.Error(utils.ErrorBadRequest("User ID is required"))
		return
	}

	var user models.User
	if err := config.Database.First(&user, id).Error; err != nil {
		c.Error(utils.ErrorNotFound("User " + id + " not found"))
		return
	}

	c.JSON(http.StatusOK, user)
}

func (e *UserController) CreateUser(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"message": "This endpoint is still under construction"})
}
