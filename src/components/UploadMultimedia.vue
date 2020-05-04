<template>
  <ApolloMutation
    :mutation="require('../graphql/addMultimedia.gql')"
    :variables="{image, idUser, descripcion, idEtiquetas}"
    :context="{ headers : {Authorization : token}}"
    @done="doneUpload"
  >
    <template v-slot="{ mutate, error }">
      <form v-on:submit.prevent="">
        <div class="form-group">
          <input v-model="descripcion" class="form-control control" type="text" id="descripcion"
                 placeholder="Descripcion de la imagen">
        </div>
        <input @change="onUpload" type="file"/>
        <button @click="mutateNow" class="btn btn-primary">Upload</button>
      </form>
      <Button label="Success" class="p-button-success" @click="showSuccess" />
      <p v-if="error">An error occurred: {{ error }}</p>
      <TagUser />
    </template>
  </ApolloMutation>

</template>

<script>
import { mapState } from 'vuex';
import TagUser from '@/components/TagUser.vue';

export default {
  name: 'Upload',
  components: {
    TagUser,
  },
  data() {
    return {
      image: null,
      descripcion: null,
      idEtiquetas: [''],
      messages: [],
    };
  },
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted',
      });
    },
    onUpload({ target: { files = [] } }) {
      if (files.length) {
        // eslint-disable-next-line no-console
        console.log(files);
        [this.image] = files;
      }
    },
    doneUpload(data) {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    mutateNow() {
      this.$apollo.mutate({
        // eslint-disable-next-line global-require
        mutation: require('../graphql/addMultimedia.gql'),
        variables: {
          image: this.image,
          idUsuario: this.idUser,
          descripcion: this.descripcion,
          idEtiquetas: this.idEtiquetas,
        },
        context: {
          headers: {
            Authorization: this.token,
          },
        },
      })
        .then((results) => console.log(results));
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      idUser: (state) => String(state.id),
    }),
  },
};

</script>
