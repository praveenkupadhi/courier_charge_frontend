import { useDispatch } from "react-redux";
import { inputData } from "../redux/actionTypes";

export const CourierCharge = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			weight: Number(e.target[0].value).toFixed(2),
			pincode: Number(e.target[1].value),
			rateType: e.target[2].value,
		};
		// console.log(data);
		dispatch(inputData(data));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="number" placeholder="Enter the weight" step="any" />
			<input type="number" placeholder="Enter the pincode" maxLength="6" />
			<select>
				<option value="">---SELECT---</option>
				<option value="Forward">Forward</option>
				<option value="Forward & RTO">Forward & RTO</option>
			</select>
			<input type="submit" value="Show courier charges" />
		</form>
	);
};
