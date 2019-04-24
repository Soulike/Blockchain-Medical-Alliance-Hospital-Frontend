import Function from '../../Function';

export function directPaymentDetailPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/directPaymentDetail/${url}`);
}