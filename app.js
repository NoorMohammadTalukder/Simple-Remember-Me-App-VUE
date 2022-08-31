const app=Vue.createApp({
    data(){
        return{
           title:"",
           descrition:"",
           dateTime:"",
           rememberLists:[],
        }
    },
    methods:{
        setTitle(e){
            this.title=e.target.value;
        },
        setDescrition(){
            this.descrition=e.target.value;
        },
        setDateTime(){
            this.dateTime=e.target.value;
        },
        setRemember(){
            // console.log(this.title);
            // console.log(this.descrition);
            // console.log(this.dateTime);
            const list="Title:"+this.title+" Description: "+this.descrition+" Date/Time: "+this.dateTime;
            this.rememberLists.push(list);
            this.title="";
            this.descrition="";
            this.dateTime="";
        },
        remove(index){
            this.rememberLists.splice(index,1);
        }
    }
});
app.mount("#remember-me")