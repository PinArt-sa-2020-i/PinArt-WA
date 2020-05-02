<template>
  <div class="hello">
    <ApolloMutation
      :mutation="require('../graphql/authenticateUser.gql')"
      :variables="{username, password, dispositivo}"
      @done="onLogin"
    >
      <template v-slot="{ mutate, error }">
        <form v-on:submit.prevent="mutate()">
          <label for="username"> User Name</label>
          <input v-model="username" type="text" id="username">
          <label for="password"> Password</label>
          <input v-model="password" type="password" id="password">
          <button @click="mutate()"> Log in </button>
        </form>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Login',
  props: {
    msg: String,
  },
  data() {
    return {
      username: 'john',
      password: 'doe',
      dispositivo: 'pc',
    };
  },
  methods: {
    ...mapActions({
      login: constants.SESSION_LOGIN,
    }),
    onLogin(data) {
      if (data.data.authenticateUser.token) {
        this.login(data.data.authenticateUser);
      }
    },
  },
};
</script>
