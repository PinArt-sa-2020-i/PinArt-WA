<template>
  <div class="testing">
    <h1>Im trying new stuff</h1>
    <p>El mensaje es: {{ message }}</p>
    <input v-model="message" placeholder="edíteme" />
    <TestingComponent :name="message" />
  </div>
</template>

<script>
// @ is an alias to /src
import TestingComponent from '@/components/TestingComponent.vue';

export default {
  name: 'Testing',
  components: {
    TestingComponent,
  },
  data() {
    return {
      message: '',
    };
  },
};
</script>
