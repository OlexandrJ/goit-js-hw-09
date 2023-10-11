new Promise((o,e)=>{let i=Math.random()>.3;setTimeout(()=>{i?o({position:2,delay:1500}):e({position:2,delay:1500})},1500)}).then(({position:o,delay:e})=>{console.log(`✅ Fulfilled promise ${o} in ${e}ms`)}).catch(({position:o,delay:e})=>{console.log(`❌ Rejected promise ${o} in ${e}ms`)});//# sourceMappingURL=03-promises.9340edbd.js.map

//# sourceMappingURL=03-promises.9340edbd.js.map
