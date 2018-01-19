const defaultState = {
    appName: 'Conduit'
};

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'APP_LOAD':
        console.log(action.token);
         return {
             ...state,
             token: action.token || null,
             appLoaded: true,
             currentUser : action.payload ? action.payload.user : null
         };
         case 'REDIRECT':
          return { ...state, redirectTo: null };
         case 'LOGIN': 
         
          return {
              ...state, 
              redirectTo: action.error ? null: '/',
              token : action.error ? null : action.payload.user.token,
              currentUser: action.error ? null: action.payload.user
          };
         case 'REGISTER':
         return {
             ...state,
             redirectTo:action.error ? null : '/',
             token: action.error ? null : action.payload.user.token,
             currentUser: action.error ? null : action.payload.user
         };
         case 'LOGOUT':
         return {
             ...state,
             redirectTo:'/',
             token : null,
             currentUser: null
         };

         case 'SETTINGS_SAVED':
         return {
             ...state,
             redirectTo: action.error ? null : '/',
             currentUser: action.error ? null : action.payload.user
         };

         case 'ARTICLE_SUBMITTED':
         const redirectURL = `article/${action.payload.article.slug}`;
         return {...state, redirectTo: redirectURL};

    }

    return state;
}