// For getting all products (for users : it contains filters also in backend API)
export const ALL_PRODUCT_REQUEST = "ALL_PRODUCT_REQUEST";
export const ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS";
export const ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL";

//for getting one product details
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

//for giving review (users)
export const NEW_REVIEW_REQUEST = "NEW_REVIEW_REQUEST";
export const NEW_REVIEW_SUCCESS = "NEW_REVIEW_SUCCESS";
export const NEW_REVIEW_RESET = "NEW_REVIEW_RESET";
export const NEW_REVIEW_FAIL = "NEW_REVIEW_FAIL";

//for getting all reviews of a particular product (for ADMIN )
export const ADMIN_ALL_REVIEW_REQUEST = "ADMIN_ALL_REVIEW_REQUEST";
export const ADMIN_ALL_REVIEW_SUCCESS = "ADMIN_ALL_REVIEW_SUCCESS";
export const ADMIN_ALL_REVIEW_FAIL = "ADMIN_ALL_REVIEW_FAIL";
//for deleting a particular review (for ADMIN)
export const DELETE_REVIEW_REQUEST = "DELETE_REVIEW_REQUEST";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_RESET = "DELETE_REVIEW_RESET";
export const DELETE_REVIEW_FAIL = "DELETE_REVIEW_FAIL";

// For getting all products (for ADMIN : it DOESNOT contain any filter in backend API, its just gives product list)
export const ADMIN_ALL_PRODUCT_REQUEST = "ADMIN_ALL_PRODUCT_REQUEST";
export const ADMIN_ALL_PRODUCT_SUCCESS = "ADMIN_ALL_PRODUCT_SUCCESS";
export const ADMIN_ALL_PRODUCT_FAIL = "ADMIN_ALL_PRODUCT_FAIL";

//Creating new product (for Admin)
export const NEW_PRODUCT_REQUEST = "NEW_PRODUCT_REQUEST";
export const NEW_PRODUCT_SUCCESS = "NEW_PRODUCT_SUCCESS";
export const NEW_PRODUCT_RESET = "NEW_PRODUCT_RESET";
export const NEW_PRODUCT_FAIL = "NEW_PRODUCT_FAIL";

//deleting a product (for Admin)
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_RESET = "DELETE_PRODUCT_RESET";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";

//updating details of a product (for Admin)
export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_RESET = "UPDATE_PRODUCT_RESET";
export const UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL";

//to get recommendedProducts for a LOGGED-IN-user, on basis of his past orders categories ONLY
export const RECOMMENDED_PRODUCTS_REQUEST = "RECOMMENDED_PRODUCTS_REQUEST";
export const RECOMMENDED_PRODUCTS_SUCCESS = "RECOMMENDED_PRODUCTS_SUCCESS";
export const RECOMMENDED_PRODUCTS_FAIL = "RECOMMENDED_PRODUCTS_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";