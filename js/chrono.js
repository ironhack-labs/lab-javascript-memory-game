class Chronometer {
 
    // LLORENÇ
    
     constructor() {
       this.currentTime = 0;
       this.intervalId = 0;
       this.state = false;
   
     }

     startClick(callback) {
   
       this.intervalId = setInterval(() => {
         this.currentTime++;
         if (callback) {
           callback()
         }
       }, 1000);
         this.state=true;
   
     }
   
     getMinutes() {
       return Math.floor(this.currentTime / 60)
     }
     getSeconds() {
       return this.currentTime % 60
     }
   
     twoDigitsNumber(number) {
     
     return number < 10 ? `0${number}` : `${number}`;   
   
     }
     stopClick() {
       clearInterval(this.intervalId);
       this.state=false;

   
     }
     resetClick() {
       this.currentTime = 0;
   
     }

   }
   
   