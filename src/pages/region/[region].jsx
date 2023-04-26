import { Card } from "@/components/card";
import { Error } from "@/components/error";
import { Search } from "@/components/search";
import { CardSkeleton } from "@/components/skeletons/cardSkeleton";
import { fetcher } from "@/services/fetcher";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Region = () => {
	const router = useRouter();
	const { region } = router.query;
	const [filterData, setFilterData] = useState([]);
	const [query, setQuery] = useState("");

	const { data, error, isLoading } = useSWR(
		region ? `https://restcountries.com/v3.1/region/${region}` : null,
		region ? fetcher : null
	);

	useEffect(() => {
		setFilterData(data);
	}, [data]);

	if (error) {
		return <Error />;
	}

	if (isLoading) {
		return <CardSkeleton array={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />;
	}

	return (
		<div className="bg-[#160440] min-w-[320px]">
			<Head>
				<title>Countrilla {region ? `- ${region.toUpperCase()}` : ""}</title>
			</Head>
			<Search
				data={data}
				filterData={filterData}
				setFilterData={setFilterData}
				query={query}
				setQuery={setQuery}
			/>
			<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
				{query.length > 0
					? filterData?.map((country, index) => <Card {...country} key={index} />)
					: data
							?.filter((item) => item.cca2 !== "NZ")
							?.map((country, index) => <Card {...country} key={index} />)}
			</div>
		</div>
	);
};

export default Region;
