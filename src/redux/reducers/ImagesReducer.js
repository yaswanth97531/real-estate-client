import * as Type from "../actions/ActionTypes";

const initialState = {
  defaultImages: ""
};

const handleGetDefaultImages = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    defaultImages: action.result
  });
  return {
    ...newState
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_DEFAULT_IMAGES:
      return {
        ...state
      };
    case Type.GET_DEFAULT_IMAGES_SERVER_RESPONSE_SUCCESS:
      return handleGetDefaultImages(state, action);
    case Type.GET_DEFAULT_IMAGES_SERVER_RESPONSE_ERROR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};
