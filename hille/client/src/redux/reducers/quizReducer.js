const initialState = { quizData: [] } // מערך שאלות 

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_QUIZ_DATA": {
          return { ...state, quizData: action.payload}
        }

        // case 'ADD_USER': {
        //     console.log(action.payload)
        //     return { ...state, appUser: [...state.appUser, action.payload] }
        // }
        // case 'DELETE_USER': {
        //     let filterUser = state.appUser.filter(elm => elm.id !== action.payload.id)
        //     console.log(filterUser)
        //     return {
        //         ...state, appUser: filterUser
        //     }
        // }

        default: {
            return state
        }
    }
}


export default quizReducer

// state.todo[0].id === 0 ? state.todo.slice(0, -1) : state.todo