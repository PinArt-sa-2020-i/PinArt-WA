<template>
  <div class="home">
    <p>{{isLogged}}</p>
    <Login v-if="!isLogged"></Login>
    <div v-else>
      <img alt="Vue logo" src="../assets/Logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.logged,
    }),
  },
};
</script>
