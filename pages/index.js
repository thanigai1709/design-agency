import Head from "next/head";
import Image from "next/image";

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
					<div>
						<Image src="/images/hero-img.png" quality="85" layout="responsive" width={1187} height={900} />
					</div>
				</div>
			</section>
			<section className="features">
				<div className="container container--pb container--px">
					<div className="section-tag">features</div>
					<div className="features__text">
						<h2>We are here to help you with</h2>
					</div>
					<div className="feature-grid">
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon1.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">Grow your business</div>
							<div className="feature-item__descrp">
								The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon2.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">Drive more sales</div>
							<div className="feature-item__descrp">
								A potential customer, once lost, is hard to retain back. But keeping some critical factors in mind, we can, for sure, use these loyalty programs as customer
								retention tools.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon3.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">Handle by Expert</div>
							<div className="feature-item__descrp">We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon4.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">UX Research</div>
							<div className="feature-item__descrp">
								UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon4.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">Business Audit</div>
							<div className="feature-item__descrp">
								An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon6.svg" width={50} height={50} layout="intrinsic" />
							</div>
							<div className="feature-item__title">Data tracking</div>
							<div className="feature-item__descrp">The hardware and software, which when used together allows you to know where something is at any point in time</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
