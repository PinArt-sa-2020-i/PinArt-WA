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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED,
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
    } else {
      this.restoreSession();
      this.$router.push('Home');
    }
  },
};
</script>
