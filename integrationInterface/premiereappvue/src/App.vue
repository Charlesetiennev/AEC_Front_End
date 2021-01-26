<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
       <button id="show-modal" @click="showModal = true">A Propos</button>| 
      <router-link to="/contact">Contact</router-link>
        <div class="register">
          <router-link to="/insription" class="">S'inscrire</router-link> |
          <router-link to="/connexion" class="">Se connecter</router-link>
        </div>
    </div>
  
    <router-view/>
    <!-- MODAL -->
      <modal v-if="showModal" @close="showModal = false">
            <div>
                <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
        <transition name="slide" appear>
        
          
            <div class="modal">
               <button id="show-modal" @click="showModal = false">Fermer</button>
                <h1>Veuillez me contacter @ : </h1>
            </div>
         
        
      </transition>
    </div>

      </modal>
  </div>
</template>
<script>

export default {
 data: function () {
    return {
        showModal: false
    }
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
      }

      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        width: 100%;
        max-width: 400px;
        background-color: #fff;
        border-radius: 16px;

        padding: 25px;
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s;
      }

      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }

      .slide-enter-active,
      .slide-leave-active {
        transition: transform 0.5s;
      }

      .slide-enter,
      .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
      }
      .register{
        float: right;
      }
</style>
