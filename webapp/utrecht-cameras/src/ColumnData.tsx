import type { Camera } from "./Camera";

type Props = {
	orderedCameraData: Camera[][];
}

function ColumnData({ orderedCameraData }: Props) {
	{/* iterating over each camera four times is slow, but the database is small enough that it's alright. */ }
	return (
		<div className='camera-columns'>
			<div>
				Camera's tot 600
				{orderedCameraData[0].length > 0 ?
					<table>
						<thead>
							<tr>
								<th>Nummer</th>
								<th>Naam</th>
								<th>Latitude</th>
								<th>Longitude</th>
							</tr>
						</thead>
						<tbody>
							{orderedCameraData[0].map(camera => (
								<tr>
									<td>{camera.id}</td>
									<td>{camera.name}</td>
									<td>{camera.lat}</td>
									<td>{camera.lng}</td>
								</tr>
							))}
						</tbody>
					</table>
					:
					<p>Geen camera's gevonden in dit bereik.</p>}
			</div>
			<div>
				Camera's 600 tot 700
				{orderedCameraData[1].length > 0 ?
					<table>
						<thead>
							<tr>
								<th>Nummer</th>
								<th>Naam</th>
								<th>Latitude</th>
								<th>Longitude</th>
							</tr>
						</thead>
						<tbody>
							{orderedCameraData[1].map(camera => (
								<tr>
									<td>{camera.id}</td>
									<td>{camera.name}</td>
									<td>{camera.lat}</td>
									<td>{camera.lng}</td>
								</tr>
							))}
						</tbody>
					</table>
					:
					<p>Geen camera's gevonden in dit bereik.</p>}
			</div>
			<div>
				Camera's 700 tot 800
				{orderedCameraData[2].length > 0 ?
					<table>
						<thead>
							<tr>
								<th>Nummer</th>
								<th>Naam</th>
								<th>Latitude</th>
								<th>Longitude</th>
							</tr>
						</thead>
						<tbody>
							{orderedCameraData[2].map(camera => (
								<tr>
									<td>{camera.id}</td>
									<td>{camera.name}</td>
									<td>{camera.lat}</td>
									<td>{camera.lng}</td>
								</tr>
							))}
						</tbody>
					</table>
					:
					<p>Geen camera's gevonden in dit bereik.</p>}
			</div>
			<div>
				Camera's (overigen)
				{orderedCameraData[3].length > 0 ?
					<table>
						<thead>
							<tr>
								<th>Nummer</th>
								<th>Naam</th>
								<th>Latitude</th>
								<th>Longitude</th>
							</tr>
						</thead>
						<tbody>
							{orderedCameraData[3].map(camera => (
								<tr>
									<td>{camera.id}</td>
									<td>{camera.name}</td>
									<td>{camera.lat}</td>
									<td>{camera.lng}</td>
								</tr>
							))}
						</tbody>
					</table>
					:
					<p>Geen camera's gevonden in dit bereik.</p>}
			</div>
		</div>);
}

export default ColumnData;