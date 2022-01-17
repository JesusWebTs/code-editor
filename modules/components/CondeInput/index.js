const CodeInput = (props) => {
    let { onChange, language, parent, imgName, initValue } = props;
    let $div = document.createElement("div");
    let $section = document.createElement("section");
    let $monacoEditor = document.createElement("wc-monaco-editor");
    let $logoImage = document.createElement("img");

    $logoImage.src = `../../../assets/images/${imgName}`;
    $monacoEditor.setAttribute("id", language);
    $monacoEditor.className = "editor";
    $monacoEditor.setAttribute("no-minimap", "");
    $section.className = "input__container";

    if (language === "js") {
        language = "javascript";
    }
    $monacoEditor.setAttribute("language", language);

    $monacoEditor.addEventListener("keyup", (e) => {
        onChange(e.target.value);
    });
    setTimeout(() => {
        $monacoEditor.value = initValue;
    }, 0);

    parent.appendChild($div);
    $div.appendChild($section);
    $section.appendChild($logoImage);
    $section.appendChild($monacoEditor);

    return $section;
};

export default CodeInput;