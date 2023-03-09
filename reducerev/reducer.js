import {ActionType} from "../actions/actionTypes";

const initialState = {
   posts: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case ActionType. VIEW_POSTS:
      return {
        ...state,
        posts: action.payload,
        
      };
      case ActionType.UPVOTE_COMMENT:
     
        
        const upVotedComment= state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, upvotes: (post.upvotes || 0) + 1, }
           
            : post
        );
        
        return {
        ...state,
        posts:upVotedComment,
      };
    case ActionType.DOWNVOTE_COMMENT:
     
        const downVotedComment= state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, downvotes: (post.downvotes || 0) + 1,}
            : post
        );
       
        return {
        ...state,
        posts:downVotedComment,
      };
    case ActionType.SORT_POSTS:
      return {
        ...state,
        posts: action.payload
      };
 
    default:
      return state;
  }
};
export default reducer;


