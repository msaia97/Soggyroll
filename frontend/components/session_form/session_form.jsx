import React from 'react';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.insertDemoUser= this.insertDemoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

   demoUser(e){
      e.preventDefault()
      const demoUser = {
        username: "CoryInDaHouse", 
        password: "BaxterBaddie"
      }
      this.props.processForm(demoUser).then(() => this.props.history.push('/'))
    }

    insertDemoUser () {
        if (this.props.formType === 'login') {
        return (
            <div className='demo-login'>
            <h2>No Account? Try a demo!</h2>
            <button onClick={this.demoUser}>demo</button>
            </div>
        )
        }
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
                    <div className="login-form">
                        <br />
                        {this.renderErrors()}
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
                         {this.insertDemoUser()}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;