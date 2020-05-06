<template>
  <div id="countMultimedia">

    <ApolloQuery
      :query="require('../graphql/getMultimediaByUser.gql')"
      :variables="{ id }"
      :context="{ headers : {Authorization : token}}"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div
          v-if="data"
          class="result apollo"
          style="display: none"
        >{{ multimedia = data.getMultimediaByUser }}
        </div>

      </template>
    </ApolloQuery>
    <p class="stat-val">{{multimedia.length}}</p>
    <p class="stat-key">Multimedia</p>
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
    multimedia: [],
  }),
  computed: {
    ...mapState({
      id: (state) => String(state.id),
      token: (state) => state.token,
    }),
  },
};
</script>
