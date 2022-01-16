const CodeInput = (props) => {
    let { onChange, languaje, parent, imgName, initValue } = props;
    let $div = document.createElement("div");
    let $section = document.createElement("section");
    let $textArea = document.createElement("textarea");

    $textArea.setAttribute(
        "style",
        `--img_url: url(../../../assets/images/${imgName});`
    );
    $div.appendChild($section);
    parent.appendChild($div);
    $section.className = "input__container";
    $section.appendChild($textArea);
    $textArea.setAttribute("placeholder", languaje);
    $textArea.value = initValue;

    $textArea.addEventListener("input", (e) => {
        onChange(e.target.value);
    });

    return $section;
};

export default CodeInput;