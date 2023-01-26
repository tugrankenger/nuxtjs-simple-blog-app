<template>
  <PostDetail :post ="fetchedPost"/>
</template>

<script>
import PostDetail from '@/components/post/PostDetail'
import axios from 'axios'

export default{
  comments:{
    PostDetail
  },
  async asyncData(context) {
    return await axios.get('https://nuxtjs-simple-blog-app-default-rtdb.firebaseio.com/posts/'+context.params.postId+'.json')
    .then(res=>{
      return {
        fetchedPost : res.data
      }
    })
  },
}
</script>