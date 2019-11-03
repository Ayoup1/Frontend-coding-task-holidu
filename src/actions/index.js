import * as types from "./types";

export const setPropertiesData = value => {
	return {
		type: types.SET_PROPERTIES_DATA,
		apartments: value.apartments,
		totalCount: value.totalCount
	};
};

export const searchPropertiesData = value => {
	return {
		type: types.SEARCH_PROPERTIES_DATA,
		text: value.text
	};
};

export const setErorr = () => {
	return {
		type: types.SET_ERROR
	};
};
