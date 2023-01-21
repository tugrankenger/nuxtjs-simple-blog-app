<template>
  <div class="card me-3 mb-3 card-success" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subTitle }}</h6>
      <p class="card-text">{{ post.text }}</p>
      <div class="admin-button-container" v-if="isAdmin">
        <a href="javascript:void(0)" @click.prevent="$router.push('admin/'+post.id)"
          class="btn btn-outline-warning btn-sm">Edit</a>
        <a href="javascript:void(0)" class="btn btn-outline-danger btn-sm">Delete</a>
      </div>
      <a href="javascript:void(0)" @click.prevent="$router.push('posts/'+post.id)"
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
      },
      post:{
        required:true,
        type: Object
      }
    }
  }
</script>