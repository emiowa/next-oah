import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Post({ allPostsData }) {
    return (
      <Layout>
        <div className='container-fluid'>
			<div className='row mt-5 pt-4 mx-xs-0 mx-lg-5 mb-5 marginPostsHomePage'>
                <div className='d-flex flex-column justify-content-center align-items-center px-xs-0 px-lg-5'>
                    <h1 className="display-5 text-center mt-5 mb-3">Hablemos de Arquitectura</h1>
                    <p className='text-center mx-xs-0 mx-lg-5 px-xs-0 px-lg-5 mb-5 fw-light'>En mi diario vivir he encontrado situaciones que me han hecho preguntar y reflexionar sobre la forma en la que estamos diseñando nuestras ciudades. ¿Estamos comprometidos con mejorar o seguimos cometiendo los mismos errores del pasado?</p>
                    <div className="mb-5 pb-5 text-center">
                      <Link href="/blog/hablemos-de-arquitectura" className="text-decoration-none readMoreLTAAButton">Cuéntame más!</Link>
                    </div>
                </div>
                    {allPostsData
                        .sort((a, b) => b.number - a.number)
                        .map(({ title, summary, image, id }) => (
                        <div key={id} className='col-12 col-lg-4 py-3'>
                          <Link href={`/blog/hablemos-de-arquitectura/${id}`} className='card h-100 shadow p-3 mb-2 bg-body rounded cardHover'>
                            <Image className='img-fluid cardImage'
                                  width= '600'
                                  height= '300'
                                  src= {image}
                              />
                            <p className='card-title text-center fs-4 fw-light mb-1 mt-5 cardTitle'>{title}</p>
                            <p className='card-text text-center fst-italic fw-light mb-2'>{summary}</p>
                          </Link>
                        </div>
                    ))}
            </div>
        </div>
      </Layout>
    );
  }