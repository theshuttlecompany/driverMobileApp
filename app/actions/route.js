import { ROUTE } from './actionTypes.js';

export function setRoute(route) {
	return {
		type: ROUTE.SET,
		data: route,
	}
}

export function resetRoute() {
	return {
		type: ROUTE.RESET,
	}
}