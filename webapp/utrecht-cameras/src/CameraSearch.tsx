import type React from "react";

function CameraSearch() {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		//TODO: It would be better to make a provider out of this
		window.dispatchEvent(new CustomEvent('search', { detail: e.target.value }))
	}

	return (
		<div>
			<label>
				Zoek een camera:<br />
				<input type="text" onChange={onSearch} />
			</label>
		</div>
	)
}

export default CameraSearch;