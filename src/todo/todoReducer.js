const INITIAL_STATE = {
    description:'Read a book',
    list: [{
        _id:1,
        description:'Go to workout',
        done: true
    },{
        _id:2,
        description:'Learn how to program in JavaScript',
        done: true
    },{
        _id:3,
        description:'Sleep eight hours a day',
        done: true
    }],
} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGED_DESCRIPTION':
            return {...state, description: action.payload}
        default:
            return state
    } 
} 