/* SELECTORS */

export const getAllFilters = ({filters}) => filters;
/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;


// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_NUMBER = createActionName('CHANGE_NUMBER');
export const CHANGE_CHECKED = createActionName('CHANGE_CHECKED');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = payload => ({ payload, type: CHANGE_NUMBER});
export const checkBox = payload => ({ payload, type: CHANGE_CHECKED});
// TODO - add other action creators

// reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_NUMBER:
      return {
        ...statePart,
        duration: action.payload,
      };
    case CHANGE_CHECKED:
      return {
        ...statePart,
        duration: action.payload,
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
