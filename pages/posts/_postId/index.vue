<template>
  <PostDetail :post ="fetchedPost"/>
</template>

<script>
import PostDetail from '@/components/post/PostDetail'

export default{
  comments:{
    PostDetail
  },
  asyncData(context, callback) {
    callback(null,{
      fetchedPost:{
        id:1,
        title:'test post title, id info: '+context.params.postId,
        subTitle:'test post subTitle',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet explicabo numquam quaerat sit nobis quas aliquid hic dolore, vel atque aliquam ab dolorum, delectus quasi eligendi quia id ut.',
        author:'tugrankenger'
      }
    })
  },
}
</script>