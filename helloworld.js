function rinny (){
    const bob = Math.random()
    return Math.floor(bob * 100);

    
}

function sanj(){
    const array = [rinny(), 10, 9, 8]
    array.forEach(arr => {console.log(arr)});
}

function sup(){
    console.log("Sup, Dawg");
}

console.log("hello world")
console.log(rinny())
sanj();