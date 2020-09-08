import Vue from "vue";

export default {
  async AUTHENTICATE({ commit }, { email, password }) {
    try {
      const response = await this.$axios.post("/login", {
        email,
        password
      });

      Vue.notify({
        group: "success",
        type: "success",
        title: "Login with success",
        text: "Welcome to flavorit! :)"
      });

      commit("SET_TOKEN", response.data.token);

      response.data.token === "QpwL5tke4Pnpja7X4"
        ? this.$router.push("/user")
        : null;
    } catch (err) {
      Vue.notify({
        group: "error",
        type: "error",
        title: "Login Unscessfull",
        text: `Couldn't sign in`
      });
    }
  },
  async SIGN_UP({ commit }, { email, password }) {
    try {
      const response = await this.$axios.post("/register", {
        email,
        password
      });
      if (response.data.token) {
        Vue.notify({
          group: "success",
          type: "success",
          title: "Account created with success",
          text:
            "Please go to the login page, and enter your personal data."
        });
      }
    } catch (err) {
      Vue.notify({
        group: "error",
        type: "error",
        title: "Failed to create account",
        text: `Couldn't create acccount. Sorry :(`
      });
    }
  },
  async SIGN_OUT({ commit }) {
    try {
      commit("DELETE_TOKEN");
      this.$router.push("/");
    } catch (err) {
      alert("Sign out: " + err);
    }
  }
};
