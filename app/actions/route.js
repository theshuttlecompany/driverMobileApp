import { ROUTE } from './actionTypes.js';
import fetchGeometry from '../api/fetchGeometry';

export function setRoute(route) {
	return async (dispatch) => {
		const geometry = await fetchGeometry(route);
		route.geometry = geometry;
		dispatch({
			type: ROUTE.SET,
			data: route,
		})
	}
}

export function resetRoute() {
	return {
		type: ROUTE.RESET,
	}
}
