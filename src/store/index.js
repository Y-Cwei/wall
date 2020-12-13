import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      { name: '小明', age: '18', score: '98' },
      { name: '小红', age: '19', score: '87' },
      { name: '小丽', age: '19', score: '48' },
      { name: '小刚', age: '17', score: '56' },
      { name: '小刘', age: '17', score: '72' }
    ]
  },
  getters: {
    qualified (state) {
      return state.students.filter(stucent => stucent.score >= 60)
    },
    moreAge (state) {
      return (age) => {
        return state.students.filter(student => student.age >= age)
      }
    },
    moreAgeAndQualified (state, getters) {
      return age => {
        return getters.qualified.filter(student => student.age >= age)
      }
    }
  },
  mutations: {
    encreament (state) {
      state.counter++
    },
    decreament (state) {
      state.counter--
    }
  }
})

export default store
