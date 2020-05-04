<template>
  <div id="all-tag">
    <div class="container">
      <ApolloQuery
        :query="require('../graphql/getAllLabels.gql')"
        :variables="{ id }"
        :context="{ headers : {Authorization : token}}"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <div
            v-if="data"
            class="result apollo"
            style="display: none"
          >{{ user = data.getAllLabels }}
          </div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'All-tag',
  components: {},
  props: {
    labels: [],
  },
  data: () => ({
    user: [],
  }),
  computed: {
    ...mapState({
      id: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
