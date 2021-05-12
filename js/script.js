// Task 3.0     Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1.0
const mainEl = document.querySelector('main');
//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3
mainEl.classList.add('flex-ctr');


//Task 2.0
const topMenuEl = document.getElementById('top-menu');
//Task 2.1
topMenuEl.style.height = '100%';
//Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Task 2.3
topMenuEl.classList.add('flex-around');

//3.1
for(let link of menuLinks) {
  const linkTag = document.createElement('a');
  linkTag.setAttribute('href', link.href);
  linkTag.innerHTML = link.text;
  topMenuEl.append(linkTag);
}
//4.0
const subMenuEl = document.getElementById('sub-menu');

//4.1
subMenuEl.style.height = '100%';

//4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//4.3
subMenuEl.classList.add('flex-around');
console.log(subMenuEl)
//4.4
subMenuEl.style.position = 'absolute';

//4.5
subMenuEl.style.top = '0';

//5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

//5.2
topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  const link = evt.target //target is what fired the event
  // console.log(link);
  if (link.tagName != 'A'){
    console.log(link.tagName);
    return;
  } else {
    console.log(link.textContent);
  }
// 5.3
  const checker = link.classList.contains('active');
  console.log(checker)
  if(checker === 'active'){
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
  }
  //5.5
  if(!checker){
    link.classList.add('active');
  }
});
// 5.4
