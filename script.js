let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event){
  
  window.location.href = "http://bing.com"; // window. без него тоже будет работать
  event.preventDefault(); //кнопка перестанет работать
  
  //alert ('Hello world');
 });
document.body.addEventListener('contextmenu', function(event){
  event.preventDefault();
});

document.body.addEventListener('dbclick', function(event){
  event.preventDefault();
});

document.querySelector('div').addEventListener('dbclick', function(event){
  console.log(event);
  event.preventDefault();
});
