import Function from '../../Function';

export function directPaymentProcessPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/directPaymentProcess/${url}`);
}