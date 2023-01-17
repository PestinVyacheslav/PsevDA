let app = new Vue({
    el: "#app",
    data: {        
        DataAvtorList: avtori,
        NmAvtor: "Без значения",
        LgAvtor: "Без значения",
        Podpishchiki: 0,
        Podpiski: 0,
        Zapisi: 0,
        AvtorSort: "Standart",
        defIteam: data,
    },
    computed:{
        ByAvtors: function(){
            let SotedMasiv = this.defIteam.filter(data=>{
                if(this.AvtorSort === ''|| this.AvtorSort === "Standart"){
                    this.NmAvtor = "Все авторы";
                    this.LgAvtor = "все";
                    this.Podpishchiki = this.Podpiski =0;
                    this.Zapisi=data.length;
                    return true;
                }else{
                    if(this.AvtorSort === data.Sozdal){
                        for(let infAvt of this.DataAvtorList){
                            if(data.Sozdal == infAvt.username){
                                this.NmAvtor = infAvt.name;
                                this.LgAvtor = infAvt.username;
                                this.Podpishchiki = infAvt.pod;
                                this.Podpiski = infAvt.podpis;
                                this.Zapisi = infAvt.CountZapisi;
                            }
                        }
                        return this.AvtorSort === data.Sozdal;
                    }
            }
            });
            return SotedMasiv;
        }
    }
});