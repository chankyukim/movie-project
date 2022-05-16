import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './modules';
import { GlobalStyle } from './styles';
import { AuthProvider } from './context/AuthProvider';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
