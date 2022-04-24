import { Route, Routes } from "react-router";
import { CourierCharge } from "../components/CourierCharge";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<CourierCharge />} />
			<Route path="*" element={<h2>Page not found</h2>} />
		</Routes>
	);
};
