const root = new Vue({
    el: "#root",
    data: {
        titolo: "Salve",
        immagine: ""
    },
    methods:{
        mostraImmagine(){
            this.titolo = "Ecco l'immagine"
            this.immagine = "https://unsplash.it/600/300?image=171"
        }
    }
})