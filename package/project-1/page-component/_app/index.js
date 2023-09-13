import Head from 'next/head';
import Layout from './NoLayout/index'


function MyApp({
	Component, ...rest
}) {
	return (
		<div>
			<Head>
				<title>Uni Cards</title>
			</Head>
			<Layout >
				<Component />
			</Layout>
		</div>

	);
}

export default MyApp;
