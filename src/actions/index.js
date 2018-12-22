import axios from 'axios';

/*
 * action types
 */

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';
export const FETCH_DOG = 'FETCH_DOG';

/*
 * action creators
 */

export const fetchDog = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_DOG,
    });
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log('response', response.data);
    dispatch({
      type: FETCH_DOG_SUCCESS,
      payload: response.data.message,
    });
  } catch (err) {
    console.error('we got error', err);
    dispatch({
      type: FETCH_DOG_FAILURE,
    });
  }
};
