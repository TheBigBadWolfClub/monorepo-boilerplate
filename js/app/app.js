
logElapsed = (startTime) => {
    const elapsed = (new Date()).getTime() - startTime.getTime();
    console.log('\ntotal elapsed: ' + elapsed)
}

(async () => {
    const startTime = new Date();


    logElapsed(startTime)
})();