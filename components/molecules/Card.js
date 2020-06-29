import { RichText } from "prismic-reactjs";
import GaritmicConfig from "garitmic.config.json";
import Link from "next/link";

function Card(post) {
  console.log(GaritmicConfig.root[post.lang]);
  return (
    <div className="block small-12 medium-4">
      <div className="inside-pad outline">
        <div className="block small-12 medium-6 valign">
          <div className="inside-pad">
            <Link
              href={`${GaritmicConfig.root[post.lang]}blog/[uid]`}
              as={`${GaritmicConfig.root[post.lang]}blog/${post.uid}`}
            >
              <a>
                <img src={post.data.featured_img.url} />
              </a>
            </Link>
          </div>
        </div>
        <div className="block small-12 medium-6">
          <div className="inside-pad">
            <Link
              href={`${GaritmicConfig.root[post.lang]}blog/[uid]`}
              as={`${GaritmicConfig.root[post.lang]}blog/${post.uid}`}
            >
              <a>
                <h5>{RichText.asText(post.data.title)}</h5>
              </a>
            </Link>
            <p>{RichText.asText(post.data.excerpt)}</p>
            <Link
              href={`${GaritmicConfig.root[post.lang]}blog/[uid]`}
              as={`${GaritmicConfig.root[post.lang]}blog/${post.uid}`}
            >
              <a className="button-link">{GaritmicConfig.cta[post.lang]}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
