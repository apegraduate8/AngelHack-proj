"use strict"

const Anthony = {
  getName(reqParams){
    let r = reqParams.id.split(" ")

    let j = r.length-1;
    let p = r[j];
    let d = p.split("");
    d.pop();
    console.log(parseInt(d[d.length-1]))
    if( !Number.isNaN(Number(d[d.length-1])) ){
        d.pop()
         console.log("d again", d)
    }
    let y = d.join("");
    let final = r[0] + " " + y;
    return finale
  }
}

module.exports = Anthony;

