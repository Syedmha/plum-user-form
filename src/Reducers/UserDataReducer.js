const UserDataReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL":
            return {
                ...state,
                email: [...state.email, action.playload]
            }
        case "MOBILE":
            return {
                ...state,
                mobile: [...state.mobile, action.playload]
            }
        case "ADD1":
            return {
                ...state,
                address1: [...state.address1, action.playload]
            }
        case "ADD2":
            return {
                ...state,
                address2: [...state.address2, action.playload]
            }
        case "PIN":
            return {
                ...state,
                pincode: [...state.pincode, action.playload]
            }
        case "STATE":
            return {
                ...state,
                state: [...state.state, action.playload]
            }
        case "DEDUCT":
            return {
                ...state,
                deductibleamt: [...state.deductibleamt, action.playload]
            }
        default:
            return {
                ...state
            }

    }
}

export default UserDataReducer;