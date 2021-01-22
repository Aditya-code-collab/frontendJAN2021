import { ADD_USER } from "../components/actions/actionType";

export default (users = [], action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("Add user");
      return [...users, action.payload];
    default:
      return users;
  }
};
