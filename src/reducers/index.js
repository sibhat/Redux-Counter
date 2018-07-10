import { INCREMENT, DECREMENT } from '../actions/index';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const counter = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    
      return count += 1;
    case DECREMENT:
         
      return count -= 1;
    default:
      return count;
  }
};
export default counter;