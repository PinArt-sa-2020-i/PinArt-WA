<template>
  <div id="countFollowing">

      <ApolloQuery
        :query="require('../graphql/usersFollowingByFollower.gql')"
        :variables="{ userId }"
        :context="{ headers : {Authorization : token}}"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <div
            v-if="data"
            class="result apollo"
            style="display: none"
          >{{ following = data.usersFollowingByFollower }}
          </div>

        </template>
      </ApolloQuery>
      <p class="stat-val">{{following.length}}</p>
      <p class="stat-key">Siguiendo</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'user-following',
  props: {
    labels: [],
  },
  data: () => ({
    following: [],
  }),
  computed: {
    ...mapState({
      userId: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
