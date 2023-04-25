import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import _ from "lodash";
import { Search } from "@/components/search";
import { CountryCard } from "@/components/countryCard";

const Country = () => {
	const router = useRouter();
	const [region, setRegion] = useState({});
	const { country, cca2, cca3 } = router.query;
	const [filterData, setFilterData] = useState([]);
	const [query, setQuery] = useState("");

	const { data, error, isLoading } = useSWR(
		cca2 || cca3
			? `https://restcountries.com/v3.1/alpha/${cca2 ?? cca3}`
			: country
			? `https://restcountries.com/v3.1/name/${country}`
			: null,
		country || cca2 || cca3 ? fetcher : null
	);

	const { data: regionData, error: regionError } = useSWR(
		!_.isEmpty(region) ? `https://restcountries.com/v3.1/region/${region.value}` : null,
		!_.isEmpty(region) ? fetcher : null
	);

	useEffect(() => {
		const region = JSON.parse(localStorage.getItem("region")) ?? {};
		setRegion(region);
	}, []);

	if (error || regionError) {
		return <div>...Error...</div>;
	}

	if (isLoading) {
		return <div>...loading...</div>;
	}

	return (
		<>
			<Search
				data={regionData}
				filterData={filterData}
				setFilterData={setFilterData}
				query={query}
				setQuery={setQuery}
				showDropDown={true}
			/>
			{data?.length > 0 && (
				<div className="flex justify-center items-center">
					<CountryCard {...data[0]} />{" "}
				</div>
			)}
		</>
	);
};

export default Country;
