package validators

type SignupSchema struct {
	FirstName       string `json:"first_name" binding:"required,alphanum"`
	LastName        string `json:"last_name" binding:"alphanum"`
	Username        string `json:"username" binding:"required,alphanum,min=3,max=20"`
	Email           string `json:"email" binding:"required,email,max=100"`
	Password        string `json:"password" binding:"required,min=8,max=70"`
	ConfirmPassword string `json:"confirm_password" binding:"required,min=8,max=70,eqfield=Password"`
}

type SigninSchema struct {
	Email    string `json:"email" binding:"email,max=100,required_without=Username"`
	Username string `json:"username" binding:"alphanum,min=3,max=20,required_without=Email"`
	Password string `json:"password" binding:"required,min=8,max=70"`
}

type ChangePasswordSchema struct {
	OldPassword     string `json:"old_password" binding:"required,min=8,max=70"`
	NewPassword     string `json:"new_password" binding:"required,min=8,max=70"`
	ConfirmPassword string `json:"confirm_password" binding:"required,min=8,max=70,eqfield=NewPassword"`
}

type ResetPasswordSchema struct {
	Password        string `json:"password" binding:"required,min=8,max=70"`
	ConfirmPassword string `json:"confirm_password" binding:"required,min=8,max=70,eqfield=Password"`
	Token           string `json:"token" binding:"required"`
}

type UpdateProfileSchema struct {
	FirstName string `json:"first_name" binding:"alphanum"`
	LastName  string `json:"last_name" binding:"alphanum"`
	Email     string `json:"email" binding:"email,max=100"`
	Username  string `json:"username" binding:"alphanum,min=3,max=20"`
}

type RequestPasswordResetSchema struct {
	Email    string `json:"email" binding:"email,max=100,required_without=Username"`
	Username string `json:"username" binding:"alphanum,min=3,max=20,required_without=Email"`
}

type VerifyEmailSchema struct {
	Token string `json:"token" binding:"required"`
}

type RequestVerificationSchema struct {
	Email string `json:"email" binding:"required,email,max=100"`
}
