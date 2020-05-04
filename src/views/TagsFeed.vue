<template>
  <div class="home">
    <TagImages />
  </div>
</template>

<script>
// @ is an alias to /src
import TagImages from '@/components/TagImages.vue';
import { mapState, mapActions } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Feed',
  components: {
    TagImages,
  },
  data() {
    return {
      labels: [],
    };
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
    checkUserLabels() {

    },
  },
  created() {

  },
};
</script>
