import React, { Component } from 'react';
import style from './Dashboard.css'
import {connect} from 'react-redux';
import Login from '../Login/Login';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
           loggedIn: false
        }
    }
    handleLogout = () => {
        this.setState({
            loggedIn: true
        })
    }
    render() {
        const {employeers} = this.props;
        console.log(this.props)
        return (
            <div>                
                {
                    this.state.loggedIn ?
                    <Login /> : 
                    <div>
                        <button className={style.logout_btn} onClick={this.handleLogout} >Logout</button>
                        <table className={style.darkTable}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            { employeers && employeers.map((eachEmployee) => {
                                return <tbody  key={eachEmployee.id}  >
                                    <tr>
                                        <td>{eachEmployee.id}</td>
                                        <td>{eachEmployee.name}</td>
                                        <td>{eachEmployee.age}</td>
                                        <td>{eachEmployee.gender}</td>
                                        <td>{eachEmployee.email}</td>
                                        <td>{eachEmployee.phoneNo}</td>
                                    </tr>                       
                                </tbody>      
                                })                                      
                            }
                        </table>
                    </div>
                }

            </div>                    
        );
    }
}

const mapStateToProps = (state) => {
    return{
        employeers: state.employeer.user
    }
}

export default connect(mapStateToProps)(Dashboard);