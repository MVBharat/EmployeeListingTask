import React from 'react';
import Login from './Components/Login/Login';

class App extends React.Component{   
    render(){
        return(
            <div>    
                <h1>Employee Details Listing Task</h1>          
                <Login />            
            </div>
        )
    }
}
    

export default App;