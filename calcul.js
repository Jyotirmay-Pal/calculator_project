let stringnum = " ";

var input =  document.getElementById('input');

let button = document.querySelectorAll('.button');
for(let i=0; i<button.length;i++) {
    button[i].addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'AC'){
        //    input.innerText = "ABCD";
        //    console.log(input);
         input.value = " ";
         stringnum = " ";
        } 
        else if(e.target.innerHTML == '='){
        // console.log('AC');
             input.value = eval(stringnum); 
        }
        else{
            console.log(e.target);
            stringnum =stringnum + e.target.innerHTML;
            document.querySelector('input').value = stringnum;
        }  
    })}