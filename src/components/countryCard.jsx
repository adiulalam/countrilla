export const CountryCard = (props) => {
	const nativeNameCommon = Object.values(props?.name?.nativeName)?.[0]?.common;
	const nativeNameOffical = Object.values(props?.name?.nativeName)?.[0]?.official;
	return (
		<div className="cardAnimation flex flex-col justify-around md:h-60 min-w-full md:min-w-min border rounded-lg shadow-md md:flex-row md:max-w-4xl bg-[#08C952]">
			{
				// eslint-disable-next-line @next/next/no-img-element
				<img
					className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-72 md:rounded-none md:rounded-l-lg"
					src={props?.flags.png ?? props?.flags.svg}
					alt={props?.name?.common}
					loading="lazy"
				/>
			}
			<div className="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
				<h5 className="text-3xl font-bold tracking-tight text-black">
					{props?.name?.common} ({props?.flag})
				</h5>
				<div className="flex flex-row items-center">
					<h3 className="text-base tracking-tight text-black">
						<b>Offical Name:</b> {props?.name?.official}
					</h3>
				</div>
				<div className="flex flex-row items-center">
					<h3 className="text-base tracking-tight text-black">
						<b>Native Name(s):</b> {nativeNameCommon ? nativeNameCommon : ""}
						{nativeNameOffical ? ` - ${nativeNameOffical}` : ""}
					</h3>
				</div>
				{props?.translations?.jpn?.common && (
					<div className="flex flex-row items-center">
						<h3 className="text-base tracking-tight text-black">
							<b>Name in Japanese:</b> {props?.translations?.jpn?.common}
							{" or "}
							{props?.translations?.jpn?.official}
						</h3>
					</div>
				)}
				{props?.population && props?.area && (
					<div className="flex flex-row items-center">
						<h3 className="text-base tracking-tight text-black">
							<b>Population Density:</b>{" "}
							{`${(props?.population / props?.area).toFixed(2)}/km`}&sup2;
						</h3>
					</div>
				)}
			</div>
		</div>
	);
};
