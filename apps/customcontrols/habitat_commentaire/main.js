

var habitat_commentaire = (function () {
  var data = null;
  var graph = null;

var layerComments = {
    "obs_habitatgeo_vm_rpls_row": "82% du parc est concentré sur les 2 communes de Segré-en-Anjou Bleu (60%) et d’Ombrée d’Anjou (22%) qui regroupent 77% de la population. A l’échelle de la communauté de communes, on note que le nombre de logements locatifs sociaux a diminué ces 4 dernières années (-0.92% chaque année entre 2019 et 2023)",
    "obs_habitatgeo_vm_rpls_abcdbl3": "82% du parc est concentré sur les 2 communes de Segré-en-Anjou Bleu (60%) et d’Ombrée d’Anjou (22%) qui regroupent 77% de la population. A l’échelle de la communauté de communes, on note que le nombre de logements locatifs sociaux a diminué ces 4 dernières années (-0.92% chaque année entre 2019 et 2023)",
    "obs_habitatgeo_vm_creha_ouest_demandes_satisfaites_abc":"La pression se renforce : une demande prépondérante des petits logements.<br><i>Clé de lecture : par exemple, pour Candé, il faut comprendre 1 attribution pour 6.3 demandes </i>",
    "obs_habitatgeo_vm_sitadel_abcdbl2": 'Des nouveaux logements assez rares et concentrés à Segré-en-Anjou Bleu. A l’échelle d’ABC, un volume de mises en chantier le plus faible depuis 20 ans.',
    "obs_habitatgeo_vm_rpls_abcdbl1":'Au sein du parc social, la présence de logements vacants se maintient à un faible niveau.',
    "obs_habitat:geo_v_guichet_accueil":"De nombreux lieux d’accueil sur tout le territoire pour s’informer sur les démarches lors d’une demande de logement locatif social.",
    "obs_habitat:geo_v_guichet_enregistrement":"Quatre lieux pour enregistrer sa demande de logement locatif social sont présents sur le territoire: deux à Ombrée d’Anjou et deux à Segré-en-Anjou Bleu."
    

  };


  return {
    // Called when the Visualization API is loaded.
    init: function () {
      // Create and populate a data table.

      var container = document.getElementById("commentaire");
      container.innerHTML = "";

      // Rendre visible le composant au démarrage
      var componentWrapper = document.getElementById("habitat_commentaire-custom-component");
      if (componentWrapper) componentWrapper.style.display = "none";

      // Écouteur global sur les clics des couches
      document.querySelectorAll(".mv-nav-item").forEach(function (item) {
        item.addEventListener("click", function () {
          var layerId = item.getAttribute("data-layerid");
          habitat_commentaire.updateComment(layerId);
        });
      });
    },
 // Met à jour le texte selon la couche active
    updateComment: function (layerId) {
     var container = document.getElementById("commentaire");
      var componentWrapper = document.getElementById("habitat_commentaire-custom-component");
      if (!container || !componentWrapper) return;

      if (layerId && layerComments[layerId]) {
        // Afficher le composant et insérer le texte
        componentWrapper.style.display = "block";
        container.innerHTML = layerComments[layerId];
      } else {
        // Masquer complètement le composant
        componentWrapper.style.display = "none";
      }
    }
  };
})();
//This instruction is only necessary if init function is needed.
//Very important first parameter is customComponent id + '-componentLoaded',
//second parameter is init function to execute
//document.addEventListener('graph3d-componentLoaded', graph3d.init);
new CustomComponent("habitat_commentaire", habitat_commentaire.init);


