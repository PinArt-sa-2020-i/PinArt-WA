<template>
  <b-navbar toggleable="lg" type="light" variant="light" sticky="sticky">
    <b-navbar-brand href="/"
      ><img width="40vw" height="40vh" src="../assets/logo.svg"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="$router.push('Home')">Inicio</b-nav-item>
        <b-nav-item @click="$router.push('Feed')">Siguiendo</b-nav-item>
      </b-navbar-nav>

      <div class="search">
        <b-nav-form>
          <b-form-input style="width: 70vw;" size="sm"></b-form-input>
        </b-nav-form>
      </div>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-avatar
          class="align-top"
          button
          @click="avatarView"
          size="md"
          variant="secondary"
        ></b-avatar>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content> </template>
          <b-dropdown-item @click="$router.push('User')">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data: () => ({
    logo: '/assets/images/Logo.png',
    sticky: true,
  }),
  methods: {
    avatarView() {
      // eslint-disable-next-line no-console
      console.log('routing to avatar view');
    },
  },
};
</script>

<style>
  .search {
    width: 70vw;
    margin-right: 2vw;
  }

  .search > input {
    background-image: url('http://www.clker.com/cliparts/z/1/T/u/9/2/search-icon-hi.png');
    background-size: contain;
    background-repeat: no-repeat;
    text-indent: 20px;
    width: 70vw !important;
  }

  .form-control {
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
  }
</style>
