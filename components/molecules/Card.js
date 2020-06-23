import { RichText } from "prismic-reactjs";
import GaritmicConfig from "garitmic.config.json";
import Link from "next/link";

function Card(post) {
  return (
    <div class="block small-12 medium-4">
      <div class="inside-pad outline">
        <div class="block small-12 medium-6 valign">
          <div class="inside-pad">
            <Link href="/blog/[uid]" as={`/blog/${post.uid}`}>
              <a href="/limites-de-una-vivienda/">
                <img src={post.data.featured_img.url} />
              </a>
            </Link>
          </div>
        </div>
        <div class="block small-12 medium-6">
          <div class="inside-pad">
            <a href="https://oaharchitecture.com/uncategorized/limites-de-una-vivienda/">
              <h5>{RichText.asText(post.data.title)}</h5>
            </a>
            <p>{RichText.asText(post.data.excerpt)}</p>
            <a
              href="https://oaharchitecture.com/uncategorized/limites-de-una-vivienda/"
              class="button-link"
            >
              {GaritmicConfig.cta[post.lang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
