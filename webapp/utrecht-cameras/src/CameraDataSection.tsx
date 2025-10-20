import { useState } from "react";
import type { Camera } from "./Camera"
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSearch } from "./SearchContext";

type Props = {
	cameras: Camera[];
	header: string;
}

function CameraDataSection({ cameras, header }: Props) {
	const [folded, setFolded] = useState<boolean>(true);
	const { searchQuery } = useSearch();

	return (
		<div>
			<div className="section-data-header" onClick={() => setFolded(current => !current)}>
				<MdOutlineArrowForwardIos className="arrow" style={{
					rotate: folded ? undefined : '90deg'
				}} />
				<h2>{header}</h2>
			</div>
			<div
				className="section-data" style={{
					display: folded ? 'none' : undefined
				}}>
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
							{cameras.map((camera, i) => {
								if (!searchQuery || camera.name.toLowerCase().includes(searchQuery.toLowerCase())) {
									return (<tr key={i}>
										<td>{camera.id}</td>
										<td>{camera.name}</td>
										<td>{camera.lat}°</td>
										<td>{camera.lng}°</td>
									</tr>);
								} else {
									return null;
								}
							})}
						</tbody>
					</table>
					:
					// TODO: case for when search query results in no entries
					<p>Geen camera's gevonden in dit bereik.</p>}
			</div>
		</div>
	)
}

export default CameraDataSection;