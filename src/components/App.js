
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import PropTypes from 'prop-types';
import agent from '../agent';

const mapStateToProps = state => ({
  appLoaded : state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
   dispatch({type:'APP_LOAD', payload, token }),
  onRedirect: () =>
   dispatch({type:'REDIRECT'})
})
class App extends React.Component {

  
  componentWillMount(){
    const token = window.localStorage.getItem('jwt');
    console.log(token);
    if(token){
      agent.setToken(token);
    }
    this.props.onLoad( token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.redirectTo){
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }
  render() {
    
    console.log(this.props.currentUser);
    if(this.props.appLoaded){
    return (
      
      <div>
       <Header currentUser={this.props.currentUser} appName = {this.props.appName}/>
       {this.props.children}
      </div>
      
    );
  } else {
    return (
      
      <div>
       <Header currentUser={this.props.currentUser} appName = {this.props.appName}/>
       Loading...
      </div>
      
    );
  }
  }
}

App.contextTypes = {
  router : PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);