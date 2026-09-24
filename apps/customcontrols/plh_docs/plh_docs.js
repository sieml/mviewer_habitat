var plh_docs = (function () {


    var _btn;


    return {

        init: function () {

           

            fetch("docs.json")
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

                })
                .catch(error => {
                    console.error("Erreur chargement docs.json", error);
                });

        }
    };

})();
    
new CustomComponent("plh_docs", plh_docs.init);