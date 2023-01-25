<template>
  <PostForm :isUpdate="true" :post="loadedPost" />
</template>

<script>
import PostForm from '@/components/admin/PostForm.vue'
export default {
  layout: 'admin',
  components: {
    PostForm
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        subTitle: 'Lorem i',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum rerum fuga quis. Eos voluptas autem reprehenderit ratione esse?',
        author: 'tugrankenger'
      }
    }
  }
}
</script>