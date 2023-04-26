import { useState } from "react";
import { Input } from "./molecules/input";
import Autocomplete from "./autoComplete";
import Link from "next/link";

export const Search = ({
	data,
	filterData,
	setFilterData,
	query,
	setQuery,
	showDropDown = false,
}) => {
	return (
		<div className="flex flex-row items-center justify-center rounded p-5">
			<div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-[#08C952]">
				<Input
					items={data}
					setFilterData={setFilterData}
					query={query}
					setQuery={setQuery}
				/>
				<Autocomplete />
				{showDropDown && (
					<div className="flex flex-col flex-wrap gap-2 pt-2">
						{query.length > 0 &&
							filterData?.slice(0, 5)?.map((country, index) => (
								<Link
									href={{
										pathname: `/country/${country.name.common}`,
										query: {
											cca2: country.cca2,
											cca3: country.cca3,
										},
									}}
									as={`/country/${country.name.common}`}
									key={index}
									className="px-8 py-3 w-full rounded-md bg-[#160440] text-white hover:text-gray-300 border-transparent focus:border-gray-400 placeholder-gray-500 focus:bg-gray-400 focus:ring-0 text-sm"
								>
									{country.name.common}
								</Link>
							))}
					</div>
				)}
			</div>
		</div>
	);
};
