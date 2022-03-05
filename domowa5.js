let soldiers = [1,2,3,4,5,6,7];

function elimination(arr) {
    let survivors = [];
    for (let i=0; i < arr.length; i++){
        // Piszę pierwszy warunek po to, by gdy iteracja dojdzie do ostatniego elementu przełączyć się na kolejną tablicę
        if(i == arr.length - 1){
            survivors.push(arr[i])
            console.log(`${arr[i]} kills ${arr[0]}`)
            for(let j=0; j < survivors.length; j++){
                let finalRound = [];
                if(j == survivors.length - 1){
                    console.log(`${survivors[j]} kills ${survivors[0]}`)
                    finalRound.push(survivors[j])
                    if (finalRound.length == 1) {console.log(`${finalRound[0]} Remains alive`)}
                }
               else if (j % 2 == 0) {
                    console.log(`${survivors[j]} kills ${survivors[j+1]}`)
                }
            }
            // 2 warunek
        } else if (i % 2 == 0) {
            if(i > 0) {survivors.push(arr[i])}
            console.log(`${arr[i]} kills ${arr[i+1]}`)
            //3 warunek
        } else {
            continue;}
    }
}

elimination(soldiers);