import UserActions from "./user.action-types";

// Tried_action_creator_functions (they return action object)
export const setCurrentUser = (user) => {
  return { type: UserActions.SET_CURRENT_USER, payload: user };
};
