import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state = {}, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.CHANGE_FILTER_AGE_RANGE:
        {
            const {ageRange} = action;
            return {
                ...state,
                ageRange,
            };
        }
        case ACTION_TYPE.CHANGE_FILTER_INSURANCE_PURCHASING_STAGE:
        {
            const {stageId} = action;
            return {
                ...state,
                stageId,
            };
        }
        default:
        {
            return state;
        }
    }
}