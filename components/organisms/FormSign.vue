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
        <FlavorButton :name="buttonName" />
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
    };
  },
  props: {
    buttonName: {
      type: String,
      default: "Sign In",
    },
    formTitle: {
      type: String,
    },
    signInPage: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.form_sign {
  min-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;

  .form_container {
    width: 600px;
  }

  .form_sign_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
