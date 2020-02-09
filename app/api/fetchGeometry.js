
const endPoint = 'http://localhost:8801/otp/routers/default/index/routes/'
const endPointGeometry = 'http://localhost:8801/otp/routers/default/index/patterns'
//fromPlace LAT,LON
//toPlace
//time 9:02am
//date mm-dd-yyyy

const fetchGeometry = async (route) => {
	const url = `${endPoint}${route.id}/patterns`;
	try {
		const res = await fetch(url);
		const resJSON = await res.json();
		console.log(resJSON);
		if (!resJSON) {
			return;
		}
		const url2 = `${endPointGeometry}/${resJSON[0].id}/geometry`;
		const resGeo = await fetch(url2);
		const resJSONGeo = await resGeo.json();
		console.log(resJSONGeo)
		return resJSONGeo.points;
	} catch (e) {
		console.log('reerer', e);
	}
};

export default fetchGeometry;