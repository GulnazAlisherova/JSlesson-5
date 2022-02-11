// let example1 = document.querySelector('#example1');
// example1.addEventListener('click', function(event){
  
//   window.location.href = "http://bing.com"; // window. без него тоже будет работать
//   event.preventDefault(); //кнопка перестанет работать
  
//   //alert ('Hello world');
//  });
// document.body.addEventListener('contextmenu', function(event){
//   event.preventDefault();
// });

// document.body.addEventListener('dbclick', function(event){
//   event.preventDefault();
// });

// document.querySelector('div').addEventListener('dbclick', function(event){
//   console.log(event);
//   event.preventDefault();
// });

// document.querySelector('div').addEventListener('dbclick', function(event){
//   alert('Hello!');
//   //event.preventDefault(); --doesn't work
// });

// document.querySelector('div').addEventListener('mousemove', function(event){
//   event.preventDefault();
// });

// let example = document.createElement('section', );
// example.style.width = '20px';
// example.textContent = '👺';
// example.style.fontSize = '1rem';
// example.style.height = '20px';
// example.style.backgroundColor = 'black';
// example.style.position = 'absolute';
// document.body.append(example);

// document.body.addEventListener('mousemove', function(event){
//   example.style.top = event.clientY + 'px';
//   example.style.left = event.clientX + 'px';
//    // console.log(event.clientX);
//    // console.log(event.clientY);
// });

let example2 = document.querySelector('#example2');

example2.addEventListener('keydown', function(event){
  console.log('keydown', event);
  if (preventList.includes(event.key)) {
    event.preventDefault();
  } 
});

example2.addEventListener('keyup', function(event){
  console.log
});