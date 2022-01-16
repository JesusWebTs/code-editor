import appInit from "./modules/app.js";
import { manageLocation, decoderLanguajes } from "./modules/helpers/index.js";

document.addEventListener("DOMContentLoaded", () => {
    let { getQuery } = manageLocation();
    let { decoder } = decoderLanguajes();
    let initJs,
        initCss,
        initHtml = "";

    if (getQuery("data").data) {
        let { css, html, js } = decoder({ encripted: getQuery("data").data });

        initJs = js;
        initCss = css;
        initHtml = html;
    }
    appInit({ appId: "app", initJs, initCss, initHtml });
});