import Layout from "../../components/Layout";
import PortaFiraAnimation from "../../components/PortaFiraAnimation";

export default function UserStories(){
	return (<div>
				<Layout>
				<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
					<div className='row d-flex'>
						<div className="col-lg-6 ms-lg-5 textStyleResponsive">
							<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">User stories</h1>
							<p className="paragraphStyle">There are spaces that we visit only once, and their scale, visuals, use of materials, spatial distribution, among many other aspects, can be impressive. However, the impressions of people who inhabit these spaces regularly can be different, even more profound and detailed.<br /><br />
							When inhabiting a space becomes part of your daily routine, you begin to identify its virtues and flaws. You develop a preference for spending more time in one area than another and establish the activities you prefer to do in each of the places that make up the building.<br /><br />
							Welcome to USER STORIES!</p>
							<div className="mt-5 text-center">
								<button className="goToButtonUS">Let's Go!</button>
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