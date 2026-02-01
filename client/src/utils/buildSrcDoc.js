// Utility function to combine HTML, CSS, and JS into a single string for iframe
const buildSrcDoc = (html, css, js) => {
    return `
        <html>
            <style>${css}</style>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `;
};

export default buildSrcDoc;
