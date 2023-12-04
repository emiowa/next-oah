import Layout from "../../components/Layout";
import PortaFiraAnimation from "../../components/PortaFiraAnimation";

export default function UserStories(){
	return (<div>
				<Layout>
				<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
					<div className='row d-flex'>
						<div className="col-lg-6 ms-lg-5 textStyleResponsive">
							<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">User stories</h1>
							<p className="paragraphStyle">There are spaces that we visit only once and its scale, its visuals, the use of materials, its spatial distribution, among many other aspects, can impress us. Nevertheless, the impressions that the people who recurrently inhabit these spaces have may be different, even deeper and more detailed.<br /><br />
							When inhabiting a space becomes part of your daily routine, you begin to identify its virtues and defects, you begin to acquire a taste for spending more time in some areas than in others, you establish activities you prefer to do in each of the places that composing the building.<br /><br />
							Welcome to USER STORIES!</p>
							<div className="mt-5 text-center">
								<button className="goToButton">Go to USER STORIES</button>
							</div>
						</div>
						<div className="styleBackgroundBlogAnimation">
							<PortaFiraAnimation className='img-fluid position-relative portaFiraAnimationStyle'/>
						</div>
					</div>
				</div>
				</Layout>
			</div>)
}