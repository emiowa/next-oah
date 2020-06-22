import { Client, Prismic } from "../api/prismic";
import Layout from "../components/organism/Layout";
import LandingPage from "../components/template/LandingPage";
import HomeSeo from "../components/seo/HomeSeo";

export default class Clientes extends React.Component {
  static async getInitialProps({ req, res }) {
    try {
      let slug = "clientes";

      const page = await Client(req).getByUID("page", `${slug}`, {
        lang: "es-co",
      });

      if (page == undefined) {
        res.statusCode = 404;
        return {
          page: null,
        };
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
