

var habitat_commentaire_vha = (function () {
  var data = null;
  var graph = null;

var layerComments = {
    "obs_habitat:geo_vm_insee_profil_population": "Le territoire de la CCVHA est relativement équilibré d’un point de vue démographique. 3 communes dépassent les 5000 habitants tandis que 5 communes ont moins de 1000 habitants. Le territoire est le plus jeune du Département (les moins de 30 ans représentent 38% de la population). Une tendance au vieillissement est cependant engagé, impliquant des enjeux d’adaptation du parc de logements afin d’assurer le maintien à domicile de certains séniors.",
    "obs_habitat:geo_vm_insee_evolution_population": "Le territoire de la CCVHA se démarque par une dynamique démographique (+2% entre 2016 et 2022), malgré un net ralentissement observé depuis 2015.",
    "obs_habitat:geo_vm_insee_menages":"La population de la CCVHA est jeune et familiale. La taille moyenne des ménages de la CCVHA (2.93 personnes par foyer) est largement supérieure à la moyenne départementale (2.48). Le desserrement des ménages causé en partie par le vieillissement de la population participe cependant à une diminution de la taille des ménages.",
    "obs_habitat:geo_vm_insee_med_niveau_de_vie": 'La médiane du niveau de vie des habitants de la CCVHA est sensiblement égale à la médiane départementale.',
    "obs_habitat:geo_vm_insee_emploi":"Le territoire de la CCVHA a une vocation principalement résidentielle. Les habitants ont tendance à partir travailler en dehors du territoire (degré variable en fonction des communes).",
    "obs_habitat:geo_vm_rpls_vha":"Les communes déléguées de Châteauneuf-sur-Sarthe et Champigné sont celles qui ont le taux de logements sociaux le plus élevé (respectivement 17.8% et 19%).",
    "obs_habitat:geo_vm_rpls_vha":"Le parc social est composé en majorité de grands logements (T4 et plus), représentant 79% du parc, en inadéquation avec les évolutions socio-démographique constatées.",
    "obs_habitat:geo_vm_rpls_vha":"La vacance est relativement faible sur le territoire de la CCVHA"
  };


  return {
    // Called when the Visualization API is loaded.
    init: function () {
      // Create and populate a data table.

      var container = document.getElementById("commentaire");
      container.innerHTML = "";

      // Rendre visible le composant au démarrage
      var componentWrapper = document.getElementById("habitat_commentaire-vha-custom-component");
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
      var componentWrapper = document.getElementById("habitat_commentaire-vha-custom-component");
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
new CustomComponent("habitat_commentaire_vha", habitat_commentaire_vha.init);


