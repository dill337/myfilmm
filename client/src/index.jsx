import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';



import MainView from './components/main-view/main-view';
import moviesApp from './reducers/reducers';

//import statement to indicate that you need to bundle ./index.scss
import './index.scss';

const store = createStore(moviesApp)

//main component (will eventually use all the others)
class MyFilmApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />;
      </Provider>
    );
  }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

//tells react to render your app in the root DOM element 
ReactDOM.render(React.createElement(MyFilmApplication), container);
