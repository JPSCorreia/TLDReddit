import * as actions from './actionTypes';

export const upvoteComment = (commentID) => ({
  type: actions.UPVOTE,
    payload: {
      commentID: commentID
    }
});


export const downvoteComment = (commentID) => ({
  type: actions.DOWNVOTE,
    payload: {
      commentID: commentID
    }
})

