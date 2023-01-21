<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
  import PostList from '../components/post/PostList.vue'
  import About from '../components/home/About.vue'

  export default{
    components:{
      PostList,
      About
    },
    data(){
      return{
        fetchedPosts:[]
      }
    },
    mounted(){},

    asyncData(context,callback) {
      console.log("async data runned")
      setTimeout(()=>{
        callback(null,{
        fetchedPosts: [
        {
            id:1,
            title:'Lorem ipsum dolor sit amet',
            subTitle:'Lorem i',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum rerum fuga quis. Eos voluptas autem reprehenderit ratione esse?',
            author:'tugrankenger'
          },
          {
            id:2,
            title:'Lorem ipsum dolor sit amet 222',
            subTitle:'Lorem i 222',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum rerum fuga quis. Eos voluptas autem reprehenderit ratione esse?',
            author:'tugrankenger'
          }
        ]
      })
      },2000)
    },
  }
</script>