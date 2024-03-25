<template>
    <div>
        Create a Thing
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">name</span>
            <input type="text" class="form-control" v-model="thing.name" placeholder="ex: Mon idée" aria-label="thing"
                aria-describedby="basic-addon1" @keyup.enter="create()">
                <button v-on:click="create()" type="button" class="btn btn-success">create</button>
        </div>
  
    </div>
</template>

<script>
export default {
    name: "CreateThing",
    data() {
        return {
            thing_default: {
                name: ""
            },
            thing: {}
        }
    },
    created() {
        this.reset()
    },
    methods: {
        reset() {
            this.thing = Object.assign({}, this.thing_default)
        },
        create() {
            console.log("CreateThing", this.thing)
            if (this.thing.name.length < 1) {
                alert("name must be at least 1 character long")
            } else {
                this.$store.dispatch("fluree/createThing", this.thing)
                this.reset()
            }

        }
    }

}
</script>

<style scoped></style>