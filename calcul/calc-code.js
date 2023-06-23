
document.addEventListener('DOMContentLoaded', function() {
  let sh = document.getElementById('show');
  let numbers = document.querySelectorAll('#number'); // Get all elements with ID "number"
  let content = [];
  let clear = document.getElementById('C');
  let negative =document.getElementById('negative');
  let comma = document.getElementById('comm');
  let division=document.getElementById('division');
  let multiply=document.getElementById('multiply');
  let sum=document.getElementById('sum');
  let minus=document.getElementById('minus');
  let result=document.getElementById('equal');
  let par=document.getElementById('parenthesis');
  let isResultDisplayed = false; // Flag to track if result is displayed;
  let perc=document.getElementById('perc');

  numbers.forEach(function(number) {
    number.addEventListener('click', function() {
      if (isResultDisplayed) {
        content = []; // Clear the content if result is displayed
        isResultDisplayed = false;
      }
      if (content.length < 30) {
        content.push(number.innerHTML);
        sh.innerHTML = content.join('');
      }
    });
  });

  clear.addEventListener('click', function() {
    content.pop();
    sh.innerHTML = content.join('');
  });
  negative.addEventListener('click',function() {
    content.unshift('-');
    for(let i=content.length;i>0;i--)
    {
      if(content[i]===content[i-1] && content[i]==='-'){
        content[i]='';
        content[i-1]='';   
      }

    }
    sh.innerHTML=content.join('');
  });
  comma.addEventListener('click',function (){
    if(content.length==0)
    {
      content.push('0');
      content.push('.')
      sh.innerHTML=content.join('');
      for(let i=0;i<content.length;i++)
      {
       if(content[i]==='.'){
          for(let j=i+1;j<content.length;j++){
            if(content[j]==='.'){
              content[j]='';
            }
          }
        }
      }
    }
    else if(content.length>0){
      let nb=0;
      for(let i=0;i<content.length;i++){
        if(content[i]==='.'){
          nb++;
        }
      }
      if(nb==0){
        content.push('.');
        sh.innerHTML=content.join('');
      }

      
    }
    
    
    
    
  });
  division.addEventListener('click',function(){
    content.push('/');
    sh.innerHTML=content.join('');
  });
  multiply.addEventListener('click',function(){
    content.push('*');
    sh.innerHTML=content.join('');
  });
  sum.addEventListener('click', function() {
    content.push('+');
    sh.innerHTML=content.join('');
  });
  minus.addEventListener('click',function() {
    content.push('-');
    for(let i=0;i<content.length;i++)
    {
      if(content[i]===content[i+1] && content[i]==='-'){
        content[i]='+';
        content[i+1]='';
      }
      
    }
    
    sh.innerHTML=content.join('');
  });
  result.addEventListener('click', function() {
    let resultValue = eval(sh.innerHTML);
    sh.innerHTML = resultValue;
    content = '';
    isResultDisplayed = true;
  });
    
  
  par.addEventListener('click',function() {
    content.push('(');
    sh.innerHTML=content.join('');
  });
  par.addEventListener('contextmenu', function(event) {
    // Right-click event handler
    event.preventDefault(); // Prevent the default context menu from appearing
    console.log('Right-clicked!');
    content.push(')');
    sh.innerHTML=content.join('');
  });
  perc.addEventListener('click',()=>{
    content.push('/100');
    sh.innerHTML=content.join('');
  })
  
});

/*
*/
