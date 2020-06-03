<template>
  <Login v-if="!isLogged"></Login>
</template>

<script>
import { mapGetters } from 'vuex';
import * as constants from '@/store/constants';
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
  computed: {
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED,
    }),
  },
};
</script>
