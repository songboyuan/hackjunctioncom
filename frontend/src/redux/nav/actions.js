import * as ActionTypes from './actionTypes';

export const toggleSidebar = open => ({
    type: ActionTypes.TOGGLE_SIDEBAR,
    payload: open
});


export const setNavTitle = title => ({
    type: ActionTypes.SET_NAV_TITLE,
    payload: title
});

