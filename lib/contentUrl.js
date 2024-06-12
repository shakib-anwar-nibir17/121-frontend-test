"use-client";
const contentUrl = (params) => {
  let url = process.env.NEXT_PUBLIC_IMAGE_SERVER + params;
  return url;
};
export default contentUrl;
