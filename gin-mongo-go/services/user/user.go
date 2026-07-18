package user

type User struct {
	ID                 uint64 `json:"_id"`
	FirstName          string `json:"first_name"`
	LastName           string `json:"last_name"`
	Username           string `json:"username"`
	Email              string `json:"email"`
	Role               string `json:"role"`
	PhoneNumber        string `json:"phone_number"`
	PasswordHash       string `json:"password_hash"`
	PasswordResetToken string `json:"password_reset_token"`
	VerificationToken  string `json:"verification_token"`
	RefreshTokenHash   string `json:"refresh_token_hash"`
	LastLogin          int    `json:"last_login"`
	CreatedAt          int    `json:"created_at"`
	UpdatedAt          int    `json:"updated_at"`
}

type Extension struct {
	User User
}
