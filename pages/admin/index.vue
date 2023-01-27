<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center mt-3">
      <button class="btn btn-success" @click="$router.push('admin/new-post')">Add new post</button>
    </div>
      <PostList :isAdmin="true" :posts="fetchedPosts"/>
  </div>
</template>

<script>
  import PostList from '../../components/post/PostList.vue'
  export default{
    layout: 'admin',
    components:{
      PostList,
    },
    computed:{
      fetchedPosts(){
        return this.$store.getters.getPosts
      }
    },
    head(){
      return{
        title: 'Admin'
      }
    }
  }
</script>