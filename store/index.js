//const axios = require('axios/dist/node/axios.cjs'); // node
import axios from 'axios'
export const state = () =>({
  fetchedPost:[]
})

export const getters = {
  getPosts(state){
    return state.fetchedPost
  }
}

export const mutations = {
  setPosts(state,posts){
    state.fetchedPost = posts
  },
  addPost(state, posts){
    state.fetchedPost.push(posts)
  },
  updatePost(state, editedPost){
    let post_index = state.fetchedPost.findIndex(item => item.id == editedPost.id)
    if(post_index){
      state.fetchedPost[post_index] = editedPost
    }
  }
}

export const actions ={
  async nuxtServerInit(vuexContext, context){
    let res =  await axios.get(process.env.baseUrl+'posts.json')
    let data = res.data
    let postArray = []
    for(let key in data){
      postArray.push({id:key, ...data[key]})
    }
    vuexContext.commit('setPosts', postArray)
    // vuexContext.commit('setPosts',res.data)
  },
  setPosts(vuexContext, posts){
    vuexContext.commit('setPosts', posts)
  },
  async addPost(vuexContext, post){
    return await axios.post(process.env.baseUrl+'posts.json',post).then(res=>{
      let id = res.data.name
      console.log({id:id, ...post})
      vuexContext.commit('addPost', {id: id, ...post})
    })
  },
  async updatePost(vuexContext,editedPost){
    return await axios.put(process.env.baseUrl+'posts/'+editedPost.id+'.json', editedPost)
    .then(res=>{
        vuexContext.commit('updatePost',editedPost)
    }).catch(err=>{
      console.log(err)
    })
  }
}
