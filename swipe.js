function Swiper(fingerContainer, fingerId){
  // SET FINGER CONTAINER
  this.fingerContainer=fingerContainer;
  //SET FINGER ID
  this.fingerId=fingerId;
  // TIME TO WAIT FOR SWIPE INITIAION, IN MILLISECONDS
  this.waitTime=15000;
  //TIME SET TO TRANSITIONS
  this.transitionSpeed=1500;
  //EVENT TYPE FOR EVENT LISTENER
  this.eventType="touchstart";
  //THE OBJECT THAT THE EVENT LISTENER IS PLACED ON
  this.eventObj;
  //MAX SCREEN WIDTH ALLOWED
  this.maxScreenWidth=600;
  //MAX SCREEN HEIGHT ALLOWED
  this.maxScreenHeight=2000;
  //SET MAX SCREEN WIDTH ALLOWED
  this.setMaxWidth=function(width){
    this.maxScreenWidth=width;
    return this;
  };
  //SET MAX SCREEN HEIGHT ALLOWED
  this.setMaxHeight=function(height){
    this.maxScreenHeight=height;
    return this;
  };
  //SET EVENT OBJECT
  this.setEventObject=function(obj){
    this.eventObj=obj;
    return this;
  };
  //SET EVENT LISTENER EVENT
  this.setEventType=function(type){
    this.eventType=type;
    return this;
  };
  //SET WAIT TIME
  this.setWait=function(time){
      this.waitTime=time;
      return this;
  };
  //SET TRANSITION SPEED
  this.setSpeed=function(speed){
    this.transitionSpeed=speed;
    return this;
  }
  //ACTIVATE SWIPE
  this.swipe=function(){
    if(screen.width<=this.maxScreenWidth  && screen.height<=this.maxScreenHeight){
      let blockWidth=this.fingerContainer.offsetWidth;
      let waitT=this.waitTime/1000;
      //ADDS FINGER TO CONTAINER
      let addFinger=(fingerContainer)=>{
        let finger=document.createElement("DIV");
        finger.id=this.fingerId;
        finger.style.transition=`transform ${this.transitionSpeed}ms linear, opacity ${this.transitionSpeed}ms ease-in`;
        finger.style.transform=`matrix(1,0,0,1,${blockWidth},0)`;
        finger.style.opacity="1";
        fingerContainer.appendChild(finger);
        return finger;
      }
      //ADDS FINGER, MOVES IT, TRANSITIONS IT, AND REMOVES IT
      let addAndMove=(fingerContainer)=>{
        let finger=addFinger(fingerContainer);
        //ONCE FINGER IS ADDED, THIS CHANGES OPACITY AND TRANSFORM
        setTimeout(function(){
          finger.style.transform="matrix(1,0,0,1,0,0)";
          finger.style.opacity="0";
        },0);
        setTimeout(function(){
          finger.parentElement.removeChild(finger);
        },this.transitionSpeed);
      }
      //TIME VARIABLE TESTED FOR TIME SINCE LAST EVENT
      let time=0;
      //CHECKS TO SEE IF IT SHOULD START SWIPING
      let swipe=setInterval(function(){
        if(time>waitT){
          addAndMove(fingerContainer);
        }
      },this.transitionSpeed+500);
      //ADDS TO TIME VARIABLE
      let addSecond=setInterval(function(){
        time++;
      },1000);
      //CHECKS TO SEE IF EVENT OBJECT IS SET
      //IF NOT EVENT OBJECT, SWIPE STARTS AFTER WAIT TIME
      if(this.eventObj){
        console.log(this.eventObj);
        this.eventObj.addEventListener(this.eventType,(e)=>{

          time=0;
        });
      }else{
        console.log("object=" + this.eventObj);
      }
    }

  };
}
