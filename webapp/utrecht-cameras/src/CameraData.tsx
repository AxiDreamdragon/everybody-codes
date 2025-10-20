import type { Camera } from "./Camera";
import CameraDataSection from "./CameraDataSection";

type Props = {
	orderedCameraData: Camera[][];
}

function CameraData({ orderedCameraData }: Props) {
	//TODO: Camera Columns aren't actually columns, rename them
	{/* iterating over each camera four times is slow, but the database is small enough that it's alright. */ }
	return (
		<div className='camera-columns'>
			<CameraDataSection cameras={orderedCameraData[0]} header="Camera's tot 600" />
			<CameraDataSection cameras={orderedCameraData[1]} header="Camera's 600 tot 700" />
			<CameraDataSection cameras={orderedCameraData[2]} header="Camera's 700 tot 800" />
			<CameraDataSection cameras={orderedCameraData[3]} header="Camera's (overigen)" />
		</div>);
}

export default CameraData;