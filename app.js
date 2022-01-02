//Wrap code in an IIFE
(function()
{
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let geth2 = document.querySelector('.box');

  setInterval(() => {
    geth2.classList.toggle('flash');},500);
  
  //lấy dữ liệu từ các số được nhấp vào
  buttons.forEach(function(button)
  {
    button.addEventListener('click', function(e)
    {
      let value = e.target.dataset.num; 
      screen.value += value; 
    })
  });
  //e.target là phần tử được nhấp .dataset trả về tập hợp các data-* thuộc tính trên phần tử đó:
  //Và cuối cùng, .num trả về giá trị của data-num thuộc tính.
  equal.addEventListener('click', function(e)
  {
    if(screen.value === '')
    {
      screen.value = 'Please Enter a Value';
      input = document.getElementById('a').style.fontSize = '40px';
    }
    else
    {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e)
  {
    screen.value = '';
    input = document.getElementById('a').style.fontSize = '60px';
  })
 
})(); //end IIFE
