export default {
  async AUTHENTICATE({ commit }, { email, password }) {
    try {
      const response = await this.$axios.post("/login", {
        email,
        password
      });
      commit("SET_TOKEN", response.data.token);
      // Indexeddb - Let's do it bro!!!
      response.data.token === "QpwL5tke4Pnpja7X4"
        ? this.$router.push("/user")
        : null;
    } catch (err) {
      alert("login: " + err);
    }
  },
  async SIGN_UP({ email, password }) {
    try {
      const response = await this.$axios.post("/register", {
        email,
        password
      });
      response.data.token === "QpwL5tke4Pnpja7X4"
        ? alert("User Registered with success!")
        : null;
    } catch (err) {
      alert("create account: " + err);
    }
  }
};
