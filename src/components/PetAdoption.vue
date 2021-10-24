<template>
  <div class="pet">
    <div class="container_pet">
      <div class="encabezado">
        <br />
        <hr />
        <h2 id="Title">Ficha de Conocimiento Animal de Compañía</h2>
        <hr />
      </div>
      <form
        id="CreateForm"
        class="formulariopet"
        v-on:submit.prevent="createPetAdoption"
      >
        <div class="photo">
          <div>
            <img class="loadp" :src="auxImage" v-if="auxImage.length" />
            <img class="loadp" src="../assets/chirip.png" v-else />
          </div>
          <div>
            <form
              class="custom-file-upload"
              name="subida-imagenes"
              type="POST"
              enctype="multipart/formdata"
            >
              <label id="uph"
                >Cargar Imagen
                <input
                  class="photo hidden"
                  type="file"
                  @change="onFileChange"
                  display:none
                  name="imagen1"
                />
              </label>
            </form>
          </div>
        </div>

        <div class="basic">
          <div class="one">
            <label class="etiquetas" for="name">Nombres</label>
            <input
              class="entradas"
              type="text"
              id="name"
              v-model="pet.name"
              placeholder="Ejem: Matty"
            />

            <label class="etiquetas" for="especie">Especie </label>
            <input
              class="entradas"
              type="text"
              id="especie"
              v-model="pet.species"
              placeholder="Ejem: Gato"
            />

            <label class="etiquetas" for="tamaño"> Tamaño </label>
            <select class="entradas" name="ID" v-model="pet.size">
              <option value="" disable selected hidden
                >Seleccione Tamaño</option
              >
              <option value="LG">Grande</option>
              <option value="MD">Mediano</option>
              <option value="SM">Pequeño</option>
            </select>

            <label class="etiquetas" for="edad">Edad</label>
            <input
              class="entradas"
              type="text"
              id="edad"
              v-model="pet.age"
              placeholder="Sin Espacios"
            />

            <label class="etiquetas" for="country">País</label>
            <Select v-model="pet.country" :options="countries"></Select>

            <label class="etiquetas" for="city">Ciudad</label>
            <Select
              v-model="pet.city"
              :options="countries[pet.country] ? countries[pet.country] : []"
            ></Select>

            <p class="etiquetas">Convivencia con Animales</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="sanimales"
                v-model="pet.cohabitation_animals"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="sanimales"
                v-model="pet.cohabitation_animals"
              />
            </div>

            <p class="etiquetas">Convivencia con Niños</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="sniños"
                v-model="pet.cohabitation_kids"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="sniños"
                v-model="pet.cohabitation_kids"
              />
            </div>

            <p class="etiquetas">Patologías</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="spato"
                v-model="pet.pathologies"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="spato"
                v-model="pet.pathologies"
              />
            </div>

            <label class="etiquetas" for="cualesp">¿Cuáles Patologías?</label>
            <textarea
              class="entradas"
              type="text"
              id="cualesp"
              v-model="pet.diseases_drugs"
              placeholder="Incluir medicamentos que se suminsitran"
            >
            </textarea>

            <p class="etiquetas">Esterilizada / Castrado</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="sesteriliza"
                v-model="pet.sterilized"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="sesteriliza"
                v-model="pet.sterilized"
              />
            </div>

            <p class="etiquetas">Vacunado</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="svacuna"
                v-model="pet.vaccinated"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="svacuna"
                v-model="pet.vaccinated"
              />
            </div>

            <label class="etiquetas" for="cualesv">¿Cuáles Vacunas?</label>
            <textarea
              class="entradas"
              type="text"
              id="cualesv"
              v-model="pet.vaccines"
              placeholder="Incluir vacunas vigentes"
            >
            </textarea>

            <p class="etiquetas">Desparasitado</p>
            <div class="two">
              <label class="etiquetas" for="TRUE">Si</label>
              <input
                class="entradas"
                type="radio"
                id="TRUE"
                :value="true"
                name="sparasito"
                v-model="pet.deworming"
              />
              <label class="etiquetas" for="FALSE">No</label>
              <input
                class="entradas"
                type="radio"
                id="FALSE"
                :value="false"
                name="sparasito"
                v-model="pet.deworming"
              />
            </div>

            <label class="etiquetas" for="cualesd">¿Cuál Desparasitante?</label>
            <textarea
              class="entradas"
              type="text"
              id="address"
              v-model="pet.dewormer"
              placeholder="Incluir último suminsitrado"
            >
            </textarea>
          </div>
        </div>

        <div class="story">
          <label class="etiquetas" for="historia">Historia</label>
          <textarea
            class="entradas"
            id="historia"
            v-model="pet.history"
            placeholder="Registre la historia del animal de compañía que desea entregar en adopción"
          >
          </textarea>
        </div>
      </form>

      <div class="rayita">
        <hr />
      </div>

      <div class="boton1">
        <button type="submit" form="CreateForm">
          <img
            src="../assets/doghead.png"
            style="width:20px,height:20px"
            alt="Registrar"
          />
          <p>Registrar</p>
        </button>
      </div>

      <div class="boton2">
        <button type="submit" @click="loadMyPets">
          <img
            src="../assets/cathead.png"
            style="width:20px,height:20px"
            alt="Retornar"
          />
          <p>Retornar</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { base_url } from "../utils/environments";
import countries from "../utils/countries.json";

import axios from "axios";
import Select from "./Select.vue";

export default {
  name: "PetAdoption",
  props: ["updatePet"],
  data: function() {
    return {
      pet: {
        id: -1,
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
      if(typeof this.pet.image !== "string"){
        formData.append("image", this.pet.image);
      }
      if (!this.updatePet) {
        axios
          .post(`https://mintic-adoptapp-be.herokuapp.com/pet/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token_access")}`,
            },
          })
          .then((peticion) => {
            alert("Mascota Creada");
            axios
              .post(
                `https://mintic-adoptapp-be.herokuapp.com/requestPet/`,
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
                // alert("creada RequestPet");
                this.$router.push({
                  name: "home",
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
          axios
          .put(
            `https://mintic-adoptapp-be.herokuapp.com/pet/update/${this.updatePet}/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token_access")}`,
              },
            }
          )
          .then((res) => {
            alert("Mascota Actualizada");
            this.$router.push({
              name: "home",
            });
          });
      }
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
    loadMyPets: function() {
      this.$router.push({
        name: "home",
      });
    },
  },
  created() {
    console.log(this.updatePet);
    if (this.updatePet) {
      axios
        .get(`${base_url}/pet/detail/${this.updatePet}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        })
        .then((res) => {
          this.pet = res.data;
        });
    }
  },
};
</script>

<style>
.container_pet {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
  border-style: none;
  overflow-y: scroll;
  padding: 20px 50px;
  top: 80%;
  left: 50%;
  height: 70vh;
  width: 60vw;
  margin-left: -15vw;
  margin-top: 5vh;
  display: grid;
  grid-template:
    "encabezado encabezado" 150px
    "formulario formulario" auto
    "rayita rayita" 100px
    "boton1 boton2" 2px;
}

.container_pet::-webkit-scrollbar {
  width: 15px;
}

.container_pet::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #fb7821;
}

.container_pet::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background-color: #440381;
  border: 3px solid #fb7821;
}

#Title {
  color: #440381;
  font-size: 2vw;
  text-align: center;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-shadow: 1px 1px #000000;
}

hr {
  border-color: #0e7174;
}

.encabezado {
  grid-area: encabezado;
}

.formulariopet {
  grid-area: formulario;
  display: inline-grid;
  gap: 2rem;
  grid-template:
    "photo basic" auto
    "story story" 100px;
}

.photo {
  grid-area: photo;
  position: relative;
  top: 4%;
}

.loadp {
  width: max-content;
  height: 30vh;
}

.basic {
  grid-area: basic;
  gap: 5px;
  display: flex;
  flex-direction: column;
}

.one {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  color: #440381;
  justify-items: left;
}

.two {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  color: #440381;
  font-weight: bold;
  font-size: 1.3vw;
}

.story {
  grid-area: story;
  display: grid;
  grid-template-rows: 1fr 2fr;
}

.rayita {
  grid-area: rayita;
  width: 100%;
  padding-top: 50px;
}

#uph {
  color: #440381;
  background: rgba(251, 121, 33, 0.6);
  border: 1px solid #0e7174;
  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin: 5px 0 25px 0;
  padding: 10px 10px;
  font-weight: bold;
  position: relative;
  top: 0;
}

#uph:hover {
  background-color: #440381;
  font-style: italic;
  color: #0e7174;
}

.custom-file-upload {
  position: relative;
  top: 50%;
  display: initial;
  padding: 15px 14px;
  height: 15px;
  width: 50px;
  cursor: pointer;
}

.boton1 {
  grid-area: boton1;
  align-content: center;
  justify-items: center;
  text-align: center;
  margin: 0;
  align-items: end;
  padding: 0px 0px;
}

.boton2 {
  grid-area: boton2;
  align-content: center;
  justify-items: center;
  margin: 0;
  align-items: end;
  padding: 0px;
  text-align: center;
}

.etiquetas {
  color: #440381;
  font-size: 1.3vw;
  text-align: left;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.entradas {
  border-radius: 4px;
  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
  border-style: none;
}

.pet button {
  color: #440381;
  background: rgba(15, 113, 116, 0.4);
  border: 1px solid #0e7174;
  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
  width: 10vw;
  height: 20vh;
  border-radius: 5px;
  margin: 5px 0 25px 0;
  padding: 0px 15px;
  text-align: center;
  font-weight: bold;
}

.pet button:hover {
  color: #fb7821;
  border: 1px solid #0e7174;
  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
  transform: scale(1.04);
  font-style: italic;
}

@media (max-width: 768px) {
  #titulo {
    font-size: 3vw;
  }

  #imgandrea {
    width: 50vw;
    height: 30vh;
  }

  #textotorgante {
    width: 78vw;
    height: 3vh;
    font-size: 3vw;
  }

  .container_pet {
    padding: 2px 45px;
    position: absolute;
    top: 55%;
    left: 50%;
    height: 50vh;
    width: 50vw;
    margin-left: 25vw;
    margin-top: -25vh;
  }

  #Title {
    font-size: 5vw;
  }

  .etiquetas {
    font-size: 3.3vw;
  }

  .pet button {
    width: 25vw;
    height: 20vh;
    border-radius: 5px;
    margin: 5px 0 25px 0;
    padding: 0 2px;
    font-weight: bold;
  }

  .photo {
    width: 100%;
    padding: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  .loadp {
    height: 20vh;
    width: 50vw;
  }

  .formulariopet {
    grid-area: formulario;
    grid-template:
      "photo" auto
      "basic" auto
      "story" 100px;
  }

  .container_pet {
    padding: 2px 45px;
    position: absolute;
    top: 55%;
    left: 50%;
    height: 50vh;
    width: 96vw;
    margin-left: -48vw;
    margin-top: -25vh;
  }

  .basic {
    padding: 15px;
  }
}

/*#grid_pet_adoption {
  background: rgba(255, 255, 255, 0.4);
  @apply grid grid-cols-3 grid-flow-row overflow-y-auto py-2 px-4 rounded-md;
}
fieldset {
  @apply px-2 py-1;
}
.center-absolute {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 overflow-y-auto;
}*/
</style>
