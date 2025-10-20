import type { Camera } from "./Camera";
import CameraColumn from "./CameraColumn";

type Props = {
	orderedCameraData: Camera[][];
}

function CameraData({ orderedCameraData }: Props) {
	{/* iterating over each camera four times is slow, but the database is small enough that it's alright. */ }
	return (
		<div className='camera-columns'>
			<CameraColumn cameras={orderedCameraData[0]} header="Camera's tot 600" />
			<CameraColumn cameras={orderedCameraData[0]} header="Camera's 600 tot 700" />
			<CameraColumn cameras={orderedCameraData[0]} header="Camera's 700 tot 800" />
			<CameraColumn cameras={orderedCameraData[0]} header="Camera's (overigen)" />
		</div>);
}

export default CameraData;