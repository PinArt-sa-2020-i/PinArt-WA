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
      <ul>
        <li>
          {{JSON.stringify(user)}}
        </li>
      </ul>
      <div class="home">
      <div class="columns">
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
                  <img src="https://i.imgur.com/XTNBAGt.jpg">
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
              </div>
              <div class="column is-2-tablet is-4-mobile has-text-centered">
                <p class="stat-val">30</p>
                <p class="stat-key">Seguidores</p>
              </div>
              <div class="column is-2-tablet is-4-mobile has-text-centered">
                <p class="stat-val">0</p>
                <p class="stat-key">Tableros</p>
              </div>
              <div class="column is-2-tablet is-4-mobile has-text-centered">
                <p class="stat-val">3</p>
                <p class="stat-key">Pines</p>
              </div>
            </div>
          </div>
          <div class="profile-options is-fullwidth">
            <div class="tabs is-fullwidth is-medium">
              <ul>
                <li class="link">
                  <a>
                <span class="icon">
                  <i class="fa fa-list"></i>
                </span>
                    <span>Tableros</span>

                  </a>
                </li>
                <li class="link is-active">
                  <a>
                    <span>Pines</span>
                  </a>
                </li>
                <li class="link">
                  <a>
                    <span>Seguidores</span>
                  </a>
                </li>
  &lt;!&ndash;              <li class="link">
                  <a>
                    <span>Etiquetas</span>
                  </a>
                </li>&ndash;&gt;
              </ul>
            </div>
          </div>
          <div class="columns is-mobile">
  &lt;!&ndash;          Ejemplo tablero&ndash;&gt;
            <div class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://placehold.it/300x225"/>
                  </figure>
                </div>
                <div class="card-content">
                  <span class="tag is-dark subtitle">#1</span>
                  <p>Personal Notes on the Property </p>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
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
    user: null,
  }),
  computed: {
    ...mapState({
      id: (state) => state.id,
      token: (state) => state.token,
    }),
  },
};
</script>
<style>
  #feed-image {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 2vh;
  }
  .container {
    width: 100vw;
    margin: 0 auto;
    margin-left: 0;
    margin-right: 0;
    max-width: 100vw;
    padding-left: 2vw;
    padding-right: 2vw;
  }
  .feed {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
</style>
