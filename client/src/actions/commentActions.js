import axios from 'axios'
import {
    ADD_COMMENT,
    GET_COMMENTS,
    LOADING_COMMENTS
} from '../constants'

export const addComment = commentData => dispatch => {
    axios.post('http://localhost:5000/api/comments/add', commentData)
        .then(res => dispatch({
            type: ADD_COMMENT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getComments = () => dispatch => {
    dispatch(loadComments)
    axios.get('http://localhost:5000/api/comments')
        .then(res => dispatch({
            type: GET_COMMENTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getCommentsByFollowingUsers = () => dispatch => {
    axios.get('http://localhost:5000/api/comments/following')
        .then(res => dispatch({
            type: GET_COMMENTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const loadComments = () => {
    return {
        type: LOADING_COMMENTS
    }
}