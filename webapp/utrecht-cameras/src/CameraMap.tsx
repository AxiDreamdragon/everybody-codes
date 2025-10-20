import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Camera } from "./Camera";
import { LatLng } from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useSearch } from "./SearchContext";

type Props = {
	cameras: Camera[];
}

function CameraMap({ cameras }: Props) {
	const position = new LatLng(52.0914, 5.1115);
	const { searchQuery } = useSearch();

	return (
		<MapContainer style={{ width: '100%', height: '100dvh' }}
			center={position}
			zoom={13}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/* TODO: show all markers if search query has 0 hits */}
			{cameras.map((camera, i) => {
				if (!searchQuery || camera.name.toLowerCase().includes(searchQuery.toLowerCase())) {
					return (<Marker position={new LatLng(camera.lat, camera.lng)} key={i}>
						<Popup>
							{camera.name}
						</Popup>
					</Marker>)
				} else {
					return null;
				}
			})}
		</MapContainer>
	)
}

export default CameraMap;