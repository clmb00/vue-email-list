const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      numberOfMails: 0,
      mails: [],
      userNumber: 10,
      loading: false
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
      this.numberOfMails += parseInt(this.userNumber);
      for(i=0; i<n; i++) this.getMailFromApi();
    },
    clear(){
      this.mails = [];
      this.loading = false;
      this.numberOfMails = 0;
    }
  }
}).mount('#app')