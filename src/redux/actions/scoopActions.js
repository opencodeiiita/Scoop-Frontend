// api.js
import axiosInstance from './axiosInstance';

export const fetchScoopDetails = (scoopId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/api/scoop/${scoopId}`);
    dispatch({ type: 'FETCH_SCOOP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_SCOOP_FAILURE', payload: error.message });
  }
};

export const upvoteScoop = (scoopId) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(`/api/scoop/${scoopId}/upvote`);
    dispatch({ type: 'UPVOTE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPVOTE_FAILURE', payload: error.message });
  }
};
