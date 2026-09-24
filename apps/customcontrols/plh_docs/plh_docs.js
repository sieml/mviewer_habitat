var plh_docs = (function () {


    var _btn;


    return {

        init: function () {

           

            fetch("apps/customcontrols/plh_docs/docs.json")
                .then(response => response.json())
                .then(data => {

                    let html = "<ul>";

                    data.forEach(doc => {

                        html += `
                            <li>
                                <a href="${doc.url}"
                                target="_blank"
                                rel="noopener noreferrer">
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