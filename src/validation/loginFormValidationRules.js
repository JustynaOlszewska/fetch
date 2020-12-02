export const loginFormValidationRules = (title, fragment) => {
    let errors = []
    if (!title || !fragment) {
        errors.title = "this inputs are required"
    }
    return errors
};

export const loginFormValidationRulesPatch = (text) => {
    let errors = []
    if (!text) {
        errors.text = "this text is required"
    }
    return errors
};
