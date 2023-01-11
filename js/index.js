import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.prod.min.js";


let tooltipList = "";

const app = {
    data(){
        return{
            title:`個人資料表`,
            lists:[
                {
                    name:"邱小甘",
                    nameInEnglish:"Peter",
                    gender:"男",
                    cellphone: "0988797548",
                    email: "cccexample@gmail.com"
                },
                {
                    name:"蔡凡昕",
                    nameInEnglish:"Allen",
                    gender:"男",
                    cellphone: "0985342835",
                    email: "wwexample@gmail.com"
                },
                {
                    name:"趙雪瑜",
                    nameInEnglish:"Sharon",
                    gender:"女",
                    cellphone: "0968524127",
                    email: "68example@gmail.com"
                },
                {
                    name:"賴佳蓉",
                    nameInEnglish:"Yoki",
                    gender:"女",
                    cellphone: "0985557425",
                    email: "862xample@gmail.com"
                }
            ]
        }
    },
    methods:{
        hoverTooltips(){
            
            
        }
    },
    mounted(){
        
        document.querySelectorAll("#tool").forEach(t=>{
            new bootstrap.Tooltip(t);
        })
    }
}

createApp(app)
  .mount("#app");