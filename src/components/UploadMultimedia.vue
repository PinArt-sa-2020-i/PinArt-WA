<template>
  <ApolloMutation
    :mutation="require('../graphql/addMultimedia.gql')"
    :variables= "{image}"
    @change="onUpload"
  >
    <template v-slot="{ mutate, error }">
    <form v-on:submit.prevent="">
      <input  @change="onUpload" type="file"/>
      <button @click="mutate()" class="btn btn-primary"> Upload</button>
    </form>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Upload',
  data() {
    return {

    };
  },
  methods: {
    onUpload({ target: { files = [] } }) {
      if (files.length) {
        console.log(files);

      }
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
};

</script>
