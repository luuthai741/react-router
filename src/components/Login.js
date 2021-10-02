import React, { Component } from 'react';
import { Prompt, Redirect } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: "",
            isChecked: false,
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        if (this.state.txtUsername.length > 0 && this.state.txtPassword.length > 0) {
            this.setState({
                isChecked: true
            })
        } else if (this.state.txtUsername.length === 0 && this.state.txtPassword.length === 0) {
            this.setState({
                isChecked: false
            })
        }
    }
    onSubmit = event => {
        event.preventDefault();
        let { txtUsername, txtPassword } = this.state;
        console.log(this.state);
        if (txtUsername === "admin" && txtPassword === "123456") {
            localStorage.setItem("ADMIN", JSON.stringify({ username: txtUsername, password: txtPassword }))
        }
        this.setState({
            txtPassword: "",
            txtUsername: "",
            isChecked: false
        });


    }


    render() {
        let { txtUsername, txtPassword, isChecked } = this.state;
        let isLoggin = localStorage.getItem("ADMIN");
        // console.log(JSON.parse(isLoggin));
        if (isLoggin !== null) {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={(event) => this.onSubmit(event)}>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" value={txtUsername} type="text" onChange={(event) => this.onChange(event)} name="txtUsername" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" value={txtPassword} onChange={(event) => this.onChange(event)} type="password" name="txtPassword" />
                            </div>
                            <button className="btn btn-ouline-primary">Submit</button>
                        </form>
                    </div>
                    <Prompt
                        when={isChecked}
                        message={location => (`Are you sure about that`)}
                    />
                </div>
            </div>
        );
    }
}

export default Login;