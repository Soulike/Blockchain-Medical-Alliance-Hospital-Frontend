import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state = {}, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.SHOW_MODAL:
        {
            const {currentVisibleModalIdSet} = state;
            const {modalId} = action;
            currentVisibleModalIdSet.add(modalId);
            return {
                ...state,
                currentVisibleModalIdSet: new Set(currentVisibleModalIdSet),
            };
        }
        case ACTION_TYPE.HIDE_MODAL:
        {
            const {currentVisibleModalIdSet} = state;
            const {modalId} = action;
            currentVisibleModalIdSet.delete(modalId);
            return {
                ...state,
                currentVisibleModalIdSet: new Set(currentVisibleModalIdSet),
            };
        }
        default:
        {
            return state;
        }
    }
}