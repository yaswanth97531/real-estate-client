import { all, fork, takeEvery } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import * as Auth from "./AuthSaga";
import * as Images from "./ImagesSaga";

export default function* rootSaga(params) {
  yield all([takeEvery(Types.LOGIN_USER, Auth.fetchLoginUser)]);
  yield all([takeEvery(Types.GOOGLE_LOGIN_USER, Auth.googleLoginUser)]);
  yield all([takeEvery(Types.SIGNUP_USER, Auth.storeUser)]);
  yield all([takeEvery(Types.GET_DEFAULT_IMAGES, Images.fetchDefaultImages)]);
}
