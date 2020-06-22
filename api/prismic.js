import PrismicLib from "prismic-javascript";
import SGDConfig from "../garitm.config";

let frontClient;

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient;
  else {
    const options = Object.assign({}, req ? { req } : {}, {
      accessToken: `${process.env.ACCESS_TOKEN}`,
    });
    return PrismicLib.client(SGDConfig.apiEndpoint, options);
  }
};
export const Prismic = PrismicLib;

export const linkResolver = (doc) => {
  if (doc.type === "page" && doc.uid === "clientes" && doc.lang === "es-co")
    return "/";
  else if (doc.type === "page" && doc.lang === "es-co") return "/" + doc.uid;
};
