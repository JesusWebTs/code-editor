/* library js-base64 */

let decoderLanguajes = () => {
    let decoder = ({ encripted }) => {
        try {
            let [encriptedJs, encriptedCss, encriptedHtml] = encripted.split("%7C");

            return {
                js: Base64.decode(encriptedJs),
                css: Base64.decode(encriptedCss),
                html: Base64.decode(encriptedHtml),
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

        let encripted = `${Base64.encode(js)}%7C${Base64.encode(css)}%7C${Base64.encode(html)}`;
        return encripted;
    };

    return { encoder, decoder };
};

export default decoderLanguajes;