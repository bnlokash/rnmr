import { useSelector, useDispatch } from 'react-redux';

const actions = {
  increment: 'count/increment',
  decrement: 'count/decrement',
}

export const countReducer = (state = 0, action) => {
  switch(action.type) {
    case actions.increment:
      return ++state;
    case actions.decrement:
      return --state;
    default:
      return state;
  }
};

const countSelector = state => state.count;

export default () => {
  const state = useSelector(countSelector);
  const dispatch = useDispatch();

  const increment = () => dispatch({
    type: actions.increment,
  })
  
  const decrement = () => dispatch({
    type: actions.decrement,
  })

  return [state, increment, decrement];
}
