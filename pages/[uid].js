import { Client, Prismic } from "api/prismic";
import Layout from "templates/Layout";
import { RichText } from "prismic-reactjs";

function Pages({ pages }) {
  return (
    <Layout>
      <div className="container">
        <h1>{RichText.asText(pages.data.title)}</h1>
        {RichText.render(pages.data.content)}
      </div>
    </Layout>
  );
}

Pages.getInitialProps = async ({ req, res, query }) => {
  let uid = [query.uid];
  let type = "pages";

  try {
    const pages = await Client(req).getByUID(`${type}`, `${uid}`);

    return { pages, statusCode: 200 };
  } catch (error) {
    res.statusCode = 503;
    console.log(error);
    return { pages: null, statusCode: 503 };
  }
};

export default Pages;
