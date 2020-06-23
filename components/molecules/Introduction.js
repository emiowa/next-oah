import Link from "next/link";
import { RichText } from "prismic-reactjs";
import GaritmicConfig from "garitmic.config.json";

function Introduction(props) {
  console.log(props);
  return (
    <div className="coat">
      <div className="block small-12 medium-6">
        <div className="pad">
          <h3>{RichText.asText(props.page.data.section_1_title)}</h3>
          <p>{RichText.asText(props.page.data.section_1_description)}</p>
          <a
            href="https://oaharchitecture.com/uncategorized/limites-de-una-vivienda/"
            class="button-link"
          >
            {GaritmicConfig.cta[props.post.results[0].lang]}
          </a>
          <h4>{RichText.asText(props.page.data.section_2_title1)}</h4>
          <p>{RichText.asText(props.page.data.section_2_description)}</p>
          <a
            href="https://oaharchitecture.com/uncategorized/limites-de-una-vivienda/"
            class="button-link"
          >
            {GaritmicConfig.cta[props.post.results[0].lang]}
          </a>
        </div>
      </div>
      <div className="block small-12 medium-6">
        <div className="pad">
          <h3>{RichText.asText(props.page.data.section_3_title)}</h3>

          <div className="coat simple-outline">
            <div className="block small-12 medium-6 valign">
              <div className="inside-pad">
                <a href="">
                  <img src={props.post.results[0].data.featured_img.url} />
                </a>
              </div>
            </div>
            <div className="block small-12 medium-6">
              <div className="inside-pad">
                <a>
                  <h5>{RichText.asText(props.post.results[0].data.title)}</h5>
                </a>
                <p>{RichText.asText(props.post.results[0].data.excerpt)}</p>
                <a
                  href="https://oaharchitecture.com/uncategorized/limites-de-una-vivienda/"
                  class="button-link"
                >
                  {GaritmicConfig.cta[props.post.results[0].lang]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
