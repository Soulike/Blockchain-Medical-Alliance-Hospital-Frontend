import Function from '../../Function';

export function accountPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/account/${url}`);
}