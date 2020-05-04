<template>
  <div id="feed-image">
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
      <div class="column is-4-tablet is-10-mobile name">
                <p>
                  <span class="title is-bold">{{user.firstName +' ' + user.lastName}}</span>
                  <br/>
                  <a class="button is-primary is-outlined" href="#" id="edit-preferences"
                     style="margin: 5px 0">
                    Editar Perfil
                  </a>
                  <br/>
                </p>
        <p class="tagline">
          La descripcion iria aca
        </p>
      </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'feed-image',
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
