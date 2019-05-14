import Vue from 'vue';
Vue.filter('time', function (value) {
    let date=new Date(value*1000);
        let Y= date.getFullYear();
        let M= date.getMonth()+1;
        let D= date.getDate();
        M=M<10?'0'+M:M;
        D=D<10?'0'+D:D;
        return `${Y}-${M}-${D}`
  })
  
  Vue.filter('odertime', function (value) {
    let date=new Date(value*1000);
        let Y= date.getFullYear();
        let M= date.getMonth()+1;
        let D= date.getDate();
        let H= date.getHours();
        let F= date.getMinutes()
        var week = ['日','一','二','三','四','五','六'];
        var weekday='星期'+week[D];
        M=M<10?'0'+M:M;
        D=D<10?'0'+D:D;
        H=H<10?'0'+H:H;
        F=F<10?'0'+F:F;
        return `${weekday} ${Y}-${M}-${D}  ${H}-${F}`
  })



//   filters:{
//     time(value){
//         let date=new Date(value*1000);
//         let Y= date.getFullYear();
//         let M= date.getMonth()+1;
//         let D= date.getDate();
//         M=M<10?'0'+M:M;
//         D=D<10?'0'+D:D;
//         return `${Y}-${M}-${D}`
//     }
//   },