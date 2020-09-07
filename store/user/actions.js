export default {
  async USER({ commit }, { email, first_name, last_name, avatar }) {
    try {
      const response = await this.$axios.get("/users/2", {
        email,
        first_name,
        last_name,
        avatar
      });
      commit("SET_USER", response);
    } catch (err) {
      console.log(err);
    }
  }
};
