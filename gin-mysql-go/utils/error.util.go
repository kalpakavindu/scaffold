package utils

import "net/http"

type AppError struct {
	Status  int    `json:"-"`
	Message string `json:"message"`
	Raw     error  `json:"-"`
}

func (e AppError) Error() string {
	return e.Message
}

func ErrorNotFound(message string) AppError {
	return AppError{Status: http.StatusNotFound, Message: message, Raw: nil}
}
func ErrorBadRequest(message string) AppError {
	return AppError{Status: http.StatusBadRequest, Message: message, Raw: nil}
}
