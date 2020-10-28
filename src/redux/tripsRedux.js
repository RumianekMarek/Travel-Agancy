/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  //TODO - filter by duration
  if (filters.duration){
    const from = filters.duration.from;
    const to = filters.duration.to;
    output = output.filter(trip => from <= trip.days && to >= trip.days);

  }

  // TODO - filter by tags
  if(filters.tags){
    if (filters.tags.length > 0){
      for (let i=0; i<filters.tags.length; i++){
        const pattern = new RegExp(filters.tags[i], 'i');
        output = output.filter(trip => pattern.test(trip.tags));
      }
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => trips.find(trip => trip.id == tripId);

export const getTripsForCountry = ({trips}, countryCode) => trips.filter(trip => trip.country.code == countryCode);

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
