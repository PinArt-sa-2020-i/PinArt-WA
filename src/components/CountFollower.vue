<template>
  <div id="follower">
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

    <p class="stat-val">{{followersFiltered.length}}</p>
      <p class="stat-key">Seguidores</p>


  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'follower',
  components: { },
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
