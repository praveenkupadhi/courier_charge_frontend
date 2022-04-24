import { INPUT_DATA_SEND } from "./actions";

const initState = {
	data: 0,
};

export const reducer = (store = initState, { type, payload }) => {
	switch (type) {
		case INPUT_DATA_SEND:
			return { ...store, data: payload };
		default:
			return store;
	}
};
