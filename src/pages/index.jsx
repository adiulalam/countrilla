import { region } from "@/utils/constMap";
import { RegionCard } from "@/components/regionCard";

export default function Home() {
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
				{region.map((reg, index) => (
					<RegionCard region={reg} key={index} />
				))}
			</div>
		</div>
	);
}
