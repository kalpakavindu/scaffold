package user

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"example.com/m/utils"
)

func (e *Extension) GetUsers(c *gin.Context) {
	c.JSON(http.StatusOK, users)
}

func (e *Extension) GetUserById(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		c.Error(utils.Error_BadRequest("User id is required"))
		return
	}
	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.Error(utils.AppError{Status: http.StatusBadRequest, Message: "Invalid user id", Raw: err})
		return
	}

	for _, user := range users {
		if user.ID == uint64(idInt) {
			c.JSON(http.StatusOK, user)
			return
		}
	}

	c.Error(utils.Error_NotFound("User id " + id + " not found"))
}

func (e *Extension) CreateUser(c *gin.Context) {
	var reqUser NewUserSchema
	var newUser User

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.Error(utils.AppError{Status: http.StatusBadRequest, Message: "Invalid request", Raw: err})
		return
	}

	newUser = User{
		ID:                 users[len(users)-1].ID + 1,
		FirstName:          reqUser.FirstName,
		LastName:           reqUser.LastName,
		Username:           reqUser.Username,
		Email:              reqUser.Email,
		Role:               "user",
		PhoneNumber:        reqUser.PhoneNumber,
		PasswordHash:       "hashed_password",
		PasswordResetToken: "reset_token",
		VerificationToken:  "verification_token",
		RefreshTokenHash:   "refresh_token_hash",
		LastLogin:          1234567890,
		CreatedAt:          1234567890,
		UpdatedAt:          1234567890,
	}

	users = append(users, newUser)
	c.JSON(http.StatusCreated, gin.H{"message": "User created successfully", "user": newUser.ID})
}
