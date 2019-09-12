import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import theme from './config/themes/appTheme';
import {App} from './components/componentsInterface';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from '@material-ui/core/styles';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render( <Root/>, document.getElementById('app'));
registerServiceWorker();

