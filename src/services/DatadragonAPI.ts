import Axios, {AxiosResponse, AxiosError} from "axios"
import * as config from "../../config/default.json"
import {IChampion} from "../interfaces/types"

class Datadragon {
    championEndpoint:string
    Champions ={}

    constructor(){
        console.log("Datadragon api initialized!!")
        this.championEndpoint = config.datadragon.champion;
        console.log(`${this.championEndpoint}`)
    }

    async fetchAllChampions(limit:number=0){ 
        console.log("this.fetchAllChampions called")
        try {
            console.log("All champions data fetched!!!")
            const response = await Axios.get(this.championEndpoint)
            console.log(response.data.data)
            for( let champion in response.data.data){
                console.log(`Champion: ${response.data.data[champion]}`);
                this.Champions[champion] = response.data.data[champion];
            }
            return this.Champions
        } catch( e){
            console.log("Failed to fetch champions", e);
        };

    }


    getChampion(name:string){
        if( this.Champions.length == 0 ){
            console.log("Champions not fetched yet")
            this.fetchAllChampions()
                .then( () =>{
                    var that = this
                    console.log(this.Champions.length)
                    var champion = this.Champions.filter((champ:IChampion)=>{
                        console.log(champ.id, champ.name)
                        return (champ.id === name)
                    })
                    return champion
                })
        }
        
    }

    
}

var dd = new Datadragon()
console.log(dd.getChampion("Aatrox"))