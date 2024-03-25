<template>
    <div>
        Create a Thing
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">name</span>
            <input type="text" class="form-control" v-model="thing.name" placeholder="ex: Mon idée" aria-label="thing"
                aria-describedby="basic-addon1">
        </div>
        <button v-on:click="create()" type="button" class="btn btn-success">create</button>
    </div>
</template>

<script>
export default {
    name: "CreateThing",
    data(){
        return {
            thing: {
                name: ""
            }
        }
    },
    methods:{
        create(){
            console.log("CreateThing", this.thing)
            this.$store.dispatch("fluree/createThing", this.thing)
        }
    }

}
</script>

<style scoped></style>