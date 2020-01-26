const initState = {
        credential:
            {
                "email": 'hruday@gmail.com',
                "password": 'hruday123'
            }   
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNIN':
            return state === credential;
        default:
            return state;
    }
}

export default authReducer;