<template>
    <button class="btn" 
    :style="{bacground: color}"
    @click="onClick()">
        {{text}}
    </button>
</template>

<script>
    export default{
        name: "Button-Component",
        props:{
            text: String,
            color: String
        },
        methods:{
            onClick(){
                this.$emit('button-click')
            }
        }
    }
</script>