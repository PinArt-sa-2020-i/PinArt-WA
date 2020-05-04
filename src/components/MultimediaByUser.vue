<template>
  <div id="user-image">
    <div class="container">
      <stack :column-min-width="200" :gutter-width="5" :gutter-height="5" monitor-images-loaded>
        <stack-item v-for="(image, i) in images" :key="i" style="transition: transform 300ms">
          <a
            @click="
              $router.push({
                name: 'ImageInfo',
                params: {
                  otherProp: {
                    image: image,
                    previous: 'UsersFeed',
                  },
                },
              })
            "
          >
            <img class="feed" :src="image.url" :alt="image.descripcion" />
          </a>
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid';
import { mapState } from 'vuex';
import USERS_FEED from '../graphql/getMultimediaByUser.gql';

export default {
  name: 'user-image',
  components: {
    Stack,
    StackItem,
  },
  props: {
    labels: [],
  },
  data: () => ({
    images: [],
  }),
  computed: {
    ...mapState({
      id: (state) => String(state.id),
      token: (state) => state.token,
    }),
  },
  async created() {
    const id = String(this.id);
    const { token } = this;
    const result = await this.$apollo.query({
      fetchPolicy: 'no-cache',
      query: USERS_FEED,
      variables: { id },
      context: { headers: { Authorization: token } },
    });
    this.images = result.data.getMultimediaByUser;
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
