import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.insertDemoUser= this.insertDemoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.enterEmail = this.enterEmail.bind(this);
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
        if (this.props.formType === 'Log in') {
            return (
                <div className='demo-login'>
                    <h2>No Account? Try a demo!</h2>
                    <br />
                    <input className="demo-button"
                        type="submit"
                        value="Demo"
                        onClick={this.demoUser}
                    />
                </div>
            )
        }
    }
  
    componentWillUnmount() {
        this.props.removeErrors();
    }


    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    

    enterEmail(){
        if(this.props.formType === 'Sign up'){
            return(
                <div className="email-input">
                    <label>Email
                        <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                         />
                    </label>
                </div>
            )
        }
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
                    <br />
                    {/* <div className="login-signup-choice">
                     {this.props.formType} or {this.props.navLink}
                    </div> */}
                    <div className="login-form">
                        <br />
                        {this.enterEmail()}
                        <br />
                        <div className="username-input">
                            <label>Username
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                        </div>
                        <br />
                        <br />
                        <div className="password-input">
                            <label>Password
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                        </div>
                        <br />
                        <input className="session-submit"
                            type="submit" 
                            value={this.props.formType}
                        />
                         {this.insertDemoUser()}
                          <br />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;

