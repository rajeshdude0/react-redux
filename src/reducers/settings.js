export default (state={}, action)=>{
    switch(action.type){
        case 'SETTING_SAVED':
         return {
             ...state,
             inProgress:false,
             errors: action.error ? action.payload.errors : null
         };
        
        case 'ASYNC_START':
        return {
            ...state,
            inProgress: true
        };
    }

    return state;
}