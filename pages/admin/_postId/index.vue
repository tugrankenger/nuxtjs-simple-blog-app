<template>
  <PostForm :isUpdate="true"/>
</template>

<script>
import PostForm from '@/components/admin/PostForm.vue'
  export default{
    layout:'admin',
    components:{
      PostForm
    }
  }
</script>