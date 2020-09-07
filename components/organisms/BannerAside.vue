<template>
  <section id="banneraside" class="banner_aside">
    <div class="wrapper-content">
      <BannerTitle :content="bannerTitle" />
      <div class="wrapper-content-body">
        <FlavorText :content="bannerText" />
      </div>
      <FlavorButton
        class="button_banner"
        :name="bannerButtonName"
        @click="handleRoutes"
      />
    </div>
  </section>
</template>

<script>
import BannerTitle from "@/components/atoms/BannerTitle";
import FlavorText from "@/components/atoms/FlavorText";
import FlavorButton from "@/components/atoms/FlavorButton";
export default {
  data() {
    return {
      titulo: "",
      texto: "",
      buttonName: ""
    };
  },
  props: {
    pageSignIn: {
      type: Boolean
    }
  },
  methods: {
    handleRoutes() {
      if (this.pageSignIn) {
        this.$router.push("/signup");
      } else {
        this.$router.push("/");
      }
    }
  },
  computed: {
    bannerTitle() {
      if (this.pageSignIn) {
        return (this.titulo = "Hello, Friend !");
      } else {
        return (this.titulo = "Welcome");
      }
    },
    bannerText() {
      if (this.pageSignIn) {
        return (this.buttonName = `Enter your personal details and start a journey with us`);
      } else {
        return (this.buttonName = `To keep connected with us please login with your personal info`);
      }
    },
    bannerButtonName() {
      if (this.pageSignIn) {
        return (this.texto = `Sign Up`);
      } else {
        return (this.texto = `Sign in`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.banner_aside {
  height: 100%;
  background: url("~assets/img/banner-aside-bg.png") center no-repeat,
    $primaryColor;
  background-size: cover;
  padding: 50px 70px;
  margin: auto 0;
  width: 35%;
  .wrapper-content {
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .wrapper-content-body {
      padding: 60px 0;
    }
  }

  #default-btn {
    border: 2px solid $white;
    background: transparent;
  }
}
</style>
