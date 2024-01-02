import { action, computed, makeAutoObservable,makeObservable, observable,runInAction } from "mobx"
import axios from 'axios';
class Services{
    data=[];
    constructor() {
        makeObservable(this,{
            data: observable,
            addService:action,          
            getServices: computed,
            countServices:computed
        })
        for (let i = 0; i < this.data.length; i++) {
            this.addService(this.data[i]);           
        }
    }
    get getServices(){        
         axios.get("http://localhost:8787/services").then((res)=>{
            runInAction(()=>{
              this.data = res.data;
            })
         });
        return this.data; 
    }

    addService(s) {
        fetch("http://localhost:8787/service",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(s)
        })
    }

    get countServices()
    {
        return this.data.length;
    }

    

}

export default new Services();


