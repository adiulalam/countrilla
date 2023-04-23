import { Search } from "@/components/search";
import { fetcher } from "@/services/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Region = () => {
	const router = useRouter();
	const { region } = router.query;

	const { data, error, isLoading } = useSWR(
		region ? `https://restcountries.com/v3.1/region/${region}` : null,
		region ? fetcher : null
	);

	if (error) {
		return <div>...Error...</div>;
	}

	return (
		<div className="bg-[#160440] min-w-[320px]">
			<Search data={data} />
		</div>
	);
};

export default Region;
