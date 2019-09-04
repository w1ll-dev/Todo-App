import axios from 'axios'
import Todo from './todo';


export const changeDescription = (e) => ({
    type:'CHANGED_DESCRIPTION',
    payload: e.target.value           
})

const URL = 'http://localhost:3003/api/todos'

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo, description = '') => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => dispatch(search(description)))
    }
}

export const markAsPending = (todo, description = '') => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search(description)))
    }
}

export const remove = (todo, description = '') => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search(description)))
    }
}

export const clear = () => ([
    { type: 'CLEAR_INPUT' }, 
    search()
    ]
)


