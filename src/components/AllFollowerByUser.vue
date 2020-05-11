<template>
  <div id="follower">
    <div class="container">
      <ul>

         <div v-for="item in followersFiltered" :key="item.id">
          <FollowingUser :id="item.userFollower.id"/>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FollowingUser from './UserData.vue';
import QUERY_FOLLOWER from '../graphql/allUserFollow.gql';

export default {
  name: 'follower',
  components: {
    FollowingUser,
  },
  props: {
    labels: [],
    id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    followers: [],
  }),
  computed: {
    ...mapState({
      userId: (state) => state.id,
      token: (state) => state.token,
    }),
    followersFiltered() {
      return this.followers.filter((item) => item.userFollowing.id === this.id);
    },
  },
  methods: {
    queryFollower() {
      this.$apollo.query({
        query: QUERY_FOLLOWER,
        fetchPolicy: 'no-cache',
        variables: {
          userId: this.userId,
        },
        context: {
          headers: {
            Authorization: this.token,
          },
        },
      })
        .then((res) => {
          this.followers = res.data.allUserFollow;
        });
    },
  },
  created() {
    this.queryFollower();
  },
};
</script>
