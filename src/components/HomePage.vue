<template>
    <div id="main-container">
        <h1>Booze Cruise</h1>

        <div id="form-container">
        <form v-on:submit.prevent="goToPreviews()">
            <Label for="Liquor">Please type your ingredient of choice  (i.e. Vodka, Tequila, Orange Juice, etc)</Label>
            <br>
            <div>
                <input type="text" v-model="filterChoice" placeholder="Type Here">
                <!-- <select value="Liquor" v-model="filterchoice">
                    <option disabled value="">Select option</option>
                    <option name="Vodka" id="Vodka">Vodka</option>
                    <option name="Tequia" id="Tequila">Tequila</option>
                    <option value="Rum">Rum</option>
                    <option value="Light Rum">Light Rum</option>
                    <option value="Dark Rum">Dark Rum</option>
                    <option value="Gin">Gin</option>
                    <option value="Brandy">Brandy</option>
                    <option value="Bourbon">Bourbon</option>
                </select> -->
                <button>Get Recipes</button>
            </div>

        </form>
    </div>
    </div>
</template>

<script>
import RecipeServices from '@/services/RecipeServices';

export default {
    name: 'HomePage',
    data() {
        return {
            filterChoice: ''
        }
    },
    methods: {
        goToPreviews(){
            console.log(this.filterChoice);
            RecipeServices.getRecipePreviews(this.filterChoice)
            .then(res => {
                if(res.data) {
                    this.$router.push(`previews/${this.filterChoice}`);
                } else {
                    alert('No Results.  Please check your spelling...');
                    this.filterChoice = '';
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    
}
</script>



<style scoped>
h1{
    font-family: monospace;
    font-style: italic;
    font-size: 100px;
    color: #c49756;
    margin-top: 5%;
}
#form-container{
    height: 100%;
    width: 100%;
    margin-top: 5%;
}
form {
    padding-bottom: 30%;
}
label{
    font-size: 20px;
}
select{
    margin-top: 10px;
    margin-right: 10px;
    height: 2rem;
    width: 15rem;
    font-size: 20px;
    text-align: center;
    font-style: italic;
}
input{
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 10px;
    height: 1.5rem;
    width: 40rem;
    font-size: 20px;
    text-align: center;
    font-style: italic;
    border: 1px darkgrey solid;
}
button{
    height: 2rem;
    width: 7rem;
    font-size: 16px;
    margin-top: 0px;
    border-radius: 10px;
    border: 1px darkgrey solid;
}

</style>