import appInit from "./modules/app.js";
import { manageLocation, decoderLanguages } from "./modules/helpers/index.js";

document.addEventListener("DOMContentLoaded", () => {
  let { getQuery } = manageLocation();
  let { decoder } = decoderLanguages();
  let initJs = "",
    initCss = `body{\n   color: white;\n   background-color: black;\n   display: grid;\n   place-items: center;\n   height: 100vh;\n   overflow: hidden;\n};`,
    initHtml = "<h1>Jesús Web</h1>";

    if (getQuery("data").data) {
        let { css, html, js } = decoder({ encripted: getQuery("data").data });

        initJs = js;
        initCss = css;
        initHtml = html;
    }
    appInit({ appId: "app", initJs, initCss, initHtml });
});