import { useEffect, useState } from "react";

function useLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: "", lng: ""},
  });

  const onSuccess = location => {
    console.log(location.coords)
    setLocation({
      loaded: true,
      error: false,
      coordinates: {
        lat: location.coords.latitude, 
        lng: location.coords.longitude
      },
    })
  }

  const onError = error => {
    console.log("localizacion fallida")
    setLocation({
      loaded: true,
      error: true,
      coordinates: {lat: "", lng: ""}
    })
  }

  useEffect(() => {
    if(!("geolocation" in navigator)) {
      setLocation({
        loaded: true,
        error: true,
        coordinates: {lat: "", lng: ""}
      })
    }
    if(!location.coordinates.lat){
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [location])

  return {location}
}

export default useLocation