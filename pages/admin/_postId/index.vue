<template>
  <PostForm
    @submit="updatePost($event)"
    :isUpdate="true" 
    :post="fetchedPost" 
  />
</template>

<script>
import PostForm from '@/components/admin/PostForm.vue'
import axios from 'axios'
export default {
  layout: 'admin',
  components: {
    PostForm
  },
  data() {
    return {

    }
  },
  async asyncData(context) {
    return await axios.get('https://nuxtjs-simple-blog-app-default-rtdb.firebaseio.com/posts/'+context.params.postId+ '.json')
    .then(res=>{
      return {
        fetchedPost: res.data
      }
    })
  },
  methods:{
    updatePost(editedPost){
      let id = this.$route.params.postId
      this.$store.dispatch('updatePost',{id:id, ...editedPost}).then(res=>{
        this.$router.push('/admin')
      })
    }
  }
}
</script>