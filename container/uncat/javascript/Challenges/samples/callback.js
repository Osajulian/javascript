
function go(callback) {
    return caller()
    function() {
        return 'my name is caller'
    }
}



go();