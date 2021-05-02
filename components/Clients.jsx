import React from "react";
import Image from "next/image";

const ClientSection = () => {
	const clientImages = [
		"/images/client-logo1.png",
		"/images/client-logo2.png",
		"/images/client-logo3.png",
		"/images/client-logo4.png",
		"/images/client-logo5.png",
		"/images/client-logo6.png",
		"/images/client-logo7.png",
		"/images/client-logo8.png",
		"/images/client-logo9.png",
		"/images/client-logo10.png",
	];

	return (
		<section className="clients">
			<div className="container container--px container--py">
				<div className="clients__text">
					<div className="section-tag">BRANDS</div>
					<h2>We work with thousands of the world’s leading brands</h2>
				</div>
				<div className="clients__logo">
					{clientImages.map((client, index) => {
						return (
							<div className="clients__logo__item" id={"client_logo" + index}>
								<Image src={client} layout="responsive" width={143} height={100} />
							</div>
						);
					})}
				</div>
				<div className="clients__footer">
					<p>You're going to be in good company. We work with world's leading brands.</p>
				</div>
			</div>
		</section>
	);
};

export default ClientSection;
