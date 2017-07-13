import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';

const unauthenticatedPages=['/','/signup'];
const authenticatedPages=['/dashboard'];
const onEnterPublicPage=()=>{
  if(Meteor.userId()){
    browserHistory.replace('/dashboard');
  }
};

const OnEnterPrivatePage=()=>{
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};

export const onAuthChange=(isAuthenticated)=>{
  const pathname=browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPages = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/dashboard');
  }
  if(isAuthenticatedPages && !isAuthenticated){
    browserHistory.replace('/');
  }

  // console.log('isAuthenticated',isAuthenticated);
}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/dashboard" component={Dashboard} onEnter={OnEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
