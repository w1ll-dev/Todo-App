import axios from 'axios'

export const changeDescription = (e) => ({
    type:'CHANGED_DESCRIPTION',
    payload: e.target.value           
})

const URL = 'http://localhost:3003/api/todos'

export const search = () => {
    const request = axios.get(`${URL}?sort=-creatAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}