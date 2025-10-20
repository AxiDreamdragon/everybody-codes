import type { Camera } from "./Camera";

export type CameraColumn2 = {
	cameras: Camera[];
	minId?: number,
	maxId?: number,
}

function getFilteredCameraColumn(cameras: Camera[], minId?: number, maxId?: number) {
	const cameraColumn: CameraColumn2 = {
		cameras: [],
		minId,
		maxId
	};

	for (const camera of cameras) {
		if (!!minId && camera.id < minId) {
			continue;
		}

		if (!!maxId && camera.id > maxId) {
			continue;
		}
	}
}