<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">This is the about Link</router-link>
    </footer>
</template>

<script>
export default{
    name: 'FooterComponent'
}
</script>

<style scoped>
    a{
        color: #333;
    }
    footer{
        margin-top: 30px;
        text-align: center;
    }
</style>