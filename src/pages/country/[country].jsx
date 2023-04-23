import { useRouter } from "next/router";

const Country = () => {
	const router = useRouter();
	const { country } = router.query;
	console.log("🚀 ~ file: index.js:6 ~ Post ~ router.query:", router.query);

	return <p>Post: {country}</p>;
};

export default Country;
