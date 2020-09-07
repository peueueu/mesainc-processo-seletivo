export default {
  SET_USER(state, { email, first_name, last_name, avatar }) {
    state.email = email;
    state.first_name = first_name;
    state.last_name = last_name;
    state.avatar = avatar;
  }
};
