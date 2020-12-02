import { SET_BOOKS, GET_BOOKS, POST_BOOKS, PATCH_BOOKS, DELETE_BOOKS, CHANGE_TITLE, CHANGE_FRAGMENT, UPDATE_BODY } from "../types";

const bookReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BODY:
            return {
                ...state,
                changedText: action.payload,
            };

        case CHANGE_FRAGMENT:
            return {
                ...state,
                fragment: action.payload
            };

        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            };

        case SET_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case POST_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case PATCH_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case DELETE_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        default:
            return state
    };
};

export default bookReducer;