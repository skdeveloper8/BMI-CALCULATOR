const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const Height=parseInt(document.querySelector('#Height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=(document.querySelector('.results'));

    if(Height===''||Height<0||isNaN(Height)){
        results.innerHTML='Please give valid Height';
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML="Please give valid Weight ";
    }
    else{
        results.innerHTML=weight/((Height*Height)/10000).toFixed(2);
    }
});

