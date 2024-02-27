import Layout from "../../components/Layout";
import Link from 'next/link';
import PlazaLibertadAnimation from "../../components/PlazaLibertadAnimation";

export default function LetsInhabitArch(){
	return (<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
						<div className='row d-flex marginDiv'>
							<div className="col-lg-6 ms-lg-5 textStyleResponsive">
								<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Habitemos la Arquitectura</h1>
								<p className="paragraphStyle fw-light">El mundo está lleno de proyectos arquitectónicos impresionantes que con sólo ver fotografías de ellos es suficiente para maravillarnos. Sin embargo, la Arquitectura es mucho más que un edificio para ser admirado, la arquitectura es creada para ser habitada.<br /><br />
								Tuve la oportunidad de viajar a diferentes países y poder visitar distintos proyectos arquitectónicos. Es simplemente increíble cómo cada uno de ellos tiene su propia esencia a pesar de hacer uso de los mismos materiales, sistemas constructivos o sistemas estructurales que muchos otros proyectos alrededor del mucho. Aquello que los hace tan únicos es lo que le proporciona el componente social y cultural. El contexto en el que se encuentran.<br /><br />
								¡Bienvenido a HABITEMOS LA ARQUITECTURA!</p>
								<div className="mt-5 text-center">
									<Link href="/coming-soon" className="text-decoration-none goToButton">Vamos!</Link>
								</div>
							</div>
							<div className='styleBackgroundBlogAnimation'>
								<PlazaLibertadAnimation className='img-fluid plazaLibertadAnimationStyle'/>
							</div>
						</div>
					</div>
				</Layout>
			</div>)
}