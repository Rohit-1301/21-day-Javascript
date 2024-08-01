let form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height=(document.querySelector('#height').value);
    let weight=(document.querySelector('#weight').value);
    let result=document.querySelector('#result');
    if(height==''||height<0||isNaN(height)){
        result.innerHTML=`Please give a valid height`
    }
    else if(weight==''||weight<0||isNaN(weight)){
        result.innerHTML=`Please give a valid weight`
    }
    else{
        let bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=bmi
    }
})