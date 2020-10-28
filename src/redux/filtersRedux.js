/* SELECTORS */

export const getAllFilters = ({filters}) => filters;
/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_FROM = createActionName('CHANGE_FROM');
export const CHANGE_TO = createActionName('CHANGE_TO');
export const CHANGE_CHECKED = createActionName('CHANGE_CHECKED');
export const CHANGE_UNCHECKED = createActionName('CHANGE_UNCHECKED');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_FROM});
export const changeDurationTo = payload => ({ payload, type: CHANGE_TO});
export const checkBox = payload => ({ payload, type: CHANGE_CHECKED});
export const unCheckBox = payload => ({ payload, type: CHANGE_UNCHECKED});
// TODO - add other action creators

// reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from : parseInt(action.payload),
        },
      };
    case CHANGE_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: parseInt(action.payload),
        },
      };
    case CHANGE_CHECKED:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload,
        ],
      };
    case CHANGE_UNCHECKED: {
      statePart.tags.splice(action.payload, 1);
      return {
        ...statePart,
      };
    }
    // TODO - 
    // TODO - handle other action types
    default:
      return statePart;
  }
}
