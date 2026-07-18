package middlewares

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"example.com/m/utils"
)

func ErrorMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()

		if len(c.Errors) > 0 {
			err := c.Errors.Last().Err
			var env string
			if env = os.Getenv("APP_ENV"); env == "" {
				env = "production"
			}

			if e, ok := err.(utils.AppError); ok {
				response := gin.H{"message": e.Message}
				if env == "development" {
					response["details"] = e.Raw
				}
				c.JSON(e.Status, response)
				c.Abort()
				return
			}

			log.Printf("[CRITICAL ERROR] %v", err)
			response := gin.H{"message": "Something went wrong!"}
			if env == "development" {
				response["details"] = err.Error()
			}
			c.JSON(http.StatusInternalServerError, response)
		}

		c.Abort()
	}
}
