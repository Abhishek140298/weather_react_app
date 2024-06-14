import { GET_LAT_LONG_RESPONSE, GET_LOCATION_WEATHER } from "../actionsTypes";

export interface IState {
  latLong: object;
  weatherData: object;
}

const intialState: IState = {
  latLong: {},
  weatherData: {},
};

export const appReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case GET_LAT_LONG_RESPONSE:
      return {
        ...state,
        latLong: action.payload,
      };

    case GET_LOCATION_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
      };

    default:
      return { ...state };
  }
};
