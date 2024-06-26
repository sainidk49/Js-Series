// Immediately Invoked Function Expressions (IIFE)
let name = "Deepak";
(function () {
    console.log("hello Dk")
})(); // must have to put semicoloen


function demo(){
    console.log("hello duniya")
}
demo(); // must have to put semicoloen if use IIFE after this


(() => {
    console.log("hello Pk")
})(); // must have to put semicoloen


((user) => {
    console.log("hello " + user)
})(name); // must have to put semicoloen
