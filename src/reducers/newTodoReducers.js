const newinitialData = {
    newlist: []
  };
  
  const newtodoReducers = (state = newinitialData, action) => {
    switch (action.type) {
      case "ADD_NEW_TODO":
        const { id, data } = action.payload;
  
        return {
          ...state,
          newlist: [
            ...state.newlist,
            {
              id: id,
              data: data,
            }
          ]
        }
  
        case "DELETE_NEW_TODO":
         const newnewList = state.newlist.filter((elem)=> elem.id != action.id)
        return {
          ...state,
          newlist:newnewList
        }
  
        case "REMOVE_NEW_TODO":
      //    const newList = state.list.filter((elem)=> elem.id != action.id)
        return {
          ...state,
          newlist:[]
        }
  
        default : return state;
    }
  }
  
  export default newtodoReducers;
  