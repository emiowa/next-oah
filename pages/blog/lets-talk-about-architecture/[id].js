import Layout from '../../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
// mt-5 pt-4 mx-0 px-lg-5 marginDivPosts summaryMarginPosts
export default function Post({ postData }) {
    function LetsTalkAboutArchitectureLink(){}
    return (
      <Layout>
        <div className='container-fluid'>
					<div className='row marginDivPosts'>
            <div className='col-12 mt-5 pt-4'>
              <div className='display-4 text-center mt-5 mb-2'>
                {postData.title}
              </div>
              <div className='fs-4 fw-light fst-italic text-center summaryMarginPosts'>
                {postData.summary}
              </div>
              <div className='d-flex justify-content-center align-items-center mt-3'>
                <Image className='img-fluid'
                  width= '600'
                  height= '300'
                  src= {postData.image}
                />
              </div>
              <div className='paragraphStyle textMarginPosts mt-5'>
                {postData.text}
              </div>
              <div className='textMarginPosts fs-5 fst-italic text-center mt-5'>
                {postData.question}
              </div>
              <p className='fs-6 text-center mt-5'>LET'S TALK ABOUT ARCHITECTURE!</p>
              <div className="mb-5 pb-5 text-center">
									<button className="goToButton" onClick={LetsTalkAboutArchitectureLink}>
										<Link href="/blog/lets-talk-about-architecture" className="linkStyle">Go Back!</Link>
									</button>
							</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

