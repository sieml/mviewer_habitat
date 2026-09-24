(function () {

    const button = `
        <button id="icon_plh_docs"
            type="button"
            class="btn btn-default navbar-btn mv-navbar-btn"
            title="Documents du PLH">

            <span class="fas fa-book"></span>
        </button>
    `;

    $(".mv-navbuttons").append(button);

})();

fetch("extensions/plh_docs/docs.json")
    .then(response => response.json())
    .then(data => {

        let html = "<ul>";

        data.forEach(doc => {
            html += `
                <li>
                    ${doc.url}
                        ${doc.titre}
                    </a>
                </li>
            `;
        });

        html += "</ul>";

        $("#contenu-docs").html(html);
    });