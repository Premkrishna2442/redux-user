import {request,success,failure} from './userType'



const initialState={
    loading:false,
    users:[],
    error:''
}


const userReducer=(state=initialState,action)=>{
   switch(action.type){
        case request:
            return{
                ...state,
                loading:true
            }
        case success:
            return{
                
                loading:false,
                users:action.payload,
                error:'',
            }  
            
        case failure:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
           default:
               return state
               
    }

}

export default userReducer