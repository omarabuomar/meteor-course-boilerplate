import React from 'react';

import { Accounts } from 'meteor/accounts-base';
import {Link} from 'react-router';

// const userSchema= new SimpleSchema({
//   email:{
//     regEx:SimpleSchema.RegEx.Email
//   },
//   password:{
//       min:9
//   }
// });

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error:''
    };
  }
  onSubmit(e){
    e.preventDefault();
    // let email=this.refs.email.value.trim();
    let email = this.emailInput.value.trim();
    let password=this.refs.password.value.trim();
    if(password.length<9){
      return this.setState({error:'Password must be more than 8 characters.'});
    }
    Accounts.createUser({email,password},(err)=>{
      if(err){
        this.setState({error:err.reason});
      }else{
        this.setState({error:''});
      }
    });

    // this.setState({
    //   error: 'Something went wrong.'
    // });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            {/* <input id="email" type="email" ref="email" name="email" placeholder="Email"/> */}
            <input type="email" ref={(input) => { this.emailInput = input; }} name="email" placeholder="Email"/>
            <input id="password" type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>
          <Link to="/">
            Already have an account?
          </Link>
        </div>
      </div>
    );
  }
}
