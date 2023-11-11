import axios from "axios";

const http = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/"
});

export default {

    // www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
    getRecipe(id) {
        return http.get(`/lookup.php?i=${id}`)
    },

    // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
    getRecipePreviews(ingredient) {
        return http.get(`/filter.php?i=${ingredient}`)
    }

}