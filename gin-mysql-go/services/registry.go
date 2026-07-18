package services

import "gin-mysql-go/services/user"

// Registry contains all services
type Registry struct {
	UserService *user.Extension
}

func NewRegistry() *Registry {

	// Initialize all services
	reg := &Registry{
		UserService: &user.Extension{},
	}

	// Migrate all database models
	reg.UserService.Migrate()

	return reg
}
