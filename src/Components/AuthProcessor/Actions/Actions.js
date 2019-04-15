import * as ACTION_TYPE from './ACTION_TYPE';

export function setLoggedInAction()
{
    return {
        type: ACTION_TYPE.SET_LOGGED_IN,
    };
}

export function setLoggedOutAction()
{
    return {
        type: ACTION_TYPE.SET_LOGGED_OUT,
    };
}