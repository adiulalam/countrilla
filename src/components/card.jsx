import Link from "next/link";

export const Card = (props) => {
	return (
		<Link
			href={{
				pathname: `/country/${props.name.common}`,
				query: {
					cca2: props.cca2,
					cca3: props.cca3,
				},
			}}
			as={`/country/${props.name.common}`}
			className="cardAnimation flex flex-col md:h-48 justify-around min-w-full md:min-w-min border rounded-lg shadow-md md:flex-row md:max-w-xl bg-[#08C952]"
		>
			{
				// eslint-disable-next-line @next/next/no-img-element
				<img
					className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-l-lg"
					src={props?.flags.png ?? props?.flags.svg}
					alt={props?.name?.common}
					loading="lazy"
				/>
			}
			<div className="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
				<h5 className="mb-2 text-3xl font-bold tracking-tight text-black">
					{props?.name?.common}
				</h5>
				<div className="flex flex-row items-center">
					{props?.capital?.length > 0 && (
						<h3 className="mb-2 text-lg tracking-tight text-black">{`Capital: ${props?.capital?.[0]}`}</h3>
					)}
				</div>
				<div>
					<div className="flex flex-row items-center justify-between mb-2 gap-2">
						<h3 className="text-sm tracking-tight text-black">
							<b>Country Code:</b> {props?.cca2 ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>Population:</b> {props?.population ?? "unknown"}
						</h3>
						<h3 className="text-sm tracking-tight text-black">
							<b>UN Member:</b> {`${props?.unMember}` ?? "unknown"}
						</h3>
					</div>
				</div>
			</div>
		</Link>
	);
};
