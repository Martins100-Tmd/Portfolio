const MENU = document.getElementById('menulist');
function updateListCursor(e) {
   const element = e.currentTarget;
   const parent = element.parentElement;
   let length = parseInt(parent.children.length);
   for (let i = 0; i < length; i++) {
      parent.children[i].classList.remove('tag');
   }
   element.classList.add('tag');
}

var typed = new Typed('#job', {
   strings: ["I'm a Frontend Developer", "I'm a Backend developer", "I'm a fullstack Developer"],
   typeSpeed: 100,
});

const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 'auto', // Ensures
});
