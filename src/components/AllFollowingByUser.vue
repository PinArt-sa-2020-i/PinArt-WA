<template>
  <div id="profile">
    <div class="container">
      <ul>
        <div v-for="user in following" :key="user.id">
             <FollowingUser :id="user.id"/>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FollowingUser from './UserData.vue';
import QUERY_FOLLOWING from '../graphql/usersFollowingByFollower.gql';

export default {
  name: 'user-following',
  components: {
    FollowingUser,
  },
  props: {
    labels: [],
    id: {
      type: Number,
      required: true,
    },
    isOther: {
      type: Boolean,
    },
  },
  data: () => ({
    following: [],
  }),
  computed: {
    ...mapState({
      // userId: (state) => state.id,
      token: (state) => state.token,
    }),
  },
  methods: {
    queryFollowing() {
      this.$apollo.query({
        query: QUERY_FOLLOWING,
        fetchPolicy: 'no-cache',
        variables: {
          userId: this.id,
        },
        context: {
          headers: {
            Authorization: this.token,
          },
        },
      })
        .then((res) => {
          this.following = res.data.usersFollowingByFollower;
        });
    },
  },
  created() {
    this.queryFollowing();
  },
};
</script>
