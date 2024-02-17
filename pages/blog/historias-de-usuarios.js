import Layout from "../../components/Layout";
import Link from 'next/link';
import NakaginCapsuleAnimation from "../../components/NakaginCapsuleAnimation";

export default function UserStories(){
	return (<div>
				<Layout>
				<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
					<div className='row d-flex'>
						<div className="col-lg-6 ms-lg-5 textStyleResponsive">
							<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Historias de usuarios</h1>
							<p className="paragraphStyle">Hay espacios que visitamos una sola vez y puede llegar a impresionarnos su escala, sus visuales, el uso de los materiales, su distribución espacial, entre muchos aspectos más. Sin embargo, las impresiones que tienen las personas que habitan recurrentemente estos espacios pueden ser diferentes, incluso más profundas y detalladas.<br /><br />
							Cuando el habitar un espacio se convierte en parte de tu rutina diaria, empiezas a identificar sus virtudes y defectos, empiezas a adquirir un gusto por pasar más tiempo en un área que en otra, estableces las actividades que prefieres realizar en cada uno de los lugares que componen el edificio.<br /><br />
							¡Bienvenidos a HISTORIAS DE LOS USUARIOS!</p>
							<div className="mt-5 text-center">
								<Link href="/coming-soon" className="text-decoration-none goToButton">Vamos!</Link>
							</div>
						</div>
						<div className='styleBackgroundBlogAnimation'>
							<NakaginCapsuleAnimation className='img-fluid nakaginCapsuleAnimationStyle'/>
						</div>
					</div>
				</div>
				</Layout>
			</div>)
}