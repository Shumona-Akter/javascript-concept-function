function run(runs){
    let totlOddRun = 0;
    for(let i = 0; i < runs.length; i++){
        const runIndex = [i];
        const runElement = runs[runIndex];
        if(runElement % 2 !== 0){
            totlOddRun = totlOddRun + runElement;
        }
    }
    return totlOddRun;
}


const oddRun = run([30, 43, 60, 55, 71, 5, 100, 110, 123, 0, 17]);
console.log(oddRun)