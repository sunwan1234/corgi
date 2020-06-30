const string = `/*你好我是一名前端新人，
今天我们来用CSS画一只可可爱爱的柯基
先来画柯基的脸*/
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

.tail:before {
  background-color: #f79e38;
}

/*最后画上小短腿*/

.legs__back {
  width: 10%;
  background-color: #f79e38;
}

.legs__front:after{
  background: #fff;
}

.legs__back:after {
  background: #fff;
}

.legs__front--left {
  left: 38%;
  transform: rotate(1deg);
  width: 10%;
  background-color: #f79e38;
}

.legs__front--right {
  left: 20%;
  transform: rotate(-4deg);
  width: 10%;
  background-color: #f79e38;
}

.legs__back--left {
  left: 69%;
  transform: rotate(-7deg);
  width: 10%;
  background-color: #f79e38;
}

.legs__back--right {
  left: 85%;
  transform: rotate(2deg);
  width: 10%;
  background-color: #f79e38;
}







`

const player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight + 20000
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()
