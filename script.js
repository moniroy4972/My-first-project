let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr =  Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (pankaj) =>{
        if(pankaj.target.innerHTML == '='){
            string = eval(string);
            input.value  = string;

        }else if(pankaj.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else{

        
        string += pankaj.target.innerHTML ;
        input.value = string;}
    })
})