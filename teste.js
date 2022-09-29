function espressoFunction(testNumber) {
    if(testNumber <= 1){
        return 1;
    }
    return espressoFunction(testNumber -1) + espressoFunction(testNumber - 2)
}

console.log(espressoFunction(10))
