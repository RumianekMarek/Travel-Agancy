// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;


// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');
export const SET_DATE = createActionName('SET_DATE');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });
export const setDate = payload => ({ payload, type: SET_DATE });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case SET_DATE:
      return {
        ...statePart,
        startDate: action.payload,
      };
    default:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          startDate: new Date(),
        },
      };
  }
}
