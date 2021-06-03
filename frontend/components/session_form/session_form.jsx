import React from 'react';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

   demo(e){
      e.preventDefault()
      const user = {
        username: "CoryInDaHouse", 
        password: "BaxterBaddie"
      }
      this.props.processForm(user).then(() => this.props.history.push('/'))
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to Soggyroll!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit"
                            type="submit" 
                            value={this.props.formType}
                        />
                        <br />
                        <p>No account? Sign in as a demo user!</p>
                        <button onClick={this.demo}>Demo User</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;