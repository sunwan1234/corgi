const string = `
/*先来画柯基的脸*/
.face {
  background-color: #fff;
}
.face:after,.face:before {
   background-color: #f79e38;
}
/*接下来画眼睛*/
.eye {
  background-color: #000;
  /*加点动画*/
  animation: dog-eye 1800ms infinite;
}

.eye--left {
  left: 27%;
}

.eye--right {
  left: 46%;
}

/*画嘴巴*/
.mouth {
  border-bottom-color: #000;
  height: 48%;
  border-style: solid;
}

/*画耳朵*/
.ear--left {
    background-color: #e99036;
    /*加点动画*/
    animation: left-ear 1000ms ease-out infinite alternate;
}
.ear--right {
  background-color: #f79e38;
  animation: right-ear 1000ms ease-out infinite alternate;
}
.nose {
  background-color: #fff;
  left: -12%;
  top: -3%;
}
.nose:after {
  background-color: #000;
}

/*接下来画身体*/
.body {
  background-color: #f79e38;
}

.cheast {
  background-color: #fff;
}

.cheast:after, .cheast:before {
  background-color: #fff;
}

/*画尾巴*/
.tail {
  background-color: #f79e38;
  /*加点动画*/
  animation: dog-tail 170ms ease-out infinite;
}

.tail:before 
  background-color: #f79e38;
}

/*最后画上小短腿*/
.legs__front, .legs__back {
  width: 10%;
  background-color: #f79e38;
}

.legs__front:after, .legs__back:after {
  background-color: #fff;
}

`

export default string;