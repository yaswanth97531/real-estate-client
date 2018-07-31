import * as Type from "./ActionTypes";

export const loginUser = (username, password) => {
  return {
    type: Type.LOGIN_USER,
    username,
    password
  };
};

export const signupUser = (firstName, lastName, email, password) => {
  return {
    type: Type.SIGNUP_USER,
    firstName,
    lastName,
    email,
    password
  };
};

export const googleLogin = () => {
  return {
    type: Type.GOOGLE_LOGIN_USER
  };
};

export const getDefaultImages = () => {
  return {
    type: Type.GET_DEFAULT_IMAGES
  };
};

export const newPost = () => {
  return {
    type: Type.NEW_POST
  };
};
