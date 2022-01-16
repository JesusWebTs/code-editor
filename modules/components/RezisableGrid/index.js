const resizableGrid = (props) => {
    let { parent } = props;
    let $containerGrid = document.createElement("div");
    let gutterRow = document.createElement("div");
    let gutterCol = document.createElement("div");
    parent.appendChild($containerGrid);
    $containerGrid.appendChild(gutterCol);
    $containerGrid.appendChild(gutterRow);

    gutterRow.classList.add("gutter-row");
    gutterCol.classList.add("gutter-col");
    $containerGrid.className = "grid";

    Split({
        minSize: 200,
        columnGutters: [{
            track: 1,
            element: document.querySelector(".gutter-col"),
        }, ],
        rowGutters: [{
            track: 1,
            element: document.querySelector(".gutter-row"),
        }, ],
    });

    console.log(Split);

    return $containerGrid;
};

export default resizableGrid;