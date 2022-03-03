import { createStore } from "redux"

const store = createStore(function(state, action) {
    fetch('https://api-nodejs-todolist.herokuapp.com/task', {
        method: 'get',
        headers: {
            'Content-Type':'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag"
        }
       })
       .then((e)=>{
           let k = e.json()
           return k
       })
       .then((f)=>{
            state = f
       })
       return state
}, {})

export default store
