import { useEffect, useState } from "react";

export const Input = ({ items, setFilterData, query, setQuery }) => {
	useEffect(() => {
		const filteredItem =
			query === ""
				? items
				: items?.filter(
						(item) =>
							item.name.common
								.toLowerCase()
								.replace(/\s+/g, "")
								.includes(query.toLowerCase().replace(/\s+/g, "")) &&
							item.cca2 !== "NZ"
				  );

		setFilterData(query === "" ? [] : filteredItem);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<div className="relative">
			<div className="absolute flex items-center ml-2 h-full">
				<svg
					className="w-4 h-4 fill-black text-primary-gray-dark"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
				</svg>
			</div>

			<input
				onChange={(event) => setQuery(event.target.value)}
				value={query}
				type="text"
				placeholder="Search by country name..."
				className="px-8 py-3 w-full rounded-md bg-white border-transparent focus:border-gray-400 placeholder-gray-500 focus:bg-gray-400 text-black focus:text-white focus:ring-0 text-sm"
			/>
		</div>
	);
};
