/* Componenets */
import { CondeInput, CodeViewer, RezisableGrid } from "./components/index.js";
import { UseState } from "./helpers/index.js";
import clasicTemplate from "./Templates/clasicTemplate.js";

import { manageLocation, decoderLanguages } from "./helpers/index.js";

const appInit = (props) => {
    const { initJs = "", initCss = "", initHtml = "", appId = "app" } = props;
    const $app = document.getElementById(appId);
    let { encoder } = decoderLanguages();
    let { setQuery } = manageLocation();

    const js = new UseState({
        initValue: initJs,
        onChange: (value) => {
            code.setValue({...code.value, js: value });
        },
    });
    const css = new UseState({
        initValue: initCss,
        onChange: (value) => {
            code.setValue({...code.value, css: value });
        },
    });
    const html = new UseState({
        initValue: initHtml,
        onChange: (value) => {
            code.setValue({...code.value, html: value });
        },
    });

    const code = new UseState({
        initValue: {
            js: initJs,
            html: initHtml,
            css: initCss,
        },
        onChange: () => {
            let htmlText = clasicTemplate({
                js: code.value.js,
                css: code.value.css,
                html: code.value.html,
            });

            let hash = encoder({
                js: code.value.js,
                html: code.value.html,
                css: code.value.css,
            });

            setQuery({ query: "data", value: hash });
            setData(htmlText);
        },
    });

    const $grid = RezisableGrid({
        parent: $app,
    });

    const $html = CondeInput({
        onChange: (value) => {
            html.setValue(value);
        },
        language: "html",
        parent: $grid,
        imgName: "html.png",
        initValue: html.value,
    });
    const $js = CondeInput({
        onChange: (value) => {
            js.setValue(value);
        },
        language: "js",
        parent: $grid,
        imgName: "js.svg",
        initValue: js.value,
    });
    const $css = CondeInput({
        onChange: (value) => {
            css.setValue(value);
        },
        language: "css",
        parent: $grid,
        imgName: "css.png",
        initValue: css.value,
    });

    const [_, setData] = CodeViewer({ parent: $grid });

    setData(clasicTemplate({ html: initHtml, css: initCss, js: initJs }));
};

export default appInit;