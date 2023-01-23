<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import PostList from '../components/post/PostList.vue'
import About from '../components/home/About.vue'

export default {
  components: {
    PostList,
    About
  },
  // data() {
  //   return {
  //     fetchedPosts: []
  //   }
  // },
  mounted() { 
    // this.$store.dispatch('setPosts',this.fetchedPosts)
  },

  computed:{
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
  },

  // fetch(context) {
  //   // console.log(context)
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch('setPosts', )
  //     resolve()
  //     reject(new Error())
  //   }).catch(e => {
  //     return e
  //   })
  // },
}
</script>