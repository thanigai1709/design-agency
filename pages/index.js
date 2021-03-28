import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Design Agency</title>
			</Head>
			<section className="hero">
				<div className="container container--pt container--px">
					<div className="hero__text container--pt">
						<h1>A Digital Product Design Agency</h1>
						<p>We are Creative and Professional Digital Agency</p>
						<a href="" className="cta-btn">
							Get started
						</a>
					</div>
				</div>
				<div className="hero__image container--pb container--px">
					<img src="/images/hero-img.png" alt="featured image" />
				</div>
			</section>
			<section className="features">
				<div className="container container--pb container--px">
					<div className="section-tag">features</div>
					<div className="features__text">
						<h2>We are here to help you with</h2>
					</div>
				</div>
			</section>
		</>
	);
}
