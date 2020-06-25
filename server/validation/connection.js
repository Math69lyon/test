const Validator = require('validator')

module.exports = function (data) {
    let errors = {}

    //Email validator:
    if (!Validator.isEmail(data.email))
    {
        errors.email = 'Email is invalid'
    }
    if (Validator.isEmpty(data.email))
    {
        errors.email = 'Email is required'
    }

    //Password validator:
    if (!Validator.isLength(data.password, { min: 4, max: 20}))
    {
        errors.password = 'Password must between 4 and 20 characters'
    }
    if (Validator.isEmpty(data.password))
    {
        errors.password = 'Password is required'
    }

    return { errors, isValid: Object.keys(errors).length === 0 }
}