import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description:'ler livro',
        list: [{
            _id:1,
            description:'Go to workout',
            done: false
        },{
            _id:2,
            description:'Learn how to program in JavaScript',
            done: true
        },{
            _id:3,
            description:'Sleep eight hours a day',
            done: true
        }]
    })
})

export default rootReducer