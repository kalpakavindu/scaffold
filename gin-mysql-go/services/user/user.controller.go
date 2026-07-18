package user

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"gin-mysql-go/config"
)

func (e *Extension) GetUsers(c *gin.Context) {
	var users []User
	if err := config.Database.Find(&users).Error; err != nil {
		c.Error(err)
		return
	}

	c.JSON(http.StatusOK, users)
}

func (e *Extension) GetUserById(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"message": "This endpoint is under construction"})
}

func (e *Extension) CreateUser(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"message": "This endpoint is under construction"})
}
