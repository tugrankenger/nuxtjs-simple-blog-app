<template>
  <PostForm @submit="onSubmit($event)"/>
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/admin/PostForm.vue'
  export default{
    layout:'admin',
    components:{
      PostForm
    },
    methods:{
      onSubmit(post){
        axios.post('https://nuxtjs-simple-blog-app-default-rtdb.firebaseio.com/posts.json',post).then(res=>{
          console.log(res)
          this.$router.push('/admin')
        })
      }
    }
  }
</script>