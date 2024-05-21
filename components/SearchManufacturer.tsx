"use client";

import { SearchManufacturerProps } from "@/types";
import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export function SearchManufacturer({
	manufacturer,
	setManufacturer,
}: SearchManufacturerProps) {
	const [query, setQuery] = useState("");

	return (
		<div className="search-manufacturer">
			<Combobox>
				<div className="relative w-full">
					<ComboboxButton className="absolute top-[14px]">
						<Image
							src="car-logo.svg"
							width={20}
							height={20}
							alt="car logo"
							className="ml-4"
						/>
					</ComboboxButton>
					<ComboboxInput
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</Combobox>
		</div>
	);
}
