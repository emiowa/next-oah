import Layout from "../../components/Layout";
import Link from 'next/link';
import PortaFiraAnimation from "../../components/PortaFiraAnimation";

export default function LetsTalkAboutArch(){
	return (<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
						<div className='row d-flex marginDiv'>
							<div className="col-lg-6 ms-lg-5 textStyleResponsive">
								<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Hablemos de Arquitectura</h1>
								<p className="paragraphStyle fw-light">En mi diario vivir he encontrado situaciones que me han hecho preguntar y reflexionar sobre la forma en la que estamos diseñando nuestras ciudades ¿Estamos comprometidos con mejorar o seguimos cometiendo los mismos errores del pasado?<br /><br />
								Nuestro objetivo como Arquitectos debería ser llegar al equilibrio entre la estética y la funcionalidad, sin embargo, hemos caído muchas veces en el error de sacrificar una por la otra, a veces de forma inocente y sin ser muy conscientes de las repercusiones que estas decisiones pueden causar en las personas que habitarán estos espacios.<br /><br />
								¡Bienvenido a HABLEMOS DE LA ARQUITECTURA!</p>
								<div className="mt-5 text-center">
									<Link href="/blog/hablemos-de-arquitectura-home" className="text-decoration-none goToButton">Vamos!</Link>
								</div>
							</div>
							<div className='styleBackgroundBlogAnimation'>
								<PortaFiraAnimation className='img-fluid portaFiraAnimationStyle'/>
							</div>
						</div>
					</div>
				</Layout>
			</div>)
}