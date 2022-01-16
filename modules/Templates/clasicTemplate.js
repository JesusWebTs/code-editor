const clasicTemplate = (props) => {
    const { html = "", css = "", js = "" } = props;

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${css}</style>
    </head>
    
    <body>
        ${html}
    </body>
    <script>${js}</script>
    
    </html>`;
};

export default clasicTemplate;