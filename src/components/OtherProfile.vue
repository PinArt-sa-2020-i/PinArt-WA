<template>

  <div id="otherprofile">
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
        <Toast></Toast>


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
              </p>


                <p class="tagline">
                  {{user.profiles[0].fechaNacimiento}}
                </p>
                <p class="tagline">
                  {{user.profiles[0].genero}}
                </p>
                <p class="tagline">
                  {{user.profiles[0].descripcion}}
                </p>

              <br/>
            </div>
            <div class="column is-2-tablet is-4-mobile has-text-centered">
              <CountFollowing />
              <div> {{id}}</div>
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
import CountFollowing from '@/components/CountFollowing.vue';
import CountMultimedia from '@/components/CountMultimedia.vue';
import CountFollower from '@/components/CountFollower.vue';

export default {
  name: 'otherprofile',
  components: {
    CountFollowing,
    CountMultimedia,
    CountFollower,
  },
  props: {
    labels: [],
    id: {
      type: Number,
      required: true,
    },
  },
  data: () => (
    {
      editing: false,
      user: {
        profiles: [
          {},
        ],
      },
    }),
  methods: {
    edit() {
      this.editing = true;
    },
    onSave(value) {
      this.editing = false;
      this.$toast.add({
        severity: 'success',
        summary: value,
        detail: value,
        life: 3000,
      });
    },
    onCancel() {
      this.editing = false;
    },
  },
  computed: {
    ...mapState({
      idUser: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
