export const addNewTodo = (data)=>{
    return {
        type: 'ADD_NEW_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
  }
  export const deleteNewTodo = (id)=>{
      return {
          type: 'DELETE_NEW_TODO',
          id
      }
    }
  
  export const remeoveNewTodo = ()=>{
      return {
          type: 'REMOVE_NEW_TODO'
      }
    }