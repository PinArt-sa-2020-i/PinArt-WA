<template>
  <div class="home">
    <div class="columns">
      <div class="container profile">
        <div class="section profile-heading">
          <div class="columns is-mobile is-multiline">
            <div class="column is-2">
                <span class="header-icon user-profile-image">
                  <img src="https://i.imgur.com/XTNBAGt.jpg">
                </span>
            </div>
            <div class="column is-4-tablet is-10-mobile name">
              <Profile />
              <UploadMultimedia />
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
// @ is an alias to /src
import Profile from '@/components/Profile.vue';
import { mapState, mapActions } from 'vuex';
import * as constants from '@/store/constants';
import UploadMultimedia from '@/components/UploadMultimedia.vue';


export default {
  name: 'User',
  components: {
    Profile,
    UploadMultimedia,
  },
  data() {
    return {
      labels: [],
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.id,
    }),
  },
  methods: {
    ...mapActions({
      image: constants.GET_IMAGE,
    }),
  },
};
</script>
