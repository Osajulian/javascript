// function reverseString(s) {
//     let strArry = [];
    
//     try {
//         strArry = s.split('')
//                           .reverse()
//                           .join('')
//     } catch(e) {
//         console.log(e.message);
//     }
//     finally {
       
//        if (strArry.length === 0) return s
//        return strArry;
//     }
    
// }

// Although this worked in VS code, it did not pass HR tests. I modified to below

function reverseString(s) {
    let strArry = [];
    let revStr = ''

    try {
        strArry = s.split('')
        strArry.reverse()
        revStr += strArry.join('')
    } catch (e) {
        console.log(e.message);
    }
    finally {

        if (strArry.length === 0) {
            console.log(s)
        } else {
            
        console.log(revStr);
        }
    }

}

reverseString('1234');