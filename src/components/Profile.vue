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

         <div class="container profile">
            <div class="modal" id="edit-preferences-modal">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Editar Perfil</p>
                  <Button class="delete"></Button>
                </header>
              </div>
            </div>
            <div class="section profile-heading">
              <div class="columns is-mobile is-multiline">
                <div class="column is-2">
                <span class="header-icon user-profile-image">
                  <img v-bind:src="user.profiles[0].foto"  alt="Foto de perfil">

                </span>
                </div>
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
                  <br/>
                  <b-button v-b-modal.modal-no-backdrop>Agregar Multimedia</b-button>
                  <b-modal id="modal-no-backdrop"
                           hide-backdrop content-class="shadow" title="Subir Multimedia">
                    <p class="my-2">
                      <UploadMultimedia />
                    </p>
                  </b-modal>
                </div>
                <div class="column is-2-tablet is-4-mobile has-text-centered">
                  <CountFollowing />
                </div>
                <div class="column is-2-tablet is-4-mobile has-text-centered">
                  <CountFollower />
                </div>
                <div class="column is-2-tablet is-4-mobile has-text-centered">
                  <CountMultimedia />
                </div>
              </div>
            </div>
          </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UploadMultimedia from '@/components/UploadMultimedia.vue';
import CountFollowing from '@/components/CountFollowing.vue';
import CountMultimedia from '@/components/CountMultimedia.vue';
import CountFollower from '@/components/CountFollower.vue';

export default {
  name: 'profile',
  components: {
    UploadMultimedia,
    CountFollowing,
    CountMultimedia,
    CountFollower,
  },
  props: {
    labels: [],
  },
  data: () => ({
    user: {
      profiles: [
        {
          foto: '',
        },
      ],
    },
  }),
  computed: {
    ...mapState({
      id: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
