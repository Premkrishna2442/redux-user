import React,{useEffect} from 'react'
import {fetchUsers} from './redux/index'
import {connect} from 'react-redux'

function UserComponent({userData,fetchUsers}) {
   
  
   
    useEffect(
         ()=>{fetchUsers()}
        // eslint-disable-next-line 
    ,[])
  return userData.loading?(<h1>loading</h1>
    
  ):userData.error?(<h2>userData.err</h2>)   :
  (
      <div>
          <h1>Users</h1>
          {userData&&userData.users&& userData.users.map(user=><p>user.name</p>)}
      </div>
  ) 
 
}
const mapDispatchToProps=(dispatch)=>{
    return{
       fetchUsers:dispatch(fetchUsers())  
    }
} 

const mapStateToProps=(state)=>{
    return{
        userData:state
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent)