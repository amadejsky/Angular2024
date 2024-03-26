
export class LoggingService{
   active: number =2 ;
   inactive: number = 2;

   incrementActive(){
    this.active++;
    if(this.inactive>0){
        this.inactive--;
    }
    console.log('Active users amount ' +this.active);
   }

   incrementInactive(){
    this.inactive++;
    if(this.active>0){
         this.active--; 
    }
    console.log('Incative user/s amount '+this.inactive);
   }
}