import type { Camera } from "./Camera"

type Props = {
	cameras: Camera[];
	header: string;
}

function CameraColumn({ cameras, header }: Props) {
	return (
		<div>
			{header}
			{cameras.length > 0 ?
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
						{cameras.map(camera => (
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
	)
}

export default CameraColumn;