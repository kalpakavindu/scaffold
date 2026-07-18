package user

type NewUserSchema struct {
	FirstName   string `json:"first_name" binding:"required,alphanum"`
	LastName    string `json:"last_name" binding:"alphanum"`
	Username    string `json:"username" binding:"required,alphanum"`
	Email       string `json:"email" binding:"required,email"`
	PhoneNumber string `json:"phone_number" binding:"numeric,min=10,max=20"`
	Password    string `json:"password" binding:"required,min=8"`
}
