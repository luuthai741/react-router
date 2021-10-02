import React, { Component } from 'react';
import { Prompt } from 'react-router-dom'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            isChecked: false,
        }
    }

    handle = (event) => {
        this.setState({
            text: event.target.value
        })
        if (this.state.text.length > 0) {
            this.setState({
                isChecked: true
            })
        }
    }
    onSubmit = event => {
        event.preventDefault();
        this.setState({
            text: "",
            isChecked: false
        });
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input type="text" value={this.state.text} onChange={(event) => this.handle(event)} />
                    <button type="submit">Submit</button>
                </form>
                <Prompt
                    when={this.state.isChecked}
                    message={location => (`Are you sure about that ?`)}
                />
            </div>
        );
    }
}

export default Contact;