import * as ACTION_TYPE from './ACTION_TYPE';

export function changeFilterAgeRangeAction(minAge = Number.MIN_VALUE, maxAge = Number.MAX_VALUE)
{
    return {
        type: ACTION_TYPE.CHANGE_FILTER_AGE_RANGE,
        ageRange: [minAge, maxAge],
    };
}

export function changeFilterInsurancePurchasingStageAction(stageId)
{
    return {
        type: ACTION_TYPE.CHANGE_FILTER_INSURANCE_PURCHASING_STAGE,
        stageId,
    };
}