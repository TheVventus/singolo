let ul = document.querySelector('ul');
let li = document.querySelectorAll('.header_navigation li');
console.log(ul);

li.forEach(el => {
   el.addEventListener('click', function() {
       ul.querySelector('.current').classList.remove('current');
       el.classList.add('current');
   });
});

