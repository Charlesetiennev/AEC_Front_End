<template>
    <div>
        <h1>Sincrire</h1>
        <form>
            <label for="nom">Nom :<span class="rouge">* </span> </label>
                <input id="nom" type="text" required/><br>
            <label for="prenom">Prenom :<span class="rouge">* </span></label>
                <input id="prenom" type="text" required/><br>
            <label for="motDePasse">Mot de passe :<span class="rouge">* </span></label>
                <input id="motDePasse" type="password" required/><br>
            <label for="ConfirmationMotDePasse">Confirmation mot de passe :<span class="rouge">* </span></label>
                <input id="ConfirmationMotDePasse" type="password" required/><br>
            <label for="email">Email :<span class="rouge">* </span></label>
                <input id="email" type="email" required/><br>
            <label for="confirmationEmail">Confirmation Email :<span class="rouge">* </span></label>
                <input id="confirmationEmail" type="email" required/><br>
            <label for="genre">Genre : </label>
                <label for="homme">Homme</label>
                    <input type="radio" id="homme" name="genre" value="homme">
                <label for="femme">Femme</label>
                    <input type="radio" id="femme" name="genre" value="femme">
                <label for="autre">Autre</label>
                    <input type="radio" id="autre" name="genre" value="autre"><br>
                <label for="ville">Ville : </label> 
                    <select>
                        <option  v-for="ville in villes" :key = "ville" v-bind:value="ville.value">{{ville.value}}</option>
                    </select>
        </form>

    </div>
</template>
<script>
export default {
         data: function () {
    return {
        villes: [
            {id: 1, value: 'Trois-Rivieres'},
            {id: 2, value: 'Montreal'},
            {id: 3, value: 'Quebec'},
        ]
    }
  },
}
</script>
<style>
    .rouge{
        color: red;
    }
</style>