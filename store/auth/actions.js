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
        title: "ta logado magrão",
        text: "Me contrata ja11111, welcome to flavorit"
      });

      commit("SET_TOKEN", response.data.token);

      response.data.token === "QpwL5tke4Pnpja7X4"
        ? this.$router.push("/user")
        : null;
    } catch (err) {
      Vue.notify({
        group: "error",
        type: "error",
        title: "Deu ruim magrão",
        text: `Azedou!!!!!!!!!!! ${err}`
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
          title: "Tu existe magrão",
          text:
            "Me contrata ja11111, welcome to flavorit, join the flavor side of the force."
        });
      }
    } catch (err) {
      Vue.notify({
        group: "error",
        type: "error",
        title: "Deu ruim magrão",
        text: `Azedou!!!!!!!!!!! ${err}, Your lack of faith is disturbing`
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
