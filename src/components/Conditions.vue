<template>
  <div class="contenedorPrincipal">
    <div class="">
      <h2>CONDICIONES DE ADOPCIÓN</h2>
    </div>
    <p class="parrafo">
      Cuando aplicas para una adopción a través del diligenciamiento del
      formulario de solicitud de adopción te comprometes a las siguientes
      condiciones, las cuales en caso de materializarse el proceso podrán ser
      validadas mediante visitas presenciales o virtuales, según el experto lo
      defina
    </p>
    <iframe
      src="https://drive.google.com/file/d/1bYIqvfxhHDbOqZh0-9fTJ1SNOmT9OC0U/preview"
      width="100%"
      height="280"
      allow="autoplay"
    ></iframe>
    <div class="contenedorBtn">
      <button
      @click="confirmacion"
        class="btnCondiciones hover:text-purple-500 font-bold "
      >
        Aceptar
      </button>
      <button  @click="loadMyPets" class="btnCondiciones hover:text-purple-500 font-bold">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>


export default {
  components: {},
  methods: {
    confirmacion: function() {
      console.log("haz confirmado");
      alert(`
                Haz Aceptado los terminos y Condiciones
                                            Bienvenido `);
      this.$router.push({name:"adoption"})    
      },
    loadMyPets: function(){
      this.$router.push({
        name:"home"
      })
    }
  },  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
.contenedorPrincipal {
  margin: 0;
  padding: 3vh;
  border-radius: 2em;
  position: absolute;
  text-align: center;
  top: 13%;
  left: 13%;
  height: 73vh;
  background-color: rgba(255, 251, 239, 0.65);
}

.btnCondiciones {
  width: 200px;
  height: 40px;
  color: #6b21a8;
  background: #fbbf24;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 85px;
}
.contenedorBtn {
  display: flex;
  justify-content: space-between;
}
.parrafo {
  max-width: 800px;
  margin-bottom: 15px;
  font-family: "Cabin", sans-serif;
  color: var(--base-green);
}
h2 {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: var(--base-purple);
  @apply text-3xl;
}
</style>
