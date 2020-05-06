<template>
  <div id="follower">
    <div class="container">
      <ApolloQuery
        :query="require('../graphql/allUserFollow.gql')"
        :context="{ headers : {Authorization : token}}"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <div
            v-if="data"
            class="result apollo"
            style="display: none"
          >{{ followers = data.allUserFollow}}
           </div>
        </template>
      </ApolloQuery>
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
import FollowingUser from './FollowingUser.vue';

export default {
  name: 'follower',
  components: {
    FollowingUser,
  },
  props: {
    labels: [],
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
      return this.followers.filter((item) => item.userFollowing.id === this.userId);
    },
  },
};
</script>
