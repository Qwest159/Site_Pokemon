<script setup>
import { defineProps, ref, onMounted } from "vue";
// import personnage from "../../../public/storage/generation1/personnages.json";
const isLoading = ref(false);
const error = ref(null);
</script>
<template>
  <div id="partie">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">Comment jouer</h1>
      <article>
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
      </article>
    </main>
  </div>
</template>
<style scoped>
h3 {
  font-weight: 700;
}
h2 {
  font-weight: 700;
}
.lien_lieu {
  border: none;
}
table tr img:not(#fleche) {
  margin: auto;
}
#fleche {
  display: inline;
}
</style>
