import { region } from "@/utils/constMap";
import { RegionCard } from "@/components/regionCard";
import Head from "next/head";

export default function Home() {
	return (
		<div className="flex md:h-screen justify-center items-center bg-[#160440]">
			<Head>
				<title>Countrilla</title>
			</Head>
			<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
				{region.map((reg, index) => (
					<RegionCard region={reg} key={index} />
				))}
			</div>
		</div>
	);
}
