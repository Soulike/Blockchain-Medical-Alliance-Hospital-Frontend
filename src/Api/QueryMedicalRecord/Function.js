import Function from '../../Function';

export function queryMedicalRecordPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/queryMedicalRecord/${url}`);
}