<template>
  <div class="generalcontainer transform -translate-y-12">
    <div class="flex justify-between items-center gap-10">
      <img
        class="object-center w-40 h-40 hidden md:block"
        src="../assets/logo.png"
      />
      <div class="">
        <h1 class="title font-bold text-purple-base">QUIERO DAR EN ADOPCIÓN</h1>
        <p class="text-justify font-sans text-green-base">
          ESTOS SON LOS ANIMALES DE COMPAÑIA QUE QUIERES ENTREGAR EN ADOPCION
          REVISA QUE ESTÉ TODA LA INFORMACIÓN NECESARIA PARA DARLES UNA MAYOR
          OPORTUNIDAD DE SER ADOPTADOS
        </p>
      </div>
    </div>
    <div :class="`container ${requestPets.length && 'relative'}`">
      <Pet
        :requestPet="requestPet"
        v-for="requestPet in requestPets"
        :key="requestPet.id"
        @deletePet="handleDeletePet"
      />
    </div>
    <button
      :class="
        `text-green-base p-2 rounded-full ${requestPets.length &&
          'absolute bottom-0 right-1'}`
      "
      @click="loadPetAdoption"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-24 w-24 flex-no-shrink"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { base_url } from "../utils/environments";
import Pet from "./Pet.vue";
import axios from "axios";
export default {
  data: function() {
    return {
      requestPets: [],
    };
  },
  components: {
    Pet,
  },
  methods: {
    loadPets() {
      axios
        .get(`${base_url}/requestPet/details/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        })
        .then((res) => {
          this.requestPets = res.data
            .filter(
              (requestPet) =>
                requestPet.user === +localStorage.getItem("id_user")
            )
            .filter((requestPet) => requestPet.pet.status !== "RT");
        });
    },
    loadPetAdoption: function() {
      this.$router.push({ name: "adoption" });
    },
    handleDeletePet: function(pet) {
      this.requestPets = this.requestPets.filter(
        (requestPet) => requestPet.pet.id !== pet.id
      );
    },
  },
  created: function() {
    this.loadPets();
  },
};
</script>

<style>
#Spay {
  background-image: url("../assets/Spay2.png");
  @apply bg-contain bg-center bg-no-repeat;
}

.generalcontainer {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4);
  width: 80%;
  height: 710px;
  overflow: auto !important;
}

.title {
  text-align: center;
  font-size: 40px;
  color: #000;
  /* margin-top: 100px; */
  font-weight: 100;
}

.container {
  width: 100%;
  max-width: 1200px;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
</style>
