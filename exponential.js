    // Find the Power of a Number using for Loop

    const calculator = document.querySelector(".cal");
    const keys = document.querySelector(".line");

    keys.addEventListener("click",function(e){
        if (e.target.matches("button")){
            // Do something
        }
    });
    
    const key =e.target
    const action =key.dataset.action


    if (!action){
        console.log("number key!")
    }


    if(
        action ==="add"  ||
        action ==="subtract" ||
        action ==="sqrt" ||
        action ==="multiply" || 
        action ==="divide"
    ){
        alert("operator key!")
    }


    if (action==="decimal"){
        alert("decimal key!")
    }

    if (action==="clear"){
        alert("clear key!")
    }

    if (action==="calculate"){
        console.log("equal key!")
    }





    // let equal = document.getElementById("equal");

    // equal.addEventListener(click,equalto)
    // function equalto(event){
        
    // }



    // inputs.addEventListener("click",function(numPower){






















    // let basenum = prompt("Enter Base Number")
    // let exponum = prompt("Enter Exponential Number")

    // var inputs = document.getElementById("Exp");
    // function numPower(exp, pow) {
    // var num=1;


    // for(var i=0;i<pow; i++){
    // num=num*exp;
    // }
    // return num;
    // }
    // // })

    // alert(numPower(basenum,exponum));
    // return numPower(basenum,exponum);
