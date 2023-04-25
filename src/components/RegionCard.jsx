import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const RegionCard = ({ region }) => {
	const router = useRouter();

	useEffect(() => {
		const region = JSON.parse(localStorage.getItem("region")) ?? {};

		if (!_.isEmpty(region)) {
			router.push(`/region/${region.value}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickRegion = () => {
		window.localStorage.setItem("region", JSON.stringify(region));
		router.push(`/region/${region.value}`);
	};

	return (
		<button
			onClick={onClickRegion}
			className="cardAnimation flex flex-col md:h-56 justify-around min-w-full md:min-w-min border rounded-lg shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
		>
			<div
				style={{ backgroundImage: `url(${region.src})` }}
				className="flex items-center bg-cover flex-col p-4 leading-normal w-full md:w-56 h-72 md:h-full "
			>
				<h5 className="p-2 text-3xl font-bold tracking-tight text-black backdrop-blur-xl">
					{region.name}
				</h5>
			</div>
		</button>
	);
};
