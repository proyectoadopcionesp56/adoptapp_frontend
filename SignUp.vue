<template>
  <div class="signUp_user">
    <div class="container_signUp_user">
      <div class="encabezado">
      <h2 id="Title">Información General</h2>
      <br />
      <hr />
      </div>
      <br />
      <form class="formulario" v-on:submit.prevent="processSignUp">
        <label class="etiquetas" for="name">Nombres</label>
        <input class="entradas" type="text" id="name" v-model="user.name" placeholder="Ejem: Andrea María" />
        
        <label class="etiquetas" for="lastname">Apellidos </label>
        <input class="entradas" type="text" id="lastname" v-model="user.lastname" placeholder="Ejem: Fandinho Ramirez" />
        
        <label class="etiquetas" for="idkind">Tipo de Identificación </label>
        <select class="entradas" name="ID" v-model="user.IDKind">
          <option value="" disable selected hidden>Tipo de Identificación</option>
          <option value="CC">Cédula de Ciudadania</option>
          <option value="CE">Cédula de Extranjería</option>
          <option value="PA">Pasaporte</option>
          <option value="NT">NIT</option>
        </select>
        
        <label class="etiquetas" for="idnumber">Numero de Identificación &nbsp;</label>
        <input class="entradas" type="text" id="idnumber" v-model="user.IDNumber" placeholder="Sin Espacios" />
        
        <label class="etiquetas" for="address">Dirección de Residencia </label>
        <input class="entradas" type="text" id="address" v-model="user.address" placeholder="Nomenclatura en Mayúscula y #" />
        
        <!--OJO CUIDADO ARREGLAR DICE ANDREA -->
        
        <label class="etiquetas" for="city">Ciudad de Residencia </label>
        <input class="entradas" type="text" id="city" v-model="user.city" placeholder="Ejem: Bogotá" />
        
        <!---AQUI TAMBIÉN -->
        
        <label class="etiquetas" for="country">País de Residencia </label>
        <input class="entradas" type="text" id="country" v-model="user.country" placeholder="Ejem: Polombia" />
        
        <label class="etiquetas" for="landline">Teléfono Fijo </label>
        <input class="entradas" type="text" id="landline" v-model="user.landline" placeholder="Si no tiene indique Celular" />
        
        <label class="etiquetas" for="mobilephone">Número de Celular </label>
        <input class="entradas" type="text" id="mobilephone" v-model="user.mobilephone" placeholder="Si no tiene indique fijo" />
        
        <label class="etiquetas" for="jobs">Ocupación </label>
        <input class="entradas" type="text" id="jobs" v-model="user.jobs" placeholder="Ejem: Practicante" />
        
        <label class="etiquetas" for="company">Compañía </label>
        <input class="entradas" type="text" id="company" v-model="user.company" placeholder="Ejem: Google" />
        
        <label class="etiquetas" for="username">Nombre de Usuario </label>
        <input class="entradas" type="text" id="username" v-model="user.username" placeholder="Ejem: AFandinho" />
        
        <label class="etiquetas" for="email">Correo Electrónico </label>
        <input class="entradas" type="text" id="email" v-model="user.email" placeholder="Ejem: afandinho@elmail.com" />
        
        <label class="etiquetas" for="password">Contraseña </label>
        <input class="entradas" type="password" id="password" v-model="user.password" placeholder="Ejem: *****" />
                      
      </form> 

    <div class="rayita">
        <hr />
    </div>
      
      
    <div class="boton1">
             <button type="submit">
                 <img src="../assets/doghead.png" alt="Registrarse">
                 <p>Registrarse</p>
             </button>
    </div>

   <div class="boton2">
             <button type="submit">
                 <img src="../assets/cathead.png" alt="Retornar">
                 <p>Retornar</p>
             </button>
    </div>
              
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data: function() {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
        account: {
          lastChangeDate: new Date().toJSON().toString(),
          balance: 0,
          isActive: true,
        },
      },
    };
  },
  methods: {
    processSignUp: function() {
      axios
        .post("https://mision-tic-bank-be.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);

          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>

<style>

  .container_signUp_user{
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-style: none;    
    overflow-y: scroll;
    padding: 100px;
    height:70vh;

    display:grid;
    grid-template:
      "encabezado encabezado" 100px
      "formulario formulario" auto
      "rayita rayita" 100px
      "boton1 boton2" 2px;
    }

    #Title{
      color:#fb7821;
      font-size: 2vw;
      text-align: center;
      font-weight: bold;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
      text-shadow: 1px 1px #000000;
    }

    hr{
      border-color:#0e7174;
    }

    .formulario{
      grid-area:formulario;
      display:inline-grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.2rem;
      
    }

    .encabezado{
      grid-area:encabezado;
      
    }

    .rayita{
      grid-area:rayita;
      width: 100%;
      padding-top: 50px;
      
    }

    .boton1{
      grid-area:boton1;
      align-content: center;
      justify-items: center;
      margin: 0;
      width: 20vh;
      height: 15vh;
      align-items: end;
      padding: 15px;
    }
  
    .boton2{
      grid-area:boton2;
      align-content: center;
      justify-items: center;
      margin: 0;
      width: 20vh;
      height: 15vh;
      align-items: end;
      padding: 15px;
    }

    .etiquetas{
      color:#440381;
      font-size: 1.3vw;
      text-align: left;
      font-weight: bold;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
      

    }

    .entradas{
      border-radius: 4px;
      box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
      border-style: none;
      
      
    }

    .signUp_user button{
      color: #440381;
      background: #0e7174;
      border: 1px solid #0e7174;
      box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);

      border-radius: 5px;
      margin: 5px 0 25px 0;
      padding: 15px;

    }
    
    .signUp_user button:hover{
        color: #fb7821;
        border: 1px solid #0e7174;
        box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    }
</style>