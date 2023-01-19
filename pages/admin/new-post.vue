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
        console.log(post)
      }
    }
  }
</script>