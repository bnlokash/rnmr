import { useSelector, useDispatch } from 'react-redux';

const GET_USERS_URL = 'http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/users';

const actions = {
  pending: 'api/pending',
  success: 'api/success',
  failure: 'api/failure',
};

const initialState = {
  users: [],
  isFetching: false,
  didError: false,
  error: undefined,
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.pending:
      return {
        ...state,
        isFetching: true,
      };

    case actions.success:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
        didError: false,
      };

    case actions.failure:
      return {
        ...state,
        isFetching: false,
        didError: true,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

const getUsers = dispatch => {
  dispatch({ type: actions.pending });
  return fetch(GET_USERS_URL)
    .then(response => response.json())
    .then(
      json => dispatch({ type: actions.success, payload: json }),
      error => dispatch({ type: actions.failure, error: true, payload: error })
    );
}

const apiSelector = state => state.api;

export default () => {
  const state = useSelector(apiSelector);
  const dispatch = useDispatch();

  return [state, () => dispatch(getUsers)];
}
