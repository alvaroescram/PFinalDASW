"use strict"

let x = document.getElementsByClassName("col-md-3")

function filters(){
    let input = document.getElementsByClassName("form-control mr-sm-2")[0].value
    if (input == ''){
        return;
    }
    let select = document.getElementById("filter").value
    if(select == "Edad"){
        filterAge(input)
    } else 
    if( select == "Genero"){
        filterSex(input)
    }
}

function filterAge(val){
    for(let cards=0; cards < (x.length); cards++){
        x[cards].hidden = false
        let age = parseFloat(x[cards].getElementsByClassName("age")[0].innerHTML)
        if(val > age){
            console.log(age)
            x[cards].hidden = true
        }
    }
}

function filterSex(val){
    for(let cards=0; cards < (x.length); cards++){
        x[cards].hidden = false
        let sex = x[cards].getElementsByClassName("sex")[0].innerHTML
        if(sex != val){
            x[cards].hidden = true
        }
    }
}


