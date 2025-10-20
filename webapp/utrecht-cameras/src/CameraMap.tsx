import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Camera } from "./Camera";
import { LatLng } from "leaflet";
import 'leaflet/dist/leaflet.css';

type Props = {
	cameras: Camera[];
}

function CameraMap({ cameras }: Props) {
	const position = new LatLng(52.0914, 5.1115);

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
			{cameras.map(camera => <Marker position={new LatLng(camera.lat, camera.lng)}>
				<Popup key={camera.id}>
					{camera.name}
				</Popup>
			</Marker>)}
		</MapContainer>
	)
}

export default CameraMap;