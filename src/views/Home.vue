<template>
  <div class="home">
    <Login v-if="!isLogged"></Login>
    <div v-else>
      <h1> Bienvenido a Pinart</h1>
      <img alt="Vue logo" src="../assets/Logo.png"/>
      <h2>Your Token</h2>
      <p>{{token}}</p>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Login,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.logged,
      token: (state) => state.token,
    }),
  },
};
</script>
