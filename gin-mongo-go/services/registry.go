package services

import "example.com/m/services/user"

type Registry struct {
	UserService *user.Extension
}

func NewRegistry() *Registry {
	return &Registry{
		UserService: &user.Extension{},
	}
}
