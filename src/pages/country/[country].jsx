import { useRouter } from "next/router";

const Country = () => {
	const router = useRouter();
	const { country } = router.query;

	return <p>Post: {country}</p>;
};

export default Country;
