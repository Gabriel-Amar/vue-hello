const root = new Vue({
    el: "#root",
    data: {
        titolo: "Salve",
        immagine: "",
        scrittaPulsante: "Mostra l'immagine"
    },
    methods:{
        mostraImmagine(){
            if(!this.immagine){
                this.titolo = "Ecco l'immagine"
                this.immagine = "https://unsplash.it/600/300?image=171"
                this.scrittaPulsante = "Cancella l'immagine"
            }else{
                this.titolo = "L'immagine è sparita"
                this.immagine = ""
                this.scrittaPulsante = "Fai tornare l'immagine"
            }
        }
    }
})