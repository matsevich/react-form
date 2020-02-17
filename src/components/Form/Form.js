import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            username: "",
            password: "",
            errors: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset(e) {
        this.setState({isGoing: false,
            username: "",
            password: "",
            errors: false}
            )
    }
    handleSubmit(e) {
        let errors = false;
        if (!this.state.username || this.state.username.indexOf('@') < 0) {
            errors = true;
        } else if (!this.state.password) {
            errors = true;
        } else if(!this.state.isGoing) {
            errors = true;
        }
        if (errors) {
            this.setState({errors: true})
        } else {
            alert(`Congratulations ${this.state.username} you shall pass!`)
        }
        e.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <form className="forma" onSubmit={this.handleSubmit}>
                    {this.state.errors ? <div className="error-div"><span>ERROR!!!</span><img src="./no-no.png" alt="Error!"></img></div> : null}
                    <label>
                        <input
                            className="in-form"
                            name="username"
                            type="text"
                            placeholder="johnnythedesigner@gmail.com"
                            value={this.state.username}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        <input
                            className="in-form"
                            name="password"
                            type="password"
                            placeholder="********"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Agree with all conditions
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                    </label>
                    <input className="submit" type="submit" value="SIGN IN" />
                    <input type="reset" onClick={this.handleReset}/>
                </form>
            </div>
        );
    }
}
export default Form;