const codeViewer = (props) => {
    let { parent } = props;
    let $section = document.createElement("section");
    let $iframe = document.createElement("iframe");
    let changeHtmlText = (htmlText) => {
        $iframe.srcdoc = htmlText;
    };
    parent.appendChild($section);
    $section.className = "show-area__container";
    $section.appendChild($iframe);
    return [$section, changeHtmlText];
};

export default codeViewer;