import { useRouter } from "next/router";

const Country = () => {
	const router = useRouter();
	const { country, cca2, cca3 } = router.query;
	console.log("🚀 ~ file: [country].jsx:6 ~ Country ~ router.query:", country, cca2, cca3);

	return <p>Post: {country}</p>;
};

export default Country;
