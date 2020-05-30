<template>
  <div id="app">
    <Navbar v-if="isLogged" />
    <router-view />
    <v-btn @click="getMessagingToken">
      <v-icon>notifications_none</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import firebase from '@/configFirebase.js';
import axios from 'axios';
import { mapState } from 'vuex';

const { messaging } = firebase;

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.logged,
    }),
  },
  created() {
    if (this.isLogged) {
      this.$router.push('Home');
    }
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    this.listenTokenRefresh();
  },
  methods: {
    getMessagingToken() {
      messaging.usePublicVapidKey('BNdN95LdBikRiuIZtkK_FgLpZsyFZe8Ozbf8V4F5E7JAMrgP2BKP2oYrDIgapA0ICDSHetxicR4wgajgYdbUJeU');
      messaging
        .getToken()
        .then(async (token) => {
          if (token) {
            const currentMessageToken = window.localStorage.getItem('messagingToken');
            console.log('token will be updated', currentMessageToken !== token);
            if (currentMessageToken !== token) {
              await this.saveToken(token);
            }
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');
            this.notificationsPermisionRequest();
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    },
    notificationsPermisionRequest() {
      messaging
        .requestPermission()
        .then(() => {
          this.getMessagingToken();
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
    },
    listenTokenRefresh() {
      const currentMessageToken = window.localStorage.getItem('messagingToken');
      console.log('currentMessageToken', currentMessageToken);
      if (currentMessageToken) {
        messaging.onTokenRefresh(() => {
          messaging
            .getToken()
            .then((token) => {
              this.saveToken(token);
            })
            .catch((err) => {
              console.log('Unable to retrieve refreshed token ', err);
            });
        });
      }
    },
    saveToken(token) {
      console.log('tokens', token);
      axios
        .post('https://us-central1-pinart-notifications.cloudfunctions.net/GeneralSubscription', { token })
        .then((response) => {
          window.localStorage.setItem('messagingToken', token);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
