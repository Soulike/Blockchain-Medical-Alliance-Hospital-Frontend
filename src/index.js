import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import Store from './Store';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import './ModuleConfig';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import LocaleProvider from 'antd/lib/locale-provider';


ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Provider store={Store}>
            <Router />
        </Provider>
    </LocaleProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
