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
        <Toast></Toast>
      </form>
      <p v-if="error">An error occurred: {{ error }}  </p>
    </template>
  </ApolloMutation>

</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

const serverKey = require('../serverKey');

export default {
  name: 'Upload',
  props: ['title'],
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
        detail: 'Multimedia Cargada',
        life: 3000,
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
        .then((results) => {
          axios.post('https://fcm.googleapis.com/fcm/send',
            {
              to: `/topics/${this.idUser}`,
              priority: 'high',
              notification: {
                title: 'Pinart',
                body: `${this.username} subió contenido`,
                icon: '/img/Logo.8575bbed.png',
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `key=${serverKey}`,
              },
            }).then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
            console.log(err.response);
          });
          // eslint-disable-next-line no-console
          console.log(results);
          this.$toast.add({
            severity: 'success',
            summary: 'Multimedia Cargada',
            detail: 'Multimedia Cargada',
            life: 3000,
          });
          this.$emit('saved');
        });
    },

  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      idUser: (state) => String(state.id),
      username: (state) => state.username,
    }),
  },
};

</script>
