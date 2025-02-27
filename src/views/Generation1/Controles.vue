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
          <div class="flex justify-center">
            <figure class="">
              <img
                src="../../../public/storage/img/Commande/ecran_titre.jpg"
                alt="ecran_titre"
              />
            </figure>
            <figure>
              <img
                src="../../../public/storage/img/Commande/demarrage.jpg"
                alt="demarrage"
              />
            </figure>
          </div>

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
          <h2 id="Réglages">Les réglages</h2>

          <div class="img_caption flex items-center">
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/reglages.jpg"
                alt="reglages"
              />
            </figure>

            <ul class="pl-5">
              Différentes options s’offrent à vous dans le menu dédié :
              <li>la vitesse d’affichage du texte : lent, moyen, rapide.</li>
              <li>l’affichage ou non des animations lors des combats.</li>
              <li>
                la possibilité ou non de changer de Pokémon lorsque vous battez
                celui de votre adversaire et qu’il envoie un autre Pokémon (mode
                choix/défini).
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Le menu</h2>

          <div class="img_caption flex items-center">
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/menu.jpg"
                alt="Commande"
              />
            </figure>

            <p class="pl-5">
              Appuyez sur Start pour afficher le menu général du jeu. Celui-ci
              vous offre plusieurs options
            </p>
          </div>

          <h3>Encyclopédie</h3>
          <p>
            Vous pouvez consulter
            <a href="#Encyclopédie">l’Encyclopédie Pokémon</a>., où vous
            trouverez des informations sur les Pokémon, comme leur cri ou leur
            localisation. Vous pouvez également voir combien de Pokémon vous
            avez vus et attrapés.
          </p>
          <h3>Pokémon</h3>

          <div class="img_caption flex items-center">
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/equipe.jpg"
                alt="reglages"
              />
              <figcaption class="text-center italic">
                Votre équipe de Pokémon
              </figcaption>
            </figure>

            <p class="pl-5">
              Vous pouvez ici voir l’état de votre équipe de Pokémon, ainsi que
              leurs statistiques. Vous pouvez également arranger l’ordre des
              Pokémon en sélectionnant un Pokémon et choisissant l’option
              “Ordre”.
            </p>
          </div>

          <h3>Objets</h3>

          <div class="img_caption flex items-center">
            <figure class="">
              <img
                src="../../../public/storage/img/Commande/menu_objets.jpg"
                alt="menu_objets"
              />
              <figcaption class="text-center italic">
                Le menu des objets
              </figcaption>
            </figure>

            <p class="pl-5">
              Vous pouvez ici voir la liste des objets que vous possédez. Vous
              pouvez en porter 20 sur vous maximum. En sélectionnant un objet,
              vous avez la possibilité de l’utiliser ou de le jeter.
            </p>
          </div>

          <h3>Nom du protagoniste</h3>

          <div class="img_caption flex items-center">
            <figure class="">
              <img
                src="../../../public/storage/img/Commande/fiche_perso.jpg"
                alt="fiche_perso"
              />
              <figcaption class="text-center italic">
                La fiche de votre personnage
              </figcaption>
            </figure>

            <p class="pl-5">
              vous pouvez ici consulter votre nom, l’argent que vous possédez,
              votre temps de jeu, ainsi que votre avancement dans la récolte des
              badges de Gymnases.
            </p>
          </div>

          <h3 id="Rapport">Rapport</h3>
          <p>
            Vous pouvez ici sauvegarder votre partie. Cette option est tout le
            temps disponible, sauf lors d’un combat.
          </p>
          <h3>Options</h3>
          <p>Voir <a href="#Réglages">les réglages</a>.</p>
          <h3>Fermer</h3>
          <p>
            Cette commande vous permet de fermer le menu et de revenir au jeu.
          </p>
        </section>
        <section>
          <h2>Les types des Pokémon</h2>
          <p>
            Chaque Pokémon a un type. Il existe plusieurs types comme Insecte,
            Électrique ou Flamme.
          </p>
        </section>
        <section>
          <h2>Les statistiques des Pokémon</h2>
          <div class="flex justify-center my-5">
            <figure class="">
              <img
                class="h-44"
                src="../../../public/storage/img/Commande/stats.jpg"
                alt="stats"
              />
              <figcaption class="italic text-center">
                Les statistiques du Pokémon
              </figcaption>
            </figure>
            <figure>
              <img
                class="h-44"
                src="../../../public/storage/img/Commande/stats_attaques.jpg"
                alt="stats_attaques"
              />
              <figcaption class="italic text-center">
                Les statistiques des techniques
              </figcaption>
            </figure>
          </div>
          <ul>
            Chaque Pokémon est caractérisé par un ensemble de statistiques qui
            détermineront son efficacité dans un combat.
            <li>Attaque : Correspond à la force offensive du Pokémon.</li>
            <li>
              Défense : Correspond à la capacité du Pokémon à encaisser les
              coups.
            </li>
            <li>Vitesse : Correspond à la rapidité du Pokémon.</li>
            <li>
              Attaque Spéciale : Correspond à la force d’attaque et de défense
              spéciale du Pokémon.
            </li>
            <li>
              PV : Montre les Points de Vie maximums et actuels du Pokémon. Si
              les PV atteignent 0, le Pokémon n’est plus capable de se battre.
            </li>
            <li>
              PP : Montre les Points de Pouvoir maximums et actuels des
              techniques du Pokémon.
            </li>
          </ul>
          <p>
            Au moment de capturer un Pokémon, votre numéro d’ID et votre nom de
            Dresseur est enregistré sur la fiche du Pokémon. Votre ID est
            déterminée au moment de lancer une nouvelle partie.
          </p>
          <p>
            Il est possible d’améliorer les statistiques des Pokémon de manière
            durable ou alors juste le temps d’un combat.
          </p>

          <table class="text-center m-auto mb-9">
            <tr>
              <th>Statistique</th>
              <th>Objet d’amélioration durable</th>
              <th>Objet d’amélioration temporaire</th>
            </tr>
            <tr class="">
              <td>Attaque</td>
              <td>
                <a href=""><span class="italic">タウリン</span>, Taurine</a>
              </td>
              <td>
                <a href=""
                  ><span class="italic">プラスパワー</span>, Pouvoir Plus</a
                >
              </td>
            </tr>

            <tr class="">
              <td>Défense</td>
              <td>
                <a href=""
                  ><span class="italic">ブロムヘキシン</span>, Bromhexine</a
                >
              </td>
              <td>
                <a href=""
                  ><span class="italic">ディフェンダー</span>, Défenseur</a
                >
              </td>
            </tr>
            <tr class="">
              <td>Vitesse</td>
              <td>
                <a href=""
                  ><span class="italic">インドメタシン</span>, Indométacine</a
                >
              </td>
              <td>
                <a href=""
                  ><span class="italic">スピーダー</span>, Accélérateur</a
                >
              </td>
            </tr>
            <tr class="">
              <td>Attaque Spéciale</td>
              <td>
                <a href=""><span class="italic">リゾチウム</span>, Lysozyme</a>
              </td>
              <td>
                <p>
                  <a href=""
                    ><span class="italic">スペシャルアップ</span>, Spécial
                    Plus</a
                  >
                  (Attaque)
                </p>
                <p>
                  <a href="">
                    <span class="italic">エフェケトガード</span>, Garde
                    d'Effets</a
                  >
                  (Défense)
                </p>
              </td>
            </tr>
            <tr class="">
              <td>PV</td>
              <td>
                <a href=""
                  ><span class="italic">マックスアップ</span>, Max Plus</a
                >
              </td>
              <td>/</td>
            </tr>
            <tr class="">
              <td>PP</td>
              <td>
                <a href=""
                  ><span class="italic">ポイントアップ</span>, Points Plus</a
                >
              </td>
              <td>/</td>
            </tr>
          </table>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
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
.img_caption p,
.img_caption ul {
  width: 80%;
}
</style>
