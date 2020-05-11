<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <OtherProfile :id="$route.params.iduser"/>
      </div>
    </div>

    <div class="content-section implementation">
      <TabMenu :model="items" />
      <router-view/>
    </div>

  </div>
<!--  <div>User {{ $route.params.iduser }}</div>-->
</template>

<script>
import OtherProfile from '@/components/OtherProfile.vue';

export default {
  components: {
    OtherProfile,
  },
  data() {
    return {
      items: [
        {
          label: 'Multimedia',
          icon: 'pi pi-fw pi-image',
          to: '/multimedia',
        },
        {
          label: 'Siguiendo',
          icon: 'pi pi-fw pi-camera',
          to: '/siguiendo',
        },
        {
          label: 'Seguidores',
          icon: 'pi pi-fw pi-camera',
          to: '/seguidores',
        },
      ],
    };
  },
};

</script>
