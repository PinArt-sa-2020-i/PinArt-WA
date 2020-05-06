<template>
  <div id="profile">
    <div class="container">
      <ApolloQuery
        :query="require('../graphql/getUserById.gql')"
        :variables="{ id }"
        :context="{ headers : {Authorization : token}}"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <div
            v-if="data"
            class="result apollo"
            style="display: none"
          >{{ user = data.userById }}
          </div>
        </template>
      </ApolloQuery>

      <div>
          <span class="title is-bold">{{user.firstName +' ' + user.lastName}}</span>
      </div>
         <!--      <MultimediaByUser/>-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'profile',
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    user: {},
  }),
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
};
</script>
