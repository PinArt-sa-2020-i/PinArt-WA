<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <p>{{ isLogged }}</p>
    <button @click="login">Login</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState, mapActions } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.logged,
    }),
  },
  methods: {
    ...mapActions({
      login: constants.SESSION_LOGIN,
    }),
  },
};
</script>
