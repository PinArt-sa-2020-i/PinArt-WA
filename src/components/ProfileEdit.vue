<template id="profile-edit">
  <section>
    <h2>Edit profile</h2>
    <form v-on:submit="updateprofile">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input class="form-control" id="edit-first-name" v-model="user.firstName" required/>
      </div>


      <button type="submit" class="btn btn-primary">Save</button>
      <router-link to="'/'" class="btn btn-default">Cancel</router-link>
    </form>
  </section>
</template>
