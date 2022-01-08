//Week 3, Day 3 Homework

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

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

//Task 3.1
for(let bananas of menuLinks){
  const aEl = document.createElement('a');
  aEl.setAttribute("href", bananas.href);
  aEl.innerHTML = bananas.text;
  topMenuEl.appendChild(aEl);   //need more clarification. How does "bananas" know which element inside menuLinks to reffer to?
}                                //Does it just store as an array and start with first element?


//##################################################################################################3
// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');

// Task 4.1
subMenuEl.style.height = "100%";

// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
subMenuEl.classList.add('flex-around');

// Task 4.4
subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = '0px';

// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
var showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', (myFunction) => {  //why arrow function? Can we just use old function syntax?
  myFunction.preventDefault();
  const pressed = myFunction.target;

  if(pressed.tagName != 'A'){
    return;
  }else{
    pressed.classList.add('active');
    console.log(pressed.text)  //difference b/w text and textContent?
  }

  //Task 5.3, 5.4, 5.5                   //need to keep working on this
  // if(pressed.classList.contains('active')){
  //   showingSubMenu = false;
  //   subMenuEl.style.top = '0px';
  //   return;
  // }
  //   pressed.classList.remove('active');
//   if(pressed.classList.contains('subLinks')){
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
// Task 5.3
    if (clickedItem.classList.contains('active')) {
      clickedItem.classList.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = 0
      return
    }
    // Task 5.4
    for (let link of topMenuLinks) {
      link.classList.remove('active')
    }

    // Task 5.5
    clickedItem.classList.add('active')



});
