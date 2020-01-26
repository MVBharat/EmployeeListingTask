import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard'
import style from './Login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            emailError: '',
            passwordError: ''            
        }
    }

    validate = () => {
        let emailError = '';
        let passwordError = '';

        const {credential} = this.props

        if(!this.state.emailError.includes('@') || this.email.value !== credential.email ){
            emailError = 'Invalid Email'
        }
        if(this.state.passwordError.length <= 4 || this.pass.value !== credential.password){
            passwordError = 'Invalid Password *password must be more than 4 digit'
        }

        if(passwordError || emailError){
            this.setState({passwordError, emailError});
            return false;
        }
     
        return true;
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {credential} = this.props
        const isValid = this.validate();
        if(!isValid){

            if(this.email.value === credential.email && this.pass.value === credential.password){
                console.log("LOGGED IN SUCCESSFUL")
                this.setState({
                    loggedIn: true
                })
            }
            else{
                console.log("LOGIN  UNSUCCESSFUL")              
            }
        }        
    }
    render(){
        return(
        <div className={style.loginpage_body}>                       
            {
                this.state.loggedIn ? ( <Dashboard loggedIn={this.loggedIn} /> ): 

                <form className={style.form} onSubmit={this.onSubmitHandler}>
                    <input 
                        type="email" 
                        placeholder="Enter Email Address" 
                        id="email" 
                        className={style.input_field}
                        ref={(input) => this.email = input}            
                    />
                    {
                    this.state.emailError ? 
                        <p className={style.error_msg} >{this.state.emailError}</p> : ''
                    }
                    <br />

                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        id="password"
                        className={style.input_field}
                        ref={(input) => this.pass = input}
                    />
                    { this.state.passwordError ?
                        <p className={style.error_msg} >{this.state.passwordError}</p> : ''
                    }
                    <br />

                    <button type="submit" id="login-button" className={style.login_btn} >Login</button>
                </form>  
            }

        </div>
        )
    }
}
    
const mapStateToProps = (state) =>{
    return{
        credential: state.auth.credential
    }
}

export default connect(mapStateToProps)(Login);