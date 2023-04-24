import Autocomplete from "@/components/autoComplete";
import { region } from "@/utils/constMap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import _ from "lodash";
import { RegionCard } from "@/components/regionCard";

export default function Home() {
	return (
		<div className="flex h-screen justify-center items-center">
			{/* <Autocomplete /> */}
			<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
				{region.map((reg, index) => (
					<RegionCard region={reg} key={index} />
				))}
			</div>
		</div>
	);
}
