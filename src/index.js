import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();


//HERE'S SOME NOTES THIS IS WHAT IT SHOULD LOOK LIKE KIND OF:

//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//
//let reducer = (oldState, action) => {
//  if (action.type === 'BLOW_UP') {
//    return {
//      ...oldState,
//      messageInABottle: 'Enjoy picking up the pieces.',
//      isBlowingUp: true
//    };
//  } else if (action.type === 'DEFUSE_BOMB') {
//    return {
//      ...oldState,
//      messageInABottle: 'That was close!',
//      isBlowingUp: false
//    };
//  } else {
//    return oldState;
//  }
//};
//
//let initialState = {
//  isBlowingUp: false,
//  messageInABottle: ''
//};
//
//let store = createStore(
//  reducer,
//  initialState,
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);
//
//let app =
//  <Provider store={store}>
//    <Router />
//  </Provider>
//
//ReactDOM.render(app, document.getElementById('root'));
//
//// Any component that wants to show the Redux state!
//
//import React from 'react';
//import { connect } from 'react-redux';
//
//let BombShelter = (props) =>
//  <div>
//    <h1>{props.messageInABottle}</h1>
//    <p>{
//      props.isBlowingUp ? 'TAKE COVER' : 'All is calm.'
//    }</p>
//  </div>
//
//let BombShelterSmart = connect(state => state)(BombShelter);
//
//export default BombShelterSmart;





















































































