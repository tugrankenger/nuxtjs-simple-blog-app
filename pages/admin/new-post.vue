<template>
  <PostForm @submit="onSubmit($event)"/>
</template>

<script>
import PostForm from '@/components/admin/PostForm.vue'
  export default{
    layout:'admin',
    components:{
      PostForm
    },
    methods:{
      onSubmit(post){
        this.$store.dispatch('addPost',post).then(res=>{
          this.$router.push('/admin')
        })
      }
    },
    head(){
      return{
        title: 'New Post'
      }
    }
  }
</script>