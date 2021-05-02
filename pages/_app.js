import "../styles/main.scss";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Header></Header>
			<Component {...pageProps} />
			<Footer />
		</Layout>
	);
}

export default MyApp;
