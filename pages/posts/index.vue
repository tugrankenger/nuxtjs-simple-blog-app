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
  },
  head(){
    return{
      title: 'Post List'
    }
  }
}
</script>