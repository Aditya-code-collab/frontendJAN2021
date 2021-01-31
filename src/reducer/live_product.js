import { PRODUCTPAGELIVE } from "../components/actions/actionType";

export default (users = [{tool:"hammer",state:"Rajputana",city:"jaipur"}], action) => {
  switch (action.type) {
    case PRODUCTPAGELIVE:
      return action.payload;
    default:
      return users;
  }
};