<template>
  <div class="home">
    <Images />
  </div>
</template>

<script>
// @ is an alias to /src
import Images from '@/components/Images.vue';
import { mapState, mapActions } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Feed',
  components: {
    Images,
  },
  computed: {
    ...mapState({
      isImage: (state) => state.image,
    }),
  },
  methods: {
    ...mapActions({
      image: constants.GET_IMAGE,
    }),
  },
};
</script>
