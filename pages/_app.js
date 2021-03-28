import "../styles/main.scss";
import Layout from "../components/Layout";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Header></Header>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
