/**
 * Created by Jhalak on 6/23/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom'

// Youtube Api Key
const API_KEY = "AIzaSyCKEYx59V20QF1qTg7qjCi0uiRSO9SNFB4";

// Create a new component and it should produce some Html

const App = function(){
    return <div>Hi How</div>;
}

// find a way to add this component's generated html and put it in DOm/webpage
// Instance of app converts to: React.createElement(App, null);
// Actual Instance of app is formed like in next line:
ReactDOM.render(<App />, document.querySelector('.container'));