import axios from "axios";
import { INPUT_DATA_SEND } from "./actions";

export const inputDataSend = (payload) => ({
	type: INPUT_DATA_SEND,
	payload,
});

export const inputData = (data) => {
	return (dispatch) => {
		return axios
			.post("http://localhost:3001", data)
			.then((res) => {
				dispatch(inputDataSend(res.data));
			})
			.catch((error) => {
				alert("Pincode not found");
			});
	};
};
