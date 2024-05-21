"use client";

import { SearchManufacture } from "./SearchManufacture";

export function SearchBar() {
	function handleSearch() {}
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacture />
			</div>
		</form>
	);
}
