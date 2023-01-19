<template>
  <div class="card me-3 mb-3 card-success" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <div class="admin-button-container" v-if="isAdmin">
        <a href="javascript:void(0)" @click.prevent="$router.push('admin/tugrankenger_admin')"
          class="btn btn-outline-warning btn-sm">Edit</a>
        <a href="javascript:void(0)" class="btn btn-outline-danger btn-sm">Delete</a>
      </div>
      <a href="javascript:void(0)" @click.prevent="$router.push('posts/tugrankenger')"
        class="btn btn-outline-info btn-sm" v-else>Show item</a>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      isAdmin:{
        required:true,
        type:Boolean
      }
    }
  }
</script>