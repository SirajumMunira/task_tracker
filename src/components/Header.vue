<template>
    <header>
        <h1>
            {{title}}
        </h1>
        <Button v-show="homePage" @button-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add task'" 
        color="green"/>
    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header-Component',
    components:{
        Button
    },
    props:{
        title: String,
        showAddTask: Boolean
    },
    computed:{
        homePage(){
            if(this.$route.path === '/'){
                return true
            }
            else{
                return false
            }
        }
    }
}
</script>

<style scoped> 
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>