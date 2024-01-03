const initialState = {
    scoopDetails: null,
    loading: false,
    error: null,
  };
  
  const scoopReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SCOOP_SUCCESS':
        return { ...state, scoopDetails: action.payload, loading: false, error: null };
      case 'FETCH_SCOOP_FAILURE':
        return { ...state, scoopDetails: null, loading: false, error: action.payload };
      case 'UPVOTE_SUCCESS':
        // Handle upvote success
        return state;
      case 'UPVOTE_FAILURE':
        // Handle upvote failure
        return state;
      default:
        return state;
    }
  };
  
  export default scoopReducer;
  