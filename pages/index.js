import { Client, Prismic } from "api/prismic";
import GeneralSeo from "seo/GeneralSeo";
import Layout from "templates/Layout";
import HeroBanner from "molecules/HeroBanner";
import Introduction from "molecules/Introduction";
import Card from "molecules/Card";

function Home({ page, post }) {
  return (
    <Layout lang={post.lang} seo={<GeneralSeo lang={post.lang} />}>
      <HeroBanner {...page} />
      <Introduction page={page} post={post} lang="es-es" />
      <div className="block">
        <div className="pad">
          <div className="coat">
            {post.results.length > 0 && (
              <>
                {post.results.slice(1).map((post, index) => (
                  <Card {...post} key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  try {
    const [page, post] = await Promise.all([
      Client(req).getSingle("homepage", {
        lang: "es-es",
      }),
      Client(req).query(Prismic.Predicates.at("document.type", "blogpost"), {
        orderings: "[my.blogpost.date desc]",
        lang: "es-es",
      }),
    ]);

    return { page, post, statusCode: 200 };
  } catch (error) {
    console.log(error);
    res.statusCode = 503;
    return { page: null, post: null, statusCode: 503 };
  }
};

export default Home;
