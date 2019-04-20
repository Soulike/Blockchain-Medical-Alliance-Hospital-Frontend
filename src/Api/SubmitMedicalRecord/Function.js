import Function from '../../Function';

export function submitMedicalRecordPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/submitMedicalRecord/${url}`);
}