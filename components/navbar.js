function navbar() {
    return `
    <h3>News App</h3>
    <input type="text" id="search_input"/>
    `
}

function sidebar() {
    return `  
    <h2>Countries</h2>
    <h3 id="in">India</h3>
    <h3 id="ch">China</h3>
    <h3 id="us">Usa</h3>
    <h3 id="uk">Uk</h3>
    <h3 id="nz">Newzeland</h3>
    `;
}

export { navbar, sidebar };