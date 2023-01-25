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
  }
}

export const actions ={
  async nuxtServerInit(vuexContext, context){
    let res =  await axios.get(`https://nuxtjs-simple-blog-app-default-rtdb.firebaseio.com/posts.json`)
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
  }
}
