<template>
    <form>
        <label for="email">E-mail :</label>
        <input id="email" type="email" />
        <br>
        <label for="sujet">Sujet : </label>
        <select>
            <option  v-for="sujet in sujets" :key = "sujet" v-bind:value="sujet.value">{{sujet.value}}</option>
        </select>
        <br>
        <label for="commentaire">Envoyer un commentaire : </label>
        <br>
        <textarea id="commentaire" name="commentaire" rows="4" cols="50">
        </textarea>
        <br>
        <button type="submit">Envoye </button>
    </form>
</template>
<script>
export default {
     data: function () {
    return {
        sujets: [
            {id: 1, value: 'Probleme technique'},
            {id: 2, value: 'Service Clientele'},
            {id: 3, value: 'Tout autre questions'},
        ]
    }
  },
}

</script>