import { all } from "redux-saga/effects";
import { searchProperties } from "./properties";

export function* rootsaga() {
	yield all([searchProperties()]);
}
