<template>
  <div id="feed-image">
    <div class="container">
      <stack :column-min-width="200" :gutter-width="5" :gutter-height="5" monitor-images-loaded>
        <stack-item v-for="(image, i) in images" :key="i" style="transition: transform 300ms">
          <img class="feed" :src="image.urls.small" :alt="image.alt_description" />
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Stack, StackItem } from 'vue-stack-grid';

export default {
  name: 'feed-image',
  components: {
    Stack,
    StackItem,
  },
  data: () => ({
    images: [],
  }),
  created() {
    this.images = [];
    axios
      .get('https://api.unsplash.com/search/photos?query=Autumn&per_page=50', {
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Client-ID vnhhzCUP6ZDe-08qTCclbHhnIOqa33g24TgJAzqYDDI',
          'Accept-Version': 'v1',
        },
      })
      .then((response) => {
        this.images = response.data.results;
      })
      .catch(() => {
        this.images = [];
      });
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
