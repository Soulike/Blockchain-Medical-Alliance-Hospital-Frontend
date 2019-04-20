import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state = {}, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.GET_DIRECT_PAYMENT_INFO_SUCCESSFUL:
        {
            const {directPaymentInfo} = action;
            return {
                ...state,
                directPaymentInfo,
            };
        }
        case ACTION_TYPE.GET_DIRECT_PAYMENT_INFO_FAILED:
        default:
        {
            return state;
        }
    }
}