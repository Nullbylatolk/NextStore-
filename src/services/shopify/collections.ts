import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { smart_collections } = await response.json();
    const transformedCollections = smart_collections.map(
      (item: collections) => {
        return {
          id: item.id,
          title: item.title,
          handle: item.handle,
        };
      }
    );
    return transformedCollections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionsProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } =  await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
