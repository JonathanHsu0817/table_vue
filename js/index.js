import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.prod.min.js"

let toolTips ='';
let tableModal =``;
let delModal = ``;

const app = {
    data(){
        return{
            baseUrl:`http://localhost:3000`,
            title:`個人資料表`,
            tempData:{},
            isNew:false,
            lists:[]
        }
    },
    methods:{
        toPhoneFormat(){
            this.lists.forEach(list=>{
                let phone =``;
                // return `${num.substr(0,4)}-${num.substr(4,3)}-${num.substr(7,3)}`
            })
        },
        getProfilesData(){
            axios.get(`${this.baseUrl}/profile`)
            .then(res=>{
                console.log(res);
                this.lists = res.data;
            })
            .catch(err=>{
                alert(err.response.data.message);
            })
        },
        updateProfilesData(){
            axios.put(`${this.baseUrl}/profile/${this.tempData.id}`)
            .then(res=>{
                alert(res.data.message);
                tableModal.hide();
                this.getProfilesData();
            })
            .catch(err=>{
                alert(err.response.data.message);
            })
        },
        delProfilesData() {
            axios.delete(`${this.baseUrl}/profile/${this.tempData.id}`)
            .then((response) => {
              alert(response.data.message);
              delModal.hide();
              this.getProfilesData();
            }).catch((err) => {
              alert(err.response.data.message);
            })
        },
        openModal(isNew,item){
            if(isNew === "new"){
                this.tempData = {}
                this.isNew = true;
                tableModal.show();
            }else if(isNew === "edit"){
                this.tempData ={...item};
                this.isNew = false;
                tableModal.show();
            }else if(isNew === "delete"){
                this.tempData ={...item};
                delModal.show();
            }
        }
    },
    computed:{
        
    },
    mounted(){
        this.getProfilesData();
        setTimeout(()=>{
            toolTips = document.querySelectorAll("#tool").forEach(t=>{
                new bootstrap.Tooltip(t);
            })
        },500)
        tableModal = new bootstrap.Modal(document.querySelector("#tableModal"));
        delModal = new bootstrap.Modal(document.querySelector("#delModal"));
    }
}

createApp(app)
  .mount("#app");