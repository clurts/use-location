import { useState, useEffect } from "react";

export type Location = {
  lat: number | null;
  long: number | null;
};

export type UseLocationReturn = [
  isLocating: boolean,
  position: Location,
  error: string | null
];

const useLocation = (): UseLocationReturn => {
  const [isLocating, setIsLocating] = useState<boolean>(true);
  const [position, setPosition] = useState<Location>({
    lat: null,
    long: null,
  });
  const [error, setError] = useState<string | null>(null);

  function onSuccess(position: GeolocationPosition) {
    setPosition({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
    setIsLocating(false);
  }

  function onError() {
    setError("Unable to retrieve your location.");
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return [isLocating, position, error];
};

export default useLocation;