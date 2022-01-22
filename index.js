import useState from "react"

const useLocation = () => {
    const [isLocating, setIsLocating] = useState(true);
	const [position, setPosition] = useState({
		lat: null,
		long: null,
	});
	const [error, setError] = useState(null);

	function onSuccess(position) {
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
}
 
export default useLocation;