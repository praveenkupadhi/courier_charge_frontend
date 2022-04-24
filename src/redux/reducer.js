import { INPUT_DATA_SEND } from "./actions";

const initState = {
	data: "",
};

export const reducer = (store = initState, { type, payload }) => {
	switch (type) {
		case INPUT_DATA_SEND:
			return { ...store, data: payload };
		default:
			return store;
	}
};
