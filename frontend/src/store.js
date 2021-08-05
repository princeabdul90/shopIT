/**
 * Developer: Abubakar Abdullahi
 * Date: 15/07/2021
 * Time: 4:25 PM
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, productsReducer, 
         productReducer, newReviewReducer, 
         productReviewsReducer, modifyProductReducer, 
         modifyReviewReducer 
        } from './reducers/productReducers';
import { authReducer, userReducer, 
         forgotPasswordReducer, usersReducer, 
         userDetailsReducer 
        } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import { newOrderReducer, myOrdersReducer, 
         orderDetailReducer, allOrdersReducer, 
         modifyOrderReducer 
        } from "./reducers/orderReducers";


const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    
    users: usersReducer,
    userDetails: userDetailsReducer,
    
    products: productsReducer,
    product: productReducer,
    newProduct: newProductReducer,
    modifyProduct: modifyProductReducer,
    
    newReview: newReviewReducer,
    productReviews: productReviewsReducer,
    modifyReview: modifyReviewReducer,
    
    cart: cartReducer,

    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    order: orderDetailReducer,
    allOrders: allOrdersReducer,
    modifyOrder: modifyOrderReducer 
    
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')  
            ? JSON.parse(localStorage.getItem('shippingInfo'))  
            : {}
    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store