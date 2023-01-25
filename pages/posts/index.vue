<template>
  <PostList :posts="fetchedPosts"/>
</template>

<script>
import PostList from '../../components/post/PostList.vue'
export default {
  components: {
    PostList
  },
  computed:{
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
  }
}
</script>