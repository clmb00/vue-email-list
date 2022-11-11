const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      numberOfMails: 10,
      mails: [],
      isReady: false
    }
  },
  methods:{
    getMailFromApi(){
      axios.get(this.apiUrl)
       .then((mail)=>{
        this.mails.push(mail.data.response);
       })
       .catch((error)=>{
        this.mails.push(error.code);
       })
    },
    doNcalls(n = this.numberOfMails){
      for(i=0; i<n; i++) this.getMailFromApi();
    }
  }
}).mount('#app')