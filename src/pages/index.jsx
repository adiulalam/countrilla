import Autocomplete from "@/components/autoComplete";
import { region } from "@/utils/constMap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import _ from "lodash";

export default function Home() {
	return (
		<div className="flex h-screen justify-center items-center">
			<Autocomplete />
		</div>
	);
}
