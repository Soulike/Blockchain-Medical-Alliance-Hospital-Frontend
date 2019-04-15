import React from 'react';
import {browserHistory, IndexRedirect, Route, Router} from 'react-router';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../Config';
import PAGE_ID_TO_COMPONENT from './PAGE_ID_TO_COMPONENT';
// 所有页面的 View 在此处导入
import RootContainer from '../ComponentContainers/RootContainer';
import {Function as AuthProcessorFunction} from '../Components/AuthProcessor';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={RootContainer}>
            <IndexRedirect to={PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_LOGIN]} />
            {
                Object.values(NOT_REQUIRE_LOGIN_PAGE_ID).map(PAGE_ID => <Route path={PAGE_ID_TO_ROUTE[PAGE_ID]}
                                                                               component={PAGE_ID_TO_COMPONENT[PAGE_ID]}
                                                                               key={PAGE_ID_TO_ROUTE[PAGE_ID]} />)
            }
            {
                Object.values(REQUIRE_LOGIN_PAGE_ID).map(PAGE_ID => <Route path={PAGE_ID_TO_ROUTE[PAGE_ID]}
                                                                           component={PAGE_ID_TO_COMPONENT[PAGE_ID]}
                                                                           key={PAGE_ID_TO_ROUTE[PAGE_ID]}
                                                                           onEnter={AuthProcessorFunction.requireLogin} />)
            }
        </Route>
    </Router>
);

export default Routes;