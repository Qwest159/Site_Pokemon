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

          <table class="m-auto">
            <tr class="gsm_th">
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
        <section>
          <h3>Montées en niveau et évolutions</h3>
          <p>
            En gagnant de l’expérience, les Pokémon montent de niveau. Le moyen
            le plus classique de gagner de l’expérience est via les combats. Il
            est également possible de gagner des niveaux à l’aide des
            <a href="">Bonbons Mystère</a> ou via les services de la
            <a href="">Garderie</a>.
          </p>
          <p>
            En montant de niveau, certains Pokémon peuvent évoluer et changer de
            forme.
          </p>
          <figure class="">
            <img
              class="m-auto"
              src="/storage/img/Commande/img_evo.png"
              alt="Nidoran"
            />
          </figure>
        </section>
        <section>
          <h3>Les Centres Pokémon</h3>
          <div class="img_caption flex items-center">
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/gymnase.jpg"
                alt="Gymnase"
              />
            </figure>

            <p class="pl-5">
              Chaque ville est équipée d’un Centre Pokémon. Ce sont des lieux où
              les Dresseurs peuvent restaurer les PV et les PP de leurs Pokémon,
              et ce gratuitement.
            </p>
          </div>
          <div class="img_caption flex items-center">
            <div class="">
              <p>
                De plus, les Centres Pokémon sont équipés d’un ordinateur qui
                vous permet de stocker et retirer des Pokémon et des objets. De
                plus, vous pouvez faire évaluer votre Encyclopédie Pokémon par
                le Docteur Okido en ligne.
              </p>
              <p>
                Vous disposez de huit boîtes pouvant contenir trente Pokémon
                chacun, ce qui fait donc un stockage maximum de 240 Pokémon.
              </p>
            </div>
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/pc.png"
                alt="ordinateur de stockage"
              />
            </figure>
          </div>
          <p>
            Les Centres Pokémon comprennent également un “<a href="http://"
              >Club de Communication pour Câble</a
            >” pour les échanges et combats avec d’autres joueurs, à l’aide du
            Câble Link.
          </p>
        </section>
        <section>
          <h3>Les Boutiques Amicales</h3>
        </section>
        <div class="img_caption flex items-center">
          <figure class="">
            <img
              class=""
              src="../../../public/storage/img/Commande/?.png"
              alt="les boutiques amicales"
            />
          </figure>
          <p>
            Chaque ville est équipée d’une Boutique Amicale où vous pouvez
            acheter divers objets utiles à votre aventure. Il est également
            possible d’y vendre des objets.
          </p>
        </div>
        <section>
          <h3>L’Encyclopédie Pokémon</h3>
          <p>
            Il s’agit d’un outil high-tech que vous fournit le Docteur Okido :
            elle enregistre automatiquement les informations des Pokémon que
            vous capturez. Votre objectif est de le remplir entièrement, et pour
            ce faire, vous devrez obligatoirement battre les huit Chefs de
            Gymnase.
          </p>
          <div class="flex gap-2 justify-evenly">
            <figure class="">
              <img
                class=""
                src="../../../public/storage/img/Commande/encyclopedie.jpg"
                alt="encyclopédie"
              />
              <figcaption class="italic text-center">
                L’Encyclopédie Pokémon
              </figcaption>
            </figure>
            <figure>
              <img
                class=""
                src="../../../public/storage/img/Commande/infos_pokemon.jpg"
                alt="infos_pokemon"
              />
              <figcaption class="italic text-center">
                Informations du Pokémon
              </figcaption>
            </figure>
            <figure>
              <img
                class=""
                src="../../../public/storage/img/Commande/localisation.jpg"
                alt="localisation"
              />
              <figcaption class="italic text-center">
                Localisation du Pokémon
              </figcaption>
            </figure>
          </div>
          <p>
            Les Pokémon y sont classés par numéro. Il est possible d’y consulter
            les informations générales du Pokémon : son nom, sa catégorie, sa
            taille, son poids, une brève description. Vous pouvez également
            écouter son cri et voir où le capturer.
          </p>
          <p>
            Tout au long de votre aventure, vous pouvez faire évoluer votre
            avancement dans la complétion de l’Encyclopédie par le Dr. Okido via
            le PC des Centres Pokémon.
          </p>
        </section>
        <section>
          <h3>Les combats</h3>
          <p>
            Les Pokémon peuvent se battre. Au cours d’un combat, les Pokémon
            utilisent des techniques. Ils gagnent de l’expérience, ce qui leur
            fait apprendre de nouvelles techniques plus puissantes. Pour
            réorganiser l’ordre des techniques d’un Pokémon, lancez un combat,
            sélectionnez “Technique” puis choisissez la technique que vous
            souhaitez déplacer avec le bouton Select. Déplacez le curseur vers
            la nouvelle position voulue et appuyez à nouveau sur Select.
          </p>
          <p>
            Lors d’un combat, il est possible d’utiliser certains objets pour
            booster son Pokémon : voir
            <a href="">Les statistiques des Pokémon</a>.
          </p>
          <p>
            Parfois, une attaque a la possibilité de frapper plus fort. Cette
            probabilité peut être augmentée grâce à l’objet
            <a href="">Criticutter</a>.
          </p>
        </section>
        <section>
          <h3>La capture des Pokémon</h3>
          <p>
            Il existe différents types de balles pour capturer les Pokémon.
            Ceux-ci ont des taux de réussite variables, ce qui veut dire qu’une
            capture ne fonctionne pas à tous les coups :
          </p>
          <table class="text-center m-auto mb-9">
            <tr>
              <th>Nom japonais</th>
              <th>Nom francisé</th>
              <th>Brève description</th>
            </tr>
            <tr>
              <td class="italic">
                <a href=""
                  >モンスターボール <br />
                  Monsutā Bōru</a
                >
              </td>
              <td class="italic"><a href="">Monster Ball</a></td>
              <td>Sert à attraper les Pokémon.</td>
            </tr>
            <tr>
              <td class="italic">
                <a href="">スーパーボール <br />Sūpā Bōru</a>
              </td>
              <td class="italic"><a href="">Super Ball</a></td>
              <td>Balle plus performante que la Monster Ball.</td>
            </tr>
            <tr>
              <td class="italic">
                <a href=""
                  >ハイパーボール <br />
                  Haipā Bōru</a
                >
              </td>
              <td class="italic"><a href="">Hyper Ball</a></td>
              <td>Balle encore plus performante que la Super Ball.</td>
            </tr>
            <tr>
              <td class="italic">
                <a href=""
                  >サファリボール<br />
                  Safari Bōru</a
                >
              </td>
              <td class="italic"><a href="">Safari Ball</a></td>
              <td>
                Sert à attraper des Pokémon dans la <a href="">Zone Safari</a>.
              </td>
            </tr>
            <tr>
              <td class="italic">
                <a href=""
                  >マスターボール<br />
                  Masutā Bōru</a
                >
              </td>
              <td class="italic"><a href="">Master Ball</a></td>
              <td>La balle ultime avec une capture garantie à 100%.</td>
            </tr>
          </table>
        </section>
        <section>
          <h3>Les états spéciaux</h3>
          <p>
            Les Pokémon peuvent parfois subir un état dégradé. Il existe
            plusieurs de ces états spéciaux :
          </p>

          <table class="text-center m-auto mb-9">
            <tr class="">
              <th>État</th>
              <th>Effets</th>
              <th>Soin spécifique</th>
            </tr>
            <tr>
              <td>Poison</td>
              <td></td>
              <td>
                <a href="">Antidote</a> (<span class="italic"
                  >どくけし, Doku Keshi</span
                >)
              </td>
            </tr>
            <tr>
              <td>Brûlure</td>
              <td></td>
              <td>
                <a href="">Anti Brûlure</a>
                <span class="italic"></span> (やけどなおし, Yakedo Naoshi)
              </td>
            </tr>
            <tr>
              <td>Gel</td>
              <td></td>
              <td>
                <a href="">Anti Gel </a> (<span class="italic"
                  >こおりなおし, Kōri Naoshi</span
                >)
              </td>
            </tr>
            <tr>
              <td>Somnolence</td>
              <td></td>
              <td>
                <a href="">Anti Somnolence </a>
                (<span class="italic">ねむけざまし, Nemu ke zama shi</span>)
              </td>
            </tr>
            <tr>
              <td>Paralysie</td>
              <td></td>
              <td>
                <a href="">Anti Paralysie </a>
                (<span class="italic">まひなおし, Mahi Naoshi</span>)
              </td>
            </tr>
            <tr>
              <td>Évanouissement</td>
              <td>Le Pokémon n’a plus de PV et ne peut plus combattre.</td>
              <td class="">
                <a href="">Fragment / Bouquet de vitalité</a>
                (<span class="italic">げんきのかけら, Genki no Kakera</span> //
                <span class="italic">げんきのかたまり, Genki no Katamari</span>)
              </td>
            </tr>
          </table>
          <p>
            À noter que tous les états spéciaux hors de l’évanouissement peuvent
            être soignés par un <a href="">Soigne-Tout</a> (<span class="italic"
              >なんでもなおし, Nandemo Naoshi</span
            >) ou un <a href="">Médicament de Récupération</a> (<span
              class="italic"
              >かいふくのくすり, Kaifuku no kusuri</span
            >).
          </p>
        </section>
        <section>
          <h3>Conseils pour jouer</h3>
          <ul>
            Voici quelques conseils pour progresser plus facilement dans le jeu
            !

            <li>
              Le Pokémon qui occupe la première place dans votre équipe a son
              importance, vu que c’est lui qui sera envoyé en premier au combat.
              Il est judicieux de placer son Pokémon le plus fort, ou alors
              celui que vous voulez entraîner.
            </li>
            <li>
              Rentrez dans les maisons des gens et parlez leurs, ils peuvent
              parfois vous révéler des informations importantes !
            </li>
          </ul>
        </section>
        <section>
          <h3>Club de Communication par Câble</h3>
          <p>
            Dans chaque Centre Pokémon, vous pouvez trouver un “Club de
            Communication par Câble”, qui vous permet d’échanger et de combattre
            avec d’autres joueurs à l’aide du Câble Link.
          </p>
        </section>
        <section>
          <h3>Les “Dispositifs d’attaque” et “Dispositifs secrets”</h3>
          <p>
            Vous pouvez les obtenir auprès des Chefs de Gymnases et d’autres
            PNJ.
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
.img_caption p,
.img_caption div,
.img_caption ul {
  width: 80%;
}
</style>
