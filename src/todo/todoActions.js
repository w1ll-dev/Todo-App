import axios from 'axios'


export const changeDescription = (e) => ({
    type:'CHANGED_DESCRIPTION',
    payload: e.target.value           
})

const URL = 'http://localhost:3003/api/todos'

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type:'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}