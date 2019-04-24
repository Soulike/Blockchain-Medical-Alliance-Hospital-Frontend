import * as ACTION_TYPE from './ACTION_TYPE';
import Api from '../../../Api';

export function getDirectPaymentInfoAction(directPaymentInfoId)
{
    return async dispatch =>
    {
        const directPaymentInfo = await Api.sendGetDirectPaymentInfoRequestAsync(directPaymentInfoId);
        if (directPaymentInfo)
        {
            dispatch(getDirectPaymentInfoSuccessfulAction(directPaymentInfo));
        }
        else
        {
            dispatch(getDirectPaymentInfoFailedAction());
        }
    };
}

function getDirectPaymentInfoSuccessfulAction(directPaymentInfo)
{
    return {
        type: ACTION_TYPE.GET_DIRECT_PAYMENT_INFO_SUCCESSFUL,
        directPaymentInfo,
    };
}

function getDirectPaymentInfoFailedAction()
{
    return {
        type: ACTION_TYPE.GET_DIRECT_PAYMENT_INFO_FAILED,
    };
}