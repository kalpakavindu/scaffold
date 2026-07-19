package controllers

type Registry struct {
	UserController *UserController
}

func NewRegistry() *Registry {
	reg := &Registry{
		UserController: &UserController{},
	}

	return reg
}
