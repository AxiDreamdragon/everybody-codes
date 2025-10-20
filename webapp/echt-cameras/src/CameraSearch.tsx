import type React from "react";
import { useSearch } from "./SearchContext";

function CameraSearch() {
	const { setSearchQuery } = useSearch();

	return (
		<div className="camera-search">
			<label>
				Zoek een camera:<br />
				<input type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
			</label>
		</div>
	)
}

export default CameraSearch;