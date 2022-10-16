import React, { createContext, useContext, useReducer } from 'react'
import * as yup from 'yup';
import UserDataReducer from '../Reducers/UserDataReducer'

const initialState = {
    plan: [],
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
    deductibleamt: "",
}

let schema = yup.object().shape({
    email: yup.string().email().required(),
    mobile: yup.number().required().positive().integer().max(10),
    address1: yup.string().required(),
    address2: yup.string().required(),
    pincode: yup.number().required().positive().integer().max(7),
    state: yup.string().required(),
    deductibleamt: yup.number().required().positive().integer(),

});

const UserDetailsContext = createContext(initialState);

const useUserDetailsContext = () => useContext(UserDetailsContext);

function UserDetailsContextProvider({ children }) {

    const [userDataState, userDataDispatch] = useReducer(UserDataReducer, initialState)
    return (
        <UserDetailsContext.Provider value={{ schema, userDataState, userDataDispatch }}>
            {children}
        </UserDetailsContext.Provider>
    )
}

export { useUserDetailsContext, UserDetailsContextProvider }