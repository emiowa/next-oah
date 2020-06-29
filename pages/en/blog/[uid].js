import { Client, Prismic } from "api/prismic";
import Layout from "templates/Layout";
import { RichText } from "prismic-reactjs";
import SingleSeo from "lib/seo/SingleSeo";

function Post({ post }) {
  return (
    <Layout lang={post.lang} seo={<SingleSeo {...post} />}>
      <div className="feature-imagen">
        <img width="1500" height="750" src={post.data.featured_img.url} />{" "}
      </div>
      <div className="container">
        <h1>{RichText.asText(post.data.title)}</h1>
        {RichText.render(post.data.content)}
      </div>
    </Layout>
  );
}

Post.getInitialProps = async ({ req, res, query }) => {
  let uid = [query.uid];
  let type = "blogpost";

  try {
    const post = await Client(req).getByUID(`${type}`, `${uid}`, {
      lang: "en-us",
    });

    return { post, statusCode: 200 };
  } catch (error) {
    console.log(error);
    res.statusCode = 503;
    return { post: null, statusCode: 503 };
  }
};

export default Post;
