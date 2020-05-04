<template>
  <div class="home">
    <Profile />
    <UploadMultimedia />

     </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue';
import { mapState, mapActions } from 'vuex';
import * as constants from '@/store/constants';
import UploadMultimedia from '@/components/UploadMultimedia.vue';


export default {
  name: 'User',
  components: {
    Profile,
    UploadMultimedia,
  },
  data() {
    return {
      labels: [],
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.id,
    }),
  },
  methods: {
    ...mapActions({
      image: constants.GET_IMAGE,
    }),
  },
};
</script>
