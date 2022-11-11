const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      numberOfMails: 0,
      mails: [],
      userNumber: 10,
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
      this.numberOfMails += parseInt(this.userNumber);
      for(i=0; i<n; i++) this.getMailFromApi();
    },
    clear(){
      this.mails = [];
      this.loading = false;
      this.mailsReady = 0;
      this.numberOfMails = 0;
    }
  }
}).mount('#app')