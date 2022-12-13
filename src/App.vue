<template>
  <div class="container">
      <Header title="Task Tracker" 
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"/>


        <router-view :showAddTask="showAddTask"></router-view>

        <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',

    components: {
      Header,
      Footer
    },

    data(){
      return{
        showAddTask: false
      }
    },

    methods:{

      toggleAddTask(){
        this.showAddTask = !this.showAddTask
      }
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  width: 650px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container{
  border: 1px solid rgb(89, 178, 89);
  padding: 24px;
  width: 100%;
}

  .btn{
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }

  .btn:focus{
    outline: none;
  }
</style>
