import * as actions from './actionTypes';


export default function reducer( state = [], action) {
  switch(action.type) {

    case actions.UPVOTE:
      return [
        ...state,
        {

        }
      ];

    case actions.DOWNVOTE:
      return [
        ...state,
        {

        }
      ];

    default:
      return state;

  }
}



// import { createReducer } from '@reduxjs/toolkit';
// const initialState = [];

// export const reducer = createReducer(initialState, (builder) => {

//     builder
//       .addCase(actions.UPVOTE, (state, action) => {
//         state.upvoted = true;


//       })
//       .addCase(actions.DOWNVOTE, (state, action) => {
//         state.downvoted = true;


//       })

// })

// export default reducer;










