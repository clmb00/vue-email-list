const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      numberOfMails: 10,
      mails: [],
      mailsReady: 0,
      loading: false
    }
  },
  methods:{
    getMailFromApi(){
      axios.get(this.apiUrl)
       .then((mail)=>{
        this.mails.push(mail.data.response);
        this.mailsReady++
       })
       .catch((error)=>{
        this.mails.push(error.code);
        this.mailsReady++
       })
    },
    doNcalls(n = this.numberOfMails){
      this.mailsReady = 0;
      for(i=0; i<n; i++) this.getMailFromApi();
    },
    clear(){
      this.mails = [];
      this.loading = false;
      this.mailsReady = 0;
    }
  }
}).mount('#app')