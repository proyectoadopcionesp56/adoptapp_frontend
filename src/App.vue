<template>
  <div id="bg" class="min-h-screen max-h-screen"></div>
  <div
    class="absolute top-0 left-0 grid grid-cols-3 grid-rows-6 text-center min-h-screen max-h-screen w-full"
  >
    <div class="relative col-span-3 row-span-1">
      <Wave
        :top="true"
        :color="'text-purple-base'"
        :height="'h-full'"
        :d="d_top"
      />
      <Wave
        :top="true"
        :color="'text-green-base'"
        :height="'h-4/5'"
        :d="d_top"
      />
      <Wave
        :top="true"
        :color="'text-orange-base'"
        :height="'h-4/6'"
        :d="d_top"
      />
      <div id="Logo" class="absolute top-0 left-0  w-40 h-28"></div>
      <nav
        class="absolute top-full left-4/10 md:left-6/10 lg:left-4/6 lg:w-fit bg-yellow-400 rounded-md py-2 px-4 flex gap-4 text-purple-800"
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
          class="hover:text-gray-50 font-bold"
        >
          Registrarse
        </button>
      </nav>
      <div
        id="Adoptapp"
        class="absolute hidden md:block bottom-4/10 right-3.5 w-80 h-28"
      ></div>
    </div>
    <div
      class="col-span-3 row-span-1 flex justify-around items-center h-full w-full"
    >
      <div></div>
      <div></div>
    </div>
    <div
      class="col-span-3 flex flex-col row-span-3 justify-center items-center main-component"
    >
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    <div class="relative col-span-3 row-span-1 ">
      <Wave
        :top="false"
        :color="'text-purple-base'"
        :height="'h-full'"
        :d="d_bottom"
      />
      <Wave
        :top="false"
        :color="'text-green-base'"
        :height="'h-4/5'"
        :d="d_bottom"
      />
      <Wave
        :top="false"
        :color="'text-orange-base'"
        :height="'h-4/6'"
        :d="d_bottom"
      />
      <div class="absolute -top-28 left-10  w-auto hidden md:block">
        <div id="Lupe" class="w-56 h-56"></div>
      </div>
      <div
        class="absolute top-0 md:top-7 left-0 w-full flex justify-center md:flex-row md:justify-end"
      >
        <div id="MinticLogo" class="w-40 h-24"></div>
        <div id="UnalLogo" class="hidden md:block w-40 h-24"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Wave from "./components/Wave.vue";
export default {
  name: "App",
  data: function() {
    return {
      is_auth: false,
      d_top:
        "M-0.90,135.49 C150.00,150.00 277.88,-21.41 508.12,121.68 L500.00,0.00 L0.00,0.00 Z",
      d_bottom:
        "M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z",
    };
  },
  components: {
    Wave,
  },
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
#bg {
  background-image: url("./assets/bg.png");
  @apply bg-cover bg-center bg-no-repeat filter blur-sm;
}
#ola1 {
  @apply text-yellow-400;
}
#ola2 {
  @apply text-red-400;
}
#Adoptapp {
  background-image: url("./assets/Adoptapp.png");
  @apply bg-contain bg-center bg-no-repeat;
}
#Logo {
  background-image: url("./assets/logo.png");
  @apply bg-contain bg-center bg-no-repeat;
}
#Lupe {
  background-image: url("./assets/Any1.png");
  @apply bg-contain bg-center bg-no-repeat;
}
#MinticLogo {
  background-image: url("./assets/MinticLogo.png");
  @apply bg-contain bg-center bg-no-repeat;
}
#UnalLogo {
  background-image: url("./assets/UnalLogo.png");
  @apply bg-contain bg-center bg-no-repeat;
}
</style>
