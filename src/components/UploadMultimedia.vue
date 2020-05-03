<template>
  <input @change="upload" type="file"/>
</template>

<script>
  export default {
    methods: {
      upload ({ target: { files = [] } }) {
        if (!files.length) {
          return
        }

        this.$apollo
          .mutate({
            mutation: require('../graphql/addMultimedia.gql'),
            variables: {
              image: files[0]
            },
            context: {
              hasUpload: true
            }
          })
      }
    }
  }
</script>
