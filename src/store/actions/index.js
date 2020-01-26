export const signin = (credential) =>{
    return{
        type: 'SIGNIN',
        payload: credential
    }
}