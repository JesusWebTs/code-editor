/* library js-base64 */

let decoderLanguajes = () => {
    let decoder = ({ encripted }) => {
        try {
            let [encriptedJs, encriptedCss, encriptedHtml] = encripted.split("|");

            return {
                js: window.atob(encriptedJs),
                css: window.atob(encriptedCss),
                html: window.atob(encriptedHtml),
            };
        } catch (error) {
            console.error(error.message);
            return {
                js: "",
                css: "",
                html: "",
            };
        }
    };
    let encoder = (toEncript) => {
        let { js, css, html } = toEncript;
        let encripted = `${window.btoa(js)}|${window.btoa(css)}|${window.btoa(
      html
    )}`;

        return encripted;
    };

    return { encoder, decoder };
};

export default decoderLanguajes;