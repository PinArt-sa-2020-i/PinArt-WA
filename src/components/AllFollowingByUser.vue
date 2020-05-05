<template>
  <div id="profile">
    <div class="container">
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
      <ul>
        <li>
          {{JSON.stringify(following)}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'user-following',
  components: {},
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
