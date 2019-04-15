import * as ACTION_TYPE from './ACTION_TYPE';

export function showModalAction(modalId)
{
    return {
        type: ACTION_TYPE.SHOW_MODAL,
        modalId,
    };
}

export function hideModalAction(modalId)
{
    return {
        type: ACTION_TYPE.HIDE_MODAL,
        modalId,
    };
}