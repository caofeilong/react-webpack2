import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import store from './redux/store'

const history = createBrowserHistory()


import App from './App.jsx';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    render(App)
  });
}
