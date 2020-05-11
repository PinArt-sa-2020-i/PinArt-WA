<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <OtherProfile :id="$route.params.iduser"/>

        <div>User {{ $route.params.iduser }}</div >
      </div>
    </div>

<!--    <div class="content-section implementation">-->
<!--      <TabMenu :model="items" />-->
<!--      <router-view/>-->
<!--    </div>-->

  </div>
<!--  <div>User {{ $route.params.iduser }}</div>-->
</template>

<script>
import OtherProfile from '@/components/OtherProfile.vue';

export default {
  components: {
    OtherProfile,
  },
};

</script>
