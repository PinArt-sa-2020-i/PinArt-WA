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

          <div class="container">
            <ApolloQuery
              :query="require('../graphql/getAllLabels.gql')"
              :context="{ headers : {Authorization : token}}"
            >
              <template v-slot="{ result: { loading, error, data } }">
                <div
                  v-if="data"
                  class="result apollo"
                  style="display: none"
                >{{ label = data.getAllLabels }}
                </div>
              </template>
            </ApolloQuery>
            <MultiSelect v-model="selectedLabels" :options="label" :filter="true"
                         optionLabel="name" placeholder="Seleccion Etiquetas"/>


        </div>
        <input @change="onUpload" type="file"/>
        <button @click="mutateNow" class="btn btn-primary">Upload</button>
      </form>
      <Button label="Success" class="p-button-success" @click="showSuccess" />
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
      image: null,
      descripcion: null,
      idEtiquetas: [''],
      messages: [],
      selectedLabels: [],
      label: [],
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
      const labels = this.selectedLabels.map((label) => String(label.id));
      console.log(labels);
      this.$apollo.mutate({
        // eslint-disable-next-line global-require
        mutation: require('../graphql/addMultimedia.gql'),
        variables: {
          image: this.image,
          idUsuario: this.idUser,
          descripcion: this.descripcion,
          idEtiquetas: labels,
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
