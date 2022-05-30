import {success,request,failure} from './userType'
import axios from 'axios'
export const userRequest=()=>{
    return{
    type:request
    }
}

export const userSuccess=(users)=>{
    return{
    type:success,
    payload:users
    }
}

export const userFailure=(error)=>{
    return{
        type:failure,
        payload:error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(userRequest)
        axios.get('https://jsonplaceholder.typicode.com/user').then((res)=>{
            const users=  res.data
            dispatch(userSuccess(users))
        }).catch((error)=>{
            const err=error.message
            dispatch(userFailure(err))
        }
        )
        }
    }