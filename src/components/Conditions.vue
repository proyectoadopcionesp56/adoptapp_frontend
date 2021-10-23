<template>
  <div class="contenedorPrincipal">
    <div class="contenedorPrincipal">
      <h2>CONDICIONES DE ADOPCIÓN</h2>
        <!-- <img src="../assets/PDF_Los_helechos.pdf" alt="condiciones"> -->
        <!-- <img src="../assets/logo.png" alt="condiciones"> -->
        <!-- <pdf src="../assets/PDF_Los_helechos.pdf"></pdf> -->
        <!-- <vue-pdf-embed :source="source1" /> -->
        <!-- <iframe src="../assets/PDF_Los_helechos.pdf" frameborder="0"></iframe> -->
        <!-- <embed src="../../public/PDF_Los_helechos.pdf" width="500" height="375"  -->
          <!-- type="application/pdf"> -->
        <!-- <a href="../assets/PDF_Los_helechos.pdf">pDf</a> -->
    </div>
    <p class="parrafo">Cuando aplicas para una adopción a través del diligenciamiento del formulario de solicitud  de adopción te comprometes a las siguientes condiciones, las cuales en caso de materializarse el proceso podrán ser validadas mediante visitas presenciales o virtuales, según el experto lo defina</p>
    <div class="contenedorBtn">
      <button v-on:click="confirmacion" class="btnCondiciones hover:text-purple-500 font-bold ">Aceptar</button>
      <button class="btnCondiciones hover:text-purple-500 font-bold" >Cancelar</button>
    </div>
  </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'
import pdf from 'vue-pdf'
export default { 
  components: {
        // pdf
        VuePdfEmbed,
    },
    methods: {
       confirmacion: function(){
          console.log('haz confirmado');
          alert('haz confirmado')
          }
    },
 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
  .contenedorPrincipal{
    margin:0;
    padding: 0;
  }
  
  .btnCondiciones{
    width: 200px; 
    height: 40px;
    color: #6B21A8;
    background: #FBBF24;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 85px;
    }
  .contenedorBtn{
    display: flex;
    justify-content: space-between;
      
  }
  .parrafo{
    max-width: 800px;
    margin-bottom: 50px;
    font-family: 'Cabin', sans-serif;    
  }
  h2{
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }
</style>
