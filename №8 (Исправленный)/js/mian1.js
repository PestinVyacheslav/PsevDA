let app = new Vue({
    el: "#app",
    data: {
        defIteam: null,
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.defIteam = respose.data)
    } 
});