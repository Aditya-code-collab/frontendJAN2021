import { CITYNAME } from "../components/actions/actionType";

export default (users = [{city:"Goa"}], action) => {
  switch (action.type) {
    case CITYNAME:
      return action.payload;
    default:
      return users;
  }
};