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

onload = () => {
   let path = location.pathname.split('/')[1].split('.')[0];
   let element = document.getElementById(path);
   console.log(path, element);
   element.classList.add('tag');
};

function reLocate(path) {
   window.location.pathname = path;
}

function socialLinks(url) {
   window.location.href = url;
}

new Typed('#job', {
   strings: ['I am a Frontend Developer', 'I am also a Backend developer', 'I am basically a Fullstack Developer'],
   typeSpeed: 100,
});
