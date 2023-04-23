import { useState } from "react";
import { Input } from "./molecules/input";
import Autocomplete from "./autoComplete";

export const Search = ({ data }) => {
	const [filterData, setFilterData] = useState([]);

	return (
		<div className="flex flex-row items-center justify-center rounded p-5">
			<div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-[#08C952]">
				<Input items={data} setFilterData={setFilterData} />
				<Autocomplete />
				<div className="flex flex-col flex-wrap gap-2 pt-2">
					{filterData?.slice(0, 5)?.map((country, index) => (
						<div
							key={index}
							className="px-8 py-3 w-full rounded-md bg-[#d2e054] border-transparent focus:border-gray-400 placeholder-gray-500 focus:bg-[#EDCF6B] focus:ring-0 text-sm"
						>
							{country.name.common}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
