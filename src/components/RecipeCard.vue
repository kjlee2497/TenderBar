<template>
    <div id="main-container">
        <!-- <div id="card-container">
            <h1 id="title">{{ recipe.strDrink }}</h1>
            <h2 id="ingredients">Ingredients</h2>
            <ul id="ingredient-list">
                <li>{{ recipe.strMeasure1 }} of {{ recipe.strIngredient1 }}</li>
                <li>{{ recipe.strMeasure2 }} of {{ recipe.strIngredient2 }}</li>
                <li>{{ recipe.strMeasure3 }} of {{ recipe.strIngredient3 }}</li>
                <li>{{ recipe.strIngredient4 }}</li>
            </ul>
            <h2 id="instructions">Instructions</h2>
            <ul id="instruction-list">
                <li>{{ recipe.strInstructions }}</li>
            </ul>
        </div> -->
        <div id="card-container">
            <h1 id="title">{{ recipeApi.strDrink }}</h1>
            <h2 id="ingredients">Ingredients</h2>

            <div id="lists">
                <ul id="measurement-list">
                    <li v-for="measurement in measurements" v-bind:key="measurement"> {{ measurement }} </li>
                </ul>
                <ul id="ingredient-list">
                    <li v-for="ingredient in ingredients" v-bind:key="ingredient"> {{ ingredient }} </li>
                </ul>
            </div>

            <h2 id="instructions">Instructions</h2>
            <ul id="instruction-list">
                <li>{{ recipeApi.strInstructions }}</li>
            </ul>
        </div>
    </div>

</template>


<script>
import RecipeServices from '../services/RecipeServices'

    export default {
        name: 'RecipeCard',
        data() {
            return {
                // recipe: {
                //     strDrink: "Margarita",
                //     strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
                //     strIngredient1: "Tequila",
                //     strIngredient2: "Triple sec",
                //     strIngredient3: "Lime juice",
                //     strIngredient4: "Salt",
                //     strMeasure1: "1 1/2 oz",
                //     strMeasure2: "1/2 oz",
                //     strMeasure3: "1 oz"
                // },
                recipeApi: {},
                ingredients: [],
                measurements: []
            }
        },
        created() {
            const id = this.$route.params.recipeId;
            RecipeServices.getRecipe(id).then(res => {
                this.recipeApi = res.data.drinks[0];
                
                console.log("success!");
                const keys = Object.keys(this.recipeApi);
                console.log(keys);
                keys.forEach((key) => {
                    console.log(`${key}:${this.recipeApi[key]}`)
                    if(key.includes('strIngredient')) {
                        if(this.recipeApi[key] !== null){
                            this.ingredients.push(this.recipeApi[key]);
                            console.log('pushed into Ingredients');
                        }
                    }
                    if(key.includes('strMeasure')) {
                        if(this.recipeApi[key] !== null){
                            this.measurements.push(this.recipeApi[key].trim());
                            console.log('pushed into Measurements');
                            console.log(this.recipeApi[key]);
                        }
                    }
                });
                // for(let i=0; i<this.measurements.length; i++) {
                //     // if(this.measurements[i] == 'Top') {
                //     //     this.ingredients[i] = this.measurements[i] + ' with ' + this.ingredients[i];
                //     // } else if(this.measurements[i] == 'cubes') {
                //     //     this.ingredients[i] = this.ingredients[i] + ' ' + this.measurements[i];
                //     // } else if(this.measurements[i] == "or lime") {
                //     //     this.ingredients[i] = this.ingredients[i] + ' ' + this.measurements[i];
                //     // } else if(this.measurements[i] == "Fill with") {
                //     //     this.ingredients[i] = this.measurements[i] + ' ' + this.ingredients[i];
                //     // } else if(this.measurements[i] == "Top it up with") {
                //     //     this.ingredients[i] = this.measurements[i] + ' ' + this.ingredients[i];
                //     // } else {
                //     //     this.ingredients[i] = this.ingredients[i] + ':  ' + this.measurements[i];
                //     // }
                //     this.ingredients[i] += '  '+ this.measurements[i];
                // }
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            });
            console.log(this.recipe);
        }
    }
</script>

<style scoped>
#main-container{
    width: 100vw;
    height: 100vh;
    padding-left: 28%;
    padding-top: 5%;
}
#card-container {
    border: 1px darkgray solid;
    background-color:#e8e7d5;
    border-radius: 15px;
    height: 30rem;
    width:  50rem;
    margin: 15px 15px;
    /* background-image: url(../assets/WoodBoard2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
}
#title{
    font-family: serif;
    text-align: right;
    font-weight: 600;
    margin-right:  5%;
    margin-bottom: 3%;
    font-style: italic;
    font-size: 35px;
}
h2{
    font-size: 25px;
    font-style: italic;
    font-family: serif;
    text-align: left;
    font-weight: 6;
    margin-left:  4%;
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
}
h2:after{
  content:" ";
  height: 2px;
  width: 24em;
  background: black;
  display: block;
  position: absolute;
  top: 50%;
  right: 5%;
}
#lists{
    display: flex;
    flex-direction: row;
    padding-left: 18%;
}
#ingredient-list{
    font-size: 16px;
    text-align: left;
    list-style-type: none;
    margin-left: 3%;
    margin-bottom: 5%;
    font-weight: 700;
}
#measurement-list{
    font-size: 16px;
    text-align: left;
    list-style-type: none;
    margin-left: 13%;
    margin-bottom: 5%;
}
#instruction-list{
    font-size: 16px;
    text-align: left;
    list-style-type: none;
    margin-left: 3%;
    padding-right: 6%;
}
</style>