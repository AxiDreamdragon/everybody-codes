import type { Camera } from "./Camera";

type Props = {
	orderedCameraData: Camera[][];
}

function ColumnData({ orderedCameraData }: Props) {
	return (<div className='camera-columns'>
		<div>
			Kolom 1 (minder dan 600)
			{/* iterating over each camera four times is slow, but the database is small enough that it's alright. */}
			<ul>
				{orderedCameraData[0].length > 0 ?
					orderedCameraData[0].map(camera => <li>{camera.name}</li>) :
					<p>Geen camera's gevonden in dit bereik.</p>}
			</ul>
		</div>
		<div>
			Kolom 2 (600-700)
			<ul>
				{orderedCameraData[1].length > 0 ?
					orderedCameraData[1].map(camera => <li>{camera.name}</li>) :
					<p>Geen camera's gevonden in dit bereik.</p>}
			</ul>
		</div>
		<div>
			Kolom 3 (700-800)
			<ul>
				{orderedCameraData[2].length > 0 ?
					orderedCameraData[2].map(camera => <li>{camera.name}</li>) :
					<p>Geen camera's gevonden in dit bereik.</p>}
			</ul>
		</div>
		<div>
			Kolom 4 (overig)
			<ul>
				{orderedCameraData[3].length > 0 ?
					orderedCameraData[3].map(camera => <li>{camera.name}</li>) :
					<p>Geen camera's gevonden in dit bereik.</p>}
			</ul>
		</div>
	</div>);
}

export default ColumnData;