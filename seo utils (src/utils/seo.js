export const setSEO = ({ title, description, image, url }) => {
  document.title = title;

  const setMeta = (name, content, property = false) => {
    let element = document.querySelector(
      property ? `meta[property='${name}']` : `meta[name='${name}']`
    );

    if (!element) {
      element = document.createElement("meta");
      if (property) element.setAttribute("property", name);
      else element.setAttribute("name", name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  setMeta("description", description);
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:image", image, true);
  setMeta("og:url", url, true);
  setMeta("twitter:card", "summary_large_image");
};
