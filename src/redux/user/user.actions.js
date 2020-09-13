// Tried_action_creator_functions (they return action object)
export const setCurrentUser = (user) => {
  return { type: "SET_CURRENT_USER", payload: user };
};
