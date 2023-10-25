 let result = document.querySelector("#result")
 let button = document.querySelectorAll("button")

 let string = "";
 let arr = Array.from(button)

 arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            result.value = string
        }

        else if(e.target.innerHTML == "C"){
            string = "";
            result.value =string
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1)
            result.value = string
        }

        else{
            
        string += e.target.innerHTML;
        result.value = string;
        }
    })
 })