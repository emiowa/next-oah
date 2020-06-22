import { Client, Prismic } from "../api/prismic";
import Layout from "../components/organism/Layout";
import LandingPage from "../components/template/LandingPage";
import PageSeo from "../components/seo/PageSeo";
import Error from "./_error";

export default class Clientes extends React.Component {
  static async getInitialProps({ req, query, res }) {
    try {
      const { uid } = query;

      const page = await Client(req).getByUID("page", `${uid}`, {
        lang: "es-co",
      });
      if (page === undefined) {
        return { post: null, statusCode: 404 };
      }
      return { page, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { page: null, statusCode: 503 };
    }
  }

  renderBody() {
    const { page } = this.props;

    return <Layout></Layout>;
  }

  render() {
    const { statusCode } = this.props;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return this.renderBody();
  }
}
