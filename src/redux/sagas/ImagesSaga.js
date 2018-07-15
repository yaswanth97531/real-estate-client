import { takeEvery, call, put, select } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import * as API from "../../config/config";
import { GetDataFromServer } from "../service";

export function* fetchDefaultImages(action) {
  try {
    let formBody = {};
    const reqMethod = "GET";
    const response = yield call(
      GetDataFromServer,
      API.GET_DEFAULT_IMAGES,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.GET_DEFAULT_IMAGES_SERVER_RESPONSE_ERROR,
        error: result.error
      });
    } else {
      yield put({
        type: Types.GET_DEFAULT_IMAGES_SERVER_RESPONSE_SUCCESS,
        result
      });
    }
  } catch (error) {
    console.log("type: Types.SERVER_CALL_FAILED", error);
    yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
  }
}
