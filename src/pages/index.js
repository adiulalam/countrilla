import Autocomplete from "@/components/autoComplete";
import { region } from "@/utils/constMap";
import { useEffect, useState } from "react";

export default function Home() {
	const [selectedRegion, setSelectedRegion] = useState({});

	useEffect(() => {
		setSelectedRegion(JSON.parse(localStorage.getItem("region")) ?? {});
	}, []);

	const onChangeEvent = (selectedItem) => {
		setSelectedRegion(selectedItem);
		window.localStorage.setItem("region", JSON.stringify(selectedItem));
	};

	return (
		<Autocomplete items={region} selectedItem={selectedRegion} onChangeEvent={onChangeEvent} />
	);
}
