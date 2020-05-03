<template>
  <div id="ImageInfo">
    <div class="container">
      <div>Other props: {{ image }}</div>
    </div>
  </div>
</template>

<script>
// import { Stack, StackItem } from 'vue-stack-grid';
import { mapState } from 'vuex';

export default {
  name: 'ImageInfo',
  components: {},
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      userId: (state) => String(state.id),
      token: (state) => state.token,
    }),
  },
};
</script>
<style>
</style>
