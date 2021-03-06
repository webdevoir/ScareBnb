import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      return merge({}, oldState, action.home.reviews);
    default:
      return oldState;
  }
};

export default reviewsReducer;
