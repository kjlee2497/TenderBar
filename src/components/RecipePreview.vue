<template>
    <div id="main-container">
        <div id="card-container" v-for="recipe in recipes" v-bind:key="recipe.idDrink">
            <h1 class="title">{{ recipe.strDrink }}</h1>
            <img class="thumbnail" :src="recipe.strDrinkThumb" alt="cocktail image">
            <br>
            <button v-on:click="goToRecipe(recipe.idDrink)">Get Recipe</button>
        </div>
    </div>

</template>


<script>
import RecipeServices from '../services/RecipeServices'

    export default {
        name: 'RecipeCard',
        data() {
            return {
                recipes: [
                {
                    strDrink: "3-Mile Long Island Iced Tea",
                    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
                    idDrink: "15300"
                },
                {
                    strDrink: "69 Special",
                    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
                    idDrink: "13940"
                }
                ],
                ingredients: 'Gin'
            }
        },
        methods: {
            goToRecipe(id) {
                this.$router.push(`/recipe/${id}`);
            }
        },
        created() {
            const ingredient = this.$route.params.ingredient;
            RecipeServices.getRecipePreviews(ingredient).then(res => {
                this.recipes = res.data.drinks;
                console.log("success!");
                console.log(res.data.drinks[0])
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            });
            console.log(this.recipes);
        }
    }
</script>

<style scoped>
#main-container {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px;
    padding-left: 6.5%;
    padding-top: 5%;
}
#card-container {
    border: 1px darkgray solid;
    background-color:#e8e7d5;
    border-radius: 10px;
    height: 475px;
    width:  500px;
    margin: 15px 15px;
    background-image: url(../assets/WoodBoard5.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.title{
    font-family: serif;
    text-align: center;
    font-weight: 600;
    margin-bottom: 3%;
    font-style: italic;
    font-size: 35px;
    color: white;
}
.thumbnail{
    width: 17rem;
    height: 17rem;
    border-radius: 20px;
    margin-top: 4%;
}
button{
    margin-top: 4%;
    border-radius: 10px;
    width: 120px;
    height: 40px;
    font-size: 16px;
    border: 1px darkgray solid;
    background-color:#9F9A95;
    color: white;
    font-weight:500;
}




</style>