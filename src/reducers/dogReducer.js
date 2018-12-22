import { FETCH_DOG_SUCCESS, FETCH_DOG_FAILURE, FETCH_DOG } from '../actions';

const initialState = {
  dogUrl: '',
  fetching: false,
  error: '',
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_SUCCESS: {
      return {
        ...state,
        dogUrl: action.payload,
        fetching: false,
      };
    }
    case FETCH_DOG_FAILURE: {
      return {
        ...state,
        dogUrl: '',
        fetching: false,
        error: 'Error fetching an image..',
      };
    }
    case FETCH_DOG: {
      return {
        ...state,
        fetching: true,
      };
    }
    default:
      return state;
  }
};
