import Layout from "../../components/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const PlazaLibertadAnimation = dynamic(
	() => import("../../components/PlazaLibertadAnimation"),
	{ ssr: false }
);

export default function LetsInhabitArch(){
	return (
		<Layout>
			<div className="container" style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
				<div className="row align-items-center gy-5">
					<div className="col-12 col-lg-6 order-2 order-lg-1">
						<h1 className="display-lg-2 display-4">
							Habitemos la Arquitectura
						</h1>
						<p className="fw-light lh-lg">
							El mundo está lleno de proyectos arquitectónicos impresionantes
							que con sólo ver fotografías de ellos es suficiente para
							maravillarnos. Sin embargo, la Arquitectura es mucho más que un
							edificio para ser admirado, la arquitectura es creada para ser
							habitada.
							<br /><br />
							Tuve la oportunidad de viajar a diferentes países y poder
							visitar distintos proyectos arquitectónicos. Es simplemente
							increíble cómo cada uno de ellos tiene su propia esencia a
							pesar de hacer uso de los mismos materiales, sistemas
							constructivos o sistemas estructurales que muchos otros
							proyectos alrededor del mucho. Aquello que los hace tan únicos
							es lo que le proporciona el componente social y cultural. El
							contexto en el que se encuentran.
							<br /><br />
							¡Bienvenido a HABITEMOS LA ARQUITECTURA!
						</p>
						<div className="mt-4 text-center text-lg-start">
							<Link href="/coming-soon" className="text-decoration-none goToButton">
								Vamos!
							</Link>
						</div>
					</div>

					<div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
						<div style={{ width: "100%", maxWidth: "500px" }}>
							<PlazaLibertadAnimation />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}