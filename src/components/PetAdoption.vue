<template>
  <div id="grid_pet_adoption">
    <div id="image-render" :class="pet.image ? '' : ''">
      <img :src="auxImage" class="fixed" />
    </div>
    <form
      id="form"
      :class="pet.image ? 'col-span-2' : ''"
      v-on:submit.prevent="createPetAdoption"
    >
      <div id="fields" class="grid grid-cols-2 grid-flow-row gap-2">
        <fieldset>
          <legend>Nombre</legend>
          <input
            type="text"
            class="p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            v-model="pet.name"
          />
        </fieldset>
        <fieldset>
          <legend>Especie</legend>
          <input
            type="text"
            class="p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            v-model="pet.species"
          />
        </fieldset>
        <fieldset>
          <legend>Tamanho</legend>
          <input
            type="text"
            class="p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            v-model="pet.size"
          />
        </fieldset>
        <fieldset>
          <legend>Edad</legend>
          <input
            type="number"
            class="p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            v-model="pet.age"
            min="0"
          />
        </fieldset>
        <fieldset>
          <legend>Pais</legend>
          <Select v-model="pet.country" :options="countries"></Select>
        </fieldset>
        <fieldset>
          <legend>Ciudad</legend>
          <Select
            v-model="pet.city"
            :options="countries[pet.country] ? countries[pet.country] : []"
          ></Select>
        </fieldset>
        <fieldset>
          <legend>Cohabitable</legend>
          <div class="flex justify-between items-center">
            <p>Animales:</p>
            <input type="checkbox" v-model="pet.cohabitation_animals" />
          </div>
          <div class="flex justify-between items-center">
            <p>Ninhos:</p>
            <input type="checkbox" v-model="pet.cohabitation_kids" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Enfermedades</legend>
          <input type="checkbox" v-model="pet.pathologies" />
        </fieldset>
        <fieldset>
          <legend>Medicamentos</legend>
          <input
            type="text"
            class="p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            v-model="pet.diseases_drugs"
          />
        </fieldset>
        <fieldset>
          <legend>Esterilizado</legend>
          <input type="checkbox" v-model="pet.sterilized" />
        </fieldset>
        <fieldset>
          <legend>Vacunado</legend>
          <input type="checkbox" v-model="pet.vaccinated" />
        </fieldset>
        <fieldset class="row-span-2">
          <legend>Vacunas</legend>
          <textarea
            class="w-full h-full p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            type="text"
            v-model="pet.vaccines"
          />
        </fieldset>
        <fieldset>
          <legend>Desparasitado</legend>
          <input type="checkbox" v-model="pet.deworming" />
        </fieldset>
        <fieldset class="row-span-2">
          <legend>Desparasitantes</legend>
          <textarea
            class="w-full h-full p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            type="text"
            v-model="pet.dewormer"
          />
        </fieldset>
        <fieldset class="col-span-2 row-span-2">
          <legend>Historia</legend>
          <textarea
            class="w-full h-full p-2 shadow rounded-lg bg-gray-100 outline-none border-b border-green-500  focus:bg-gray-200"
            type="text"
            v-model="pet.history"
          />
        </fieldset>
        <!-- <fieldset>
          <legend></legend>
          <input type="text" v-model="pet.status" />
        </fieldset> -->
        <fieldset>
          <legend>Imagen</legend>
          <input type="file" @change="onFileChange" />
        </fieldset>
      </div>
      <div id="buttons" class="flex justify-center">
        <button
          type="submit"
          class="w-max flex items-center justify-center uppercase font-bold m-0 border border-green-base text-lg text-purple-base hover:text-orange-base rounded-b-lg p-3"
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
          <p>Enviar</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { base_url } from "../utils/environments";
import countries from "../utils/countries.json";

import axios from "axios";
import Select from "./Select.vue";

export default {
  name: "PetAdoption",
  data: function() {
    return {
      pet: {
        name: "",
        species: "",
        size: "",
        age: 0,
        country: "",
        city: "",
        cohabitation_animals: false,
        cohabitation_kids: false,
        pathologies: false,
        diseases_drugs: "",
        sterilized: false,
        vaccinated: false,
        vaccines: "",
        deworming: false,
        dewormer: "",
        history: "",
        status: "",
        image: "",
      },
      auxImage: "",
      countries: countries,
    };
  },
  components: {
    Select,
  },
  methods: {
    createPetAdoption() {
      const formData = new FormData();
      formData.append("name", this.pet.name);
      formData.append("species", this.pet.species);
      formData.append("size", this.pet.size);
      formData.append("age", this.pet.age);
      formData.append("country", this.pet.country);
      formData.append("city", this.pet.city);
      formData.append("cohabitation_animals", this.pet.cohabitation_animals);
      formData.append("cohabitation_kids", this.pet.cohabitation_kids);
      formData.append("pathologies", this.pet.pathologies);
      formData.append("diseases_drugs", this.pet.diseases_drugs);
      formData.append("sterilized", this.pet.sterilized);
      formData.append("vaccinated", this.pet.vaccinated);
      formData.append("vaccines", this.pet.vaccines);
      formData.append("deworming", this.pet.deworming);
      formData.append("dewormer", this.pet.dewormer);
      formData.append("history", this.pet.history);
      formData.append("status", this.pet.status);
      formData.append("image", this.pet.image);
      axios
        .post(`${base_url}/pet/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        })
        .then((peticion) => {
          alert("Pet creada");
          axios
            .post(
              `${base_url}/requestPet/`,
              {
                user: localStorage.getItem("id_user"),
                pet: peticion.data.id,
                request_kind: "HD",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "token_access"
                  )}`,
                },
              }
            )
            .then((data) => {
              alert("creada RequestPet");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.pet.image = files[0];
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.auxImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.pet.image = "";
      this.auxImage = "";
    },
  },
};
</script>

<style scoped>
#grid_pet_adoption {
  background: rgba(255, 255, 255, 0.4);
  @apply grid grid-cols-3 grid-flow-row overflow-y-auto py-2 px-4 rounded-md;
}
fieldset {
  @apply px-2 py-1;
}
.center-absolute {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 overflow-y-auto;
}
</style>
