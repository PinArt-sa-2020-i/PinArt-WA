<template>
  <div id="app">
      <Navbar v-if="isLogged"/>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import * as constants from '@/store/constants';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.logged,
    }),
  },
  methods: {
    ...mapActions({
      restoreSession: constants.RESTORE_SESSION,
    }),
  },
  created() {
    if (this.isLogged) {
      this.$router.push('Home');
    }
  },
};
</script>
