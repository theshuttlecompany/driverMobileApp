const endPoint = 'http://localhost:8801/otp/routers/default/index/routes';;
//fromPlace LAT,LON
//toPlace
//time 9:02am
//date mm-dd-yyyy

const fetchAllRoute = async () => {
  const url = endPoint;
  try {
    const res = await fetch(url);
    const resJSON = await res.json();
    return resJSON;
  } catch (e) {
    console.log('reerer', e);
  }
};

export default fetchAllRoute;