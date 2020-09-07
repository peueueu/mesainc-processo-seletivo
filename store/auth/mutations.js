export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  DELETE_TOKEN(state) {
    state.token = "";
  }
};
