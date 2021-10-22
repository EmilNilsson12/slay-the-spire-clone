import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Car({ car }) {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>
					A {car.color} {car.id}
				</title>
			</Head>
			<h1>Car: {id}</h1>
			<p>model: {car.id}</p>
			<p>color: {car.color}</p>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const req = await fetch(`http://localhost:3000/${params.id}.json`);
	const data = await req.json();

	return {
		props: { car: data },
	};
}

// -------- Either use getServerSideProps OR getStaticProps AND getStaticPaths --------

// export async function getStaticProps({ params }) {
// 	const req = await fetch(`http://localhost:3000/${params.id}.json`);
// 	const data = await req.json();

// 	return {
// 		props: { car: data },
// 	};
// }

// export async function getStaticPaths() {
// 	const req = await fetch(`http://localhost:3000/cars.json`);
// 	const data = await req.json();

// 	const paths = data.map((car) => {
// 		return { params: { id: car } };
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }
