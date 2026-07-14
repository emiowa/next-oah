import Layout from "../../components/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const PortaFiraAnimation = dynamic(
	() => import("../../components/PortaFiraAnimation"),
	{ ssr: false }
);

export default function LetsTalkAboutArch(){
	return (
		<Layout>
			<div className="container" style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
				<div className="row align-items-center gy-5">
					<div className="col-12 col-lg-6 order-2 order-lg-1">
						<h1 className="display-lg-2 display-4">
							Hablemos de Arquitectura
						</h1>
						<p className="fw-light lh-lg">
							En mi diario vivir he encontrado situaciones que me han hecho
							preguntar y reflexionar sobre la forma en la que estamos
							diseñando nuestras ciudades ¿Estamos comprometidos con mejorar
							o seguimos cometiendo los mismos errores del pasado?
							<br /><br />
							Nuestro objetivo como Arquitectos debería ser llegar al
							equilibrio entre la estética y la funcionalidad, sin embargo,
							hemos caído muchas veces en el error de sacrificar una por la
							otra, a veces de forma inocente y sin ser muy conscientes de
							las repercusiones que estas decisiones pueden causar en las
							personas que habitarán estos espacios.
							<br /><br />
							¡Bienvenido a HABLEMOS DE LA ARQUITECTURA!
						</p>
						<div className="mt-4 text-center text-lg-start">
							<Link href="/blog/hablemos-de-arquitectura-home" className="text-decoration-none goToButton">
								Vamos!
							</Link>
						</div>
					</div>

					<div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
						<div style={{ width: "100%", maxWidth: "500px" }}>
							<PortaFiraAnimation />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}