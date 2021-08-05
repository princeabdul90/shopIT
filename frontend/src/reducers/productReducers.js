/**
 * Developer: Abubakar Abdullahi
 * Date: 15/07/2021
 * Time: 4:42 PM
 */
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_RESET,
    NEW_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_RESET,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_FAIL,
    PRODUCT_REQUEST, 
    PRODUCT_SUCCESS, 
    PRODUCT_FAIL, 
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstant';



export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        case ALL_PRODUCTS_REQUEST:
        case ADMIN_PRODUCTS_REQUEST:    
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }

        case ADMIN_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }    

        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCTS_FAIL:    
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const productReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            }
            
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }    

        case PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}


export const modifyProductReducer = (state = { }, action) => {
    switch (action.type) {

        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            }
            

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }  

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }   
            

        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false
            }   

        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false
            }     

        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:    
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}

export const newReviewReducer = (state = { }, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                loading: true,
                ...state
            }
            
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }    

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }   

        case NEW_REVIEW_FAIL:
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}

// Get Reviews (on Admin Dashboard)
export const productReviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
            return {
                loading: true,
                ...state
            }
            
        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }     

        case GET_REVIEWS_FAIL:
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}

// Delete Reviews (on Admin Dashboard)
export const modifyReviewReducer = (state = { }, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                loading: true,
                ...state
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }  

        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false
            }   
    
        case DELETE_REVIEW_FAIL:  
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}


export const newProductReducer = (state = { }, action) => {
    switch (action.type) {

        case NEW_PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            }
            
        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product
            }    

        case NEW_PRODUCT_RESET:
            return {
                ...state,
                success: false
            }   

        case NEW_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }    
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
            
        default:
            return state;
    
    }
}