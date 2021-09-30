// Your code here
function saturdayFun(fun = 'roller-skate'){
    console.log(`This Saturday, I want to ${fun}!`)
}

function mondayWork(work = "go to the office"){
    console.log(`This Monday, I will ${work}.`)
}

function result(a){
    wrapAdjective("||", a)

    let b = `You are ${a}!`
    return b
}

function wrapAdjective(symbol, sentence){
    /*sentence.unshift(symbol)
    sentence.push(symbol)
    */

    sentence = `${symbol}${sentence}${symbol}`

    return symbol, sentence;
}

let emphatic = result("a dedicated programmer")

//mondayWork("work from home")
