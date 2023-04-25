import { BsChevronExpand, BsCheck2 } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { region } from "@/utils/constMap";
import { useRouter } from "next/router";
import _ from "lodash";

export default function Autocomplete() {
	const router = useRouter();
	const [query, setQuery] = useState("");
	const [selectedRegion, setSelectedRegion] = useState({});

	const filteredItem =
		query === ""
			? region
			: region.filter((item) =>
					item.name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	useEffect(() => {
		const region = JSON.parse(localStorage.getItem("region")) ?? {};
		setSelectedRegion(region);
	}, []);

	const onChangeRegion = (selectedRegion) => {
		setSelectedRegion(selectedRegion);
		window.localStorage.setItem("region", JSON.stringify(selectedRegion));
		router.push(`/region/${selectedRegion.value}`);
	};

	return (
		<Combobox value={selectedRegion} onChange={onChangeRegion}>
			<div className="relative mt-1">
				<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
					<Combobox.Input
						className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
						displayValue={(item) => item.name}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Choose a region.."
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<BsChevronExpand className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{filteredItem.length === 0 && query !== "" ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								Nothing found.
							</div>
						) : (
							filteredItem.map((item, index) => (
								<Combobox.Option
									key={index}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? "bg-[#08C952] text-white" : "text-gray-900"
										}`
									}
									value={item}
								>
									{({ selectedRegion, active }) => (
										<>
											<span
												className={`block truncate ${
													selectedRegion ? "font-medium" : "font-normal"
												}`}
											>
												{item.name}
											</span>
											{selectedRegion ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? "text-white" : "text-teal-600"
													}`}
												>
													<BsCheck2
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}
