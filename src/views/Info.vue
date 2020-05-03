<template>
  <div class="home">
    <ImageInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageInfo from '@/components/ImageInfo.vue';

export default {
  name: 'Home',
  components: {
    ImageInfo,
  },
};
</script>
