<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <form class="formulario1" v-on:submit.prevent="processLogInUser">
        <img src="../assets/Spay2.png" alt="">
        <input
          type="text"
          v-model="user.username"
          placeholder="Usuario"
          class="no-appearance bg-gray-100 w-full leading-normal py-2 px-3 rounded border-b-4 border-green-base  focus:outline-none"
        />
        <input
          type="password"
          v-model="user.password"
          placeholder="Pass"
          class="no-appearance bg-gray-100 w-full leading-normal py-2 px-3 rounded border-b-4 border-green-base  focus:outline-none"
        />
        <button
          class="uppercase font-bold w-full m-0 bg-green-base text-lg text-purple-base hover:text-orange-base rounded-b-lg p-3 flex justify-center items-center"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
import { base_url } from "../utils/environments";
export default {
  name: "LogIn",
  data: function() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {
    processLogInUser: function() {
      axios
        .post(`https://mintic-adoptapp-be.herokuapp.com/login/`, this.user, {
          headers: {},
        })
        .then((result) => {
          let token = result.data.access;
          let userId = jwt_decode(token).user_id.toString();
          let dataLogIn = {
            username: this.user.username,
            id_user: userId,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style>


.formulario1{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 15em;
  position: absolute;
  top: 35%;
  left: 50%;
  margin-left: -7.5em;
  

  }







</style>