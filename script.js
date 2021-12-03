let display = document.getElementById("output")
let timer1  = (callback) => {
   setTimeout(() => {
    display.innerText="10"
    callback()
}, 1000);
}
let timer2  = (callback) => {
    setTimeout(() => {
        display.innerText="9"
        callback()
    }, 1000);
}
let timer3  = (callback) => {
    setTimeout(() => {
        display.innerText="8"
        callback()
    }, 1000);
}
let timer4  = (callback) => {
    setTimeout(() => {
        display.innerText="7"
        callback()
    }, 1000);
}
let timer5  = (callback) => {
    setTimeout(() => {
        display.innerText="6"
        callback()
    }, 1000);
}
let timer6  = (callback) => {
    setTimeout(() => {
        display.innerText="5"
        callback()
    }, 1000);
}
let timer7  = (callback) => {
    setTimeout(() => {
        display.innerText="4"
        callback()
    }, 1000);
}
let timer8  = (callback) => {
    setTimeout(() => {
        display.innerText="3"
        callback()
    }, 1000);
}
let timer9  = (callback) => {
    setTimeout(() => {
        display.innerText="2"
        callback()
    }, 1000);
}
let timer10  = (callback) => {
    setTimeout(() => {
        display.innerText="1"
        callback()
    }, 1000);
}
let final = (callback)=>{
    setTimeout(() => {
        display.innerText="🎉🎉Happy new  year🎉🎉"
        callback()
    }, 1000);
}
timer1(()=>{
    timer2(()=>{
        timer3(()=>{
            timer4(()=>{
                timer5(()=>{
                    timer6(()=>{
                        timer7(()=>{
                            timer8(()=>{
                                timer9(()=>{
                                    timer10(()=>{
                                        final(()=>{
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})