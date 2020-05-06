<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <Profile />
      </div>
    </div>

    <div class="content-section implementation">
      <TabMenu :model="items" />
      <router-view/>
    </div>

  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile,
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
