<template>
  <div id="bg" class="min-h-screen max-h-screen">
    <div
      id="main-bg"
      class="grid grid-cols-3 grid-rows-5 text-center min-h-screen max-h-screen w-full"
    >
      <div
        id="header"
        class="col-span-3 flex justify-center items-center h-full w-full"
      >
        <nav
          class="bg-yellow-400 bg-opacity-50 rounded-md py-2 px-4 flex gap-4 text-purple-800"
        >
          <button
            v-if="is_auth"
            v-on:click="loadHome"
            class="hover:text-purple-500 font-bold"
          >
            Inicio
          </button>
          <button v-if="is_auth" class="hover:text-purple-500 font-bold">
            Cuenta
          </button>
          <button
            v-if="is_auth"
            v-on:click="logOut"
            class="hover:text-red-500 font-bold"
          >
            Cerrar Sesión
          </button>
          <button
            v-if="!is_auth"
            v-on:click="loadLogIn"
            class="hover:text-gray-50 font-bold"
          >
            Iniciar Sesión
          </button>
          <button
            v-if="!is_auth"
            v-on:click="loadSignUp"
            class="hover:text-gray-50"
          >
            Registrarse
          </button>
        </nav>
      </div>

      <div
        class="col-span-3 flex flex-col row-span-2 justify-center items-center main-component"
      >
        <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
          v-on:logOut="logOut"
        >
        </router-view>
      </div>

      <div id="footer" class="col-span-3 row-span-2">
        <h2>Misión TIC 2022</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "home" });
    },
    loadLogIn: function() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function() {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function(data) {},
    loadHome: function() {
      this.$router.push({ name: "home" });
    },
    logOut: function() {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
  },
  created: function() {
    this.verifyAuth();
  },
};
</script>
<style>
#header {
  background-image: url("./assets/header.png");
  @apply bg-cover;
  @apply bg-center;
  @apply bg-no-repeat;
}
#footer {
  background-image: url("./assets/footter.png");
  @apply bg-cover;
  @apply bg-center;
  @apply bg-no-repeat;
}
#bg {
  background-image: url("./assets/bg.png");
  @apply bg-cover;
  @apply bg-center;
  @apply bg-no-repeat;
}
</style>
