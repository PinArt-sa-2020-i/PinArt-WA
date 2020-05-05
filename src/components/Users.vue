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
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UploadMultimedia from '@/components/UploadMultimedia.vue';
// import MultimediaByUser from './MultimediaByUser.vue';

  export default {
    name: 'profile',
    components: {
      UploadMultimedia,
      // MultimediaByUser,
    },
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
