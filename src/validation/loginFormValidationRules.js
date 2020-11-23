export const loginFormValidationRules = (title, fragment) => {
    let errors = []
    if (!title || !fragment) {
        errors.title = "this inputs are required"
    }
    return errors
};

export const loginFormValidationRulesPath = (text) => {
    let errors = []
    if (!text) {
        errors.text = "this text is required"
    }
    return errors
};
