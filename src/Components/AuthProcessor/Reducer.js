import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state = {}, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.SET_LOGGED_IN:
        {
            return {
                ...state,
                hasLoggedIn: true,
            };
        }
        case ACTION_TYPE.SET_LOGGED_OUT:
        {
            return {
                ...state,
                hasLoggedIn: false,
            };
        }
        default:
        {
            return state;
        }
    }
}