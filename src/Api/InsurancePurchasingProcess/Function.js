import Function from '../../Function';

export function insurancePurchasingProcessPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insurancePurchasingProcess/${url}`);
}