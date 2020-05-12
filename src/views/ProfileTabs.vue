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
  // beforeEnter: this.updateItems(),
  data() {
    return {
      items: [],
      /* [
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
          to: '/seguidores/'.concat(this.userid2),
        },
      ], */
    };
  },
  created() {
    this.updateItems();
  },
  methods: {
    updateItems() {
      this.items = [
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
          to: '/seguidores/'.concat(this.userId),
        },
      ];
    },

  },
  computed: {
    ...mapState({
      userId: (state) => state.id,
      token: (state) => state.token,
    }),
    userid2() {
      return 1;
    },
  },
};
</script>
