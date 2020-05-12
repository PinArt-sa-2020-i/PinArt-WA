<template>
    <div class="tabmenudemo-content">
        <MultimediaByUser :id="Number($route.params.id)"
                          :isOther="isOther"/>
    </div>
</template>

<script>
import MultimediaByUser from '@/components/MultimediaByUser.vue';

export default {
  components: {
    MultimediaByUser,
  },
  props: {
    isOther: {
      type: Boolean,
    },
  },
};
</script>
