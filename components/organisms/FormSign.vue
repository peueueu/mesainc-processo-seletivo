<template>
  <section class="form_sign">
    <div class="form_container">
      <div class="form_sign_title">
        <FlavorLogo :title="formTitle" :isSignIn="signInPage" />
      </div>
      <div class="form_sign_body">
        <FlavorInput
          id="email_input"
          name="email"
          type="email"
          placeholder="teste@teste.com.br"
          v-model="emailValue"
        />
        <FlavorInput
          id="password_input"
          name="password"
          type="password"
          placeholder="•••••••"
          v-model="passwordValue"
        />
        <FlavorButton :name="buttonLabel" @click="buttonMethod" />
      </div>
    </div>
  </section>
</template>

<script>
import FlavorLogo from "@/components/atoms/FlavorLogo";
import FlavorInput from "@/components/atoms/FlavorInput";
import FlavorButton from "@/components/atoms/FlavorButton";
export default {
  data() {
    return {
      emailValue: "",
      passwordValue: "",
      buttonName: ""
    };
  },
  props: {
    formTitle: {
      type: String
    },
    signInPage: {
      type: Boolean
    }
  },
  computed: {
    buttonLabel() {
      if (this.signInPage) {
        return (this.buttonName = "Sign In");
      } else {
        return (this.buttonName = "Sign Up");
      }
    },
    buttonMethod() {
      if (this.signInPage) {
        return this.handleLogin;
      } else {
        return this.handleCreateAccount;
      }
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("auth/AUTHENTICATE", {
        email: this.emailValue,
        password: this.passwordValue
      });
    },
    handleCreateAccount() {
      this.$store.dispatch("auth/SIGN_UP", {
        email: this.emailValue,
        password: this.passwordValue
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form_sign {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;

  .form_container {
    width: 500px;
  }

  .form_sign_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

#email_input {
  &::after {
    content: "";
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 99;
    background: url("~assets/img/at 1.svg");
    width: 18px;
    height: 18px;
  }
}

#password_input {
  &::after {
    content: "";
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 99;
    background: url("~assets/img/password 1.svg");
    width: 18px;
    height: 18px;
  }
}
</style>
