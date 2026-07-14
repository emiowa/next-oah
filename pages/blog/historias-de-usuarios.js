import Layout from "../../components/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NakaginCapsuleAnimation = dynamic(
	() => import("../../components/NakaginCapsuleAnimation"),
	{ ssr: false }
);

export default function UserStories(){
	return (
		<Layout>
			<div className="container py-5 mt-5">
				<div className="row align-items-center gy-5">
					{/* Text column */}
					<div className="col-12 col-lg-6 order-2 order-lg-1">
						<h1 className="display-lg-2 display-4">
							Historias de usuarios
						</h1>
						<p className="fw-light lh-lg">
							Hay espacios que visitamos una sola vez y puede llegar a
							impresionarnos su escala, sus visuales, el uso de los
							materiales, su distribución espacial, entre muchos aspectos
							más. Sin embargo, las impresiones que tienen las personas que
							habitan recurrentemente estos espacios pueden ser diferentes,
							incluso más profundas y detalladas.
							<br /><br />
							Cuando el habitar un espacio se convierte en parte de tu rutina
							diaria, empiezas a identificar sus virtudes y defectos, empiezas
							a adquirir un gusto por pasar más tiempo en un área que en otra,
							estableces las actividades que prefieres realizar en cada uno de
							los lugares que componen el edificio.
							<br /><br />
							¡Bienvenidos a HISTORIAS DE LOS USUARIOS!
						</p>
						<div className="mt-4 text-center text-lg-start">
							<Link href="/coming-soon" className="text-decoration-none goToButton">
								Vamos!
							</Link>
						</div>
					</div>

					{/* Animation column */}
					<div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
						<div style={{ width: "100%", maxWidth: "600px", flexShrink: 0 }}>
							<NakaginCapsuleAnimation />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}