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
import { mapState } from 'vuex';

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
          to: '/seguidores/1',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
