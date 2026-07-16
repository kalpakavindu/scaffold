import Joi from 'joi';

export const signinSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
      'string.trim': 'Email must not contain leading or trailing spaces',
    }),
  password: Joi.string().min(8).max(32).required().trim().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    'string.max': 'Password must be at most 32 characters long',
    'string.trim': 'Password must not contain leading or trailing spaces',
  }),
  remember: Joi.boolean().optional(),
});

export const signupSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(20).required().trim().messages({
    'any.required': 'First name is required',
    'string.empty': 'First name is required',
    'string.trim': 'First name must not contain leading or trailing spaces',
    'string.min': 'First name must be at least 3 characters long',
    'string.max': 'First name must be at most 20 characters long',
    'string.alphanum': 'First name must only contain letters and numbers',
  }),
  lastName: Joi.string().alphanum().min(3).max(20).optional().trim().messages({
    'string.trim': 'Last name must not contain leading or trailing spaces',
    'string.min': 'Last name must be at least 3 characters long',
    'string.max': 'Last name must be at most 20 characters long',
    'string.alphanum': 'Last name must only contain letters and numbers',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
      'string.trim': 'Email must not contain leading or trailing spaces',
    }),
  password: Joi.string().min(8).max(32).required().trim().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    'string.max': 'Password must be at most 32 characters long',
    'string.trim': 'Password must not contain leading or trailing spaces',
  }),
  confirmPassword: Joi.string()
    .min(8)
    .max(32)
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.required': 'Password confirmation is required',
      'string.empty': 'Password confirmation is required',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must be at most 32 characters long',
      'string.trim':
        'Password confirmation must not contain leading or trailing spaces',
      'any.only': 'Password and confirm password do not match',
    }),
  acceptTerms: Joi.boolean().required().messages({
    'any.required': 'You must accept the terms and conditions',
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).max(32).required().trim().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    'string.max': 'Password must be at most 32 characters long',
    'string.trim': 'Password must not contain leading or trailing spaces',
  }),
  confirmPassword: Joi.string()
    .min(8)
    .max(32)
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.required': 'Password confirmation is required',
      'string.empty': 'Password confirmation is required',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must be at most 32 characters long',
      'string.trim':
        'Password confirmation must not contain leading or trailing spaces',
      'any.only': 'Password and confirm password do not match',
    }),
  resetToken: Joi.string().alphanum().required().trim().messages({
    'any.required': 'Reset token is required',
    'string.empty': 'Reset token is required',
    'string.trim': 'Reset token must not contain leading or trailing spaces',
    'string.alphanum': 'Reset token must only contain letters and numbers',
  }),
});

export const requestResetPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
      'string.trim': 'Email must not contain leading or trailing spaces',
    }),
});

export const requestVerificationEmailSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
      'string.trim': 'Email must not contain leading or trailing spaces',
    }),
});
