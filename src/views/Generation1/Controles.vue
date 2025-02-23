<script setup>
import { defineProps, ref, onMounted } from "vue";
// import personnage from "../../../public/storage/generation1/personnages.json";
const isLoading = ref(false);
const error = ref(null);
</script>
<template>
  <div id="partie">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">
        Mécaniques de jeu
      </h1>
      <article>
        <section>
          <h2>Les contrôles</h2>
          <table>
            <tr>
              <th>Touche</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <figure>
                  <img
                    src="../../../public/storage/img/Commande/d-pad.png"
                    alt="pad"
                  />
                </figure>
              </td>
              <td>
                Sert à se déplacer dans le monde et à naviguer dans les menus,
                ainsi que dans la grille de lettres/caractères.
              </td>
            </tr>
            <tr>
              <td>
                <figure>
                  <img
                    src="../../../public/storage/img/Commande/select.png"
                    alt=""
                  />
                </figure>
              </td>
              <td>Sert à déplacer des objets et les attaques des Pokémon.</td>
            </tr>
            <tr>
              <td>
                <figure>
                  <img
                    src="../../../public/storage/img/Commande/start.png"
                    alt="start"
                  />
                </figure>
              </td>
              <td>Sert à ouvrir le menu</td>
            </tr>
            <tr>
              <td>
                <figure>
                  <img
                    src="../../../public/storage/img/Commande/bouton_b.png"
                    alt="bouton b"
                  />
                </figure>
              </td>
              <td>
                Sert à annuler un choix sélectionné à l’aide du bouton A, y
                compris la sélection de lettres lors de l’introduction de texte.
              </td>
            </tr>
            <tr>
              <td>
                <figure>
                  <img
                    src="../../../public/storage/img/Commande/bouton_a.png"
                    alt="bouton a"
                  />
                </figure>
              </td>
              <td>
                Sert à confirmer un choix ou sélectionner une lettre lorsqu’il
                faut introduire du texte. Lors d’un dialogue, lorsque l’icône
                <img
                  id="fleche"
                  src="../../../public/storage/img/Commande/logo_fleche_bas.png"
                  alt="flèche bas"
                />
                s’affiche, permet d’afficher la suite du texte.
              </td>
            </tr>
          </table>
        </section>
        <section>
          <h2>Gestion de la partie</h2>
          <figure class="flex justify-evenly">
            <img
              src="../../../public/storage/img/Commande/ecran_titre.jpg"
              alt="ecran_titre"
            />
            <img
              src="../../../public/storage/img/Commande/demarrage.jpg"
              alt="demarrage"
            />
          </figure>
          <h3>Démarrer une nouvelle partie</h3>
          <p>
            Sur l’écran titre du jeu, appuyez sur A ou Start pour ouvrir le menu
            de démarrage du jeu. La première option offerte vous lance au début
            du jeu.
          </p>
          <h3>Sauvegarder une partie</h3>
          <p>
            Pour sauvegarder une partie, vous devez rédiger un
            <a href="#Rapport">Rapport Pokémon</a>.
          </p>
          <h3>Continuer une partie</h3>
          <p>
            Une fois que votre cartouche contient une partie enregistrée, le
            menu de démarrage vous offre la possibilité de reprendre votre
            partie depuis la dernière sauvegarde.
          </p>
          <h3>Effacer des données</h3>
          <p>
            Pour effacer des données sauvegardées, appuyez simultanément sur les
            boutons Haut de la croix directionnelle, Select et B sur l’écran
            titre.
          </p>
        </section>
        <section>
          <h2>Les réglages</h2>
          <figure class="flex items-center">
            <img
              class="h-56"
              src="../../../public/storage/img/Commande/reglages.jpg"
              alt="reglages"
            />
            <figcaption class="m-5">
              <p>Différentes options s’offrent à vous dans le menu dédié :</p>
              <ul>
                <li>la vitesse d’affichage du texte : lent, moyen, rapide.</li>
                <li>l’affichage ou non des animations lors des combats.</li>
                <li>
                  la possibilité ou non de changer de Pokémon lorsque vous
                  battez celui de votre adversaire et qu’il envoie un autre
                  Pokémon (mode choix/défini).
                </li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section>
          <h2>Le menu</h2>
          <figure class="flex items-center">
            <img
              class="h-56"
              src="../../../public/storage/img/Commande/menu.jpg"
              alt="reglages"
            />
            <figcaption class="m-5">
              <p>
                Appuyez sur Start pour afficher le menu général du jeu. Celui-ci
                vous offre plusieurs options
              </p>
            </figcaption>
          </figure>
          <strong>Encyclopédie</strong>
          <p>
            Vous pouvez consulter l’Encyclopédie Pokémon, où vous trouverez des
            informations sur les Pokémon, comme leur cri ou leur localisation.
            Vous pouvez également voir combien de Pokémon vous avez vus et
            attrapés.
          </p>
          <strong>Pokémon</strong>
          <p>
            Pokémon : vous pouvez ici voir l’état de votre équipe de Pokémon,
            ainsi que leurs statistiques. Vous pouvez également arranger l’ordre
            des Pokémon en sélectionnant un Pokémon et choisissant l’option
            “Ordre”.
          </p>
          <figure class="m-auto">
            <img
              class="h-56"
              src="../../../public/storage/img/Commande/equipe.jpg"
              alt="equipe"
            />
            <figcaption class="m-auto italic">
              Votre équipe de Pokémon
            </figcaption>
          </figure>
          <strong>Objets</strong>
          <p>
            Vous pouvez ici voir la liste des objets que vous possédez. Vous
            pouvez en porter 20 sur vous maximum. En sélectionnant un objet,
            vous avez la possibilité de l’utiliser ou de le jeter.
          </p>
          <strong>Nom du protagoniste</strong>
          <p>
            vous pouvez ici consulter votre nom, l’argent que vous possédez,
            votre temps de jeu, ainsi que votre avancement dans la récolte des
            badges de Gymnases.
          </p>
          <strong id="Rapport">Rapport</strong>
          <p>
            Vous pouvez ici sauvegarder votre partie. Cette option est tout le
            temps disponible, sauf lors d’un combat.
          </p>
          <strong>Options</strong>
          <p>Voir les réglages</p>
          <strong>Fermer</strong>
          <p>
            Cette commande vous permet de fermer le menu et de revenir au jeu.
          </p>
        </section>
        <section></section>
      </article>
    </main>
  </div>
</template>
<style scoped>
table tr img:not(#fleche) {
  margin: auto;
}
#fleche {
  display: inline;
}
section {
  margin: 2em 0em;
}
li {
  margin-left: 2em;
}
</style>
