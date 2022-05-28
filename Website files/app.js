const navBarList = document.getElementById('navBarList');
const navBarItems = document.getElementsByClassName('navBarItem');

const firstNavItem = document.getElementById('firstNavItem');
const secondNavItem = document.getElementById('secondNavItem');
const thirdNavItem = document.getElementById('thirdNavItem');
const fourthNavItem = document.getElementById('fourthNavItem');


const css = 'cursor: pointer; height: 45%; font-size: 2em; margin: 1%;';

for( let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener('mouseover', function(event) {
        navBarItems[i].style.cssText += css;
        event.preventDefault();
    });

    navBarItems[i].addEventListener('mouseleave', function(event) {
        navBarItems[i].style.cssText -= css;
        event.preventDefault();
    });
}

firstNavItem.addEventListener('click', function() {
    document.getElementById('sectionOne').scrollIntoView({behavior:'smooth', block:'center'});
});

firstNavItem.addEventListener('mouseover', function() {
    firstNavItem.style.color = 'darkorange';
});

secondNavItem.addEventListener('click', function() {
    document.getElementById('sectionTwo').scrollIntoView({behavior:'smooth', block:'center'});
});

secondNavItem.addEventListener('mouseover', function() {
    secondNavItem.style.color = '#0099ff';
});

thirdNavItem.addEventListener('click', function() {
    document.getElementById('sectionThree').scrollIntoView({behavior:'smooth', block:'center'});
});

thirdNavItem.addEventListener('mouseover', function() {
    thirdNavItem.style.color = 'yellow';
});

fourthNavItem.addEventListener('click', function() {
    document.querySelector('footer').scrollIntoView({behavior:'smooth', block:'center'});
});

fourthNavItem.addEventListener('mouseover', function() {
    fourthNavItem.style.color = 'black';
});

const button = document.getElementById('button');

button.addEventListener('mouseover', function(event) { 
    button.style.cursor = 'pointer';
    button.style.cssText += "height: 17%; width: 12%; font-size: 1.7em; margin-top: 5%; margin-right: 7.5%";
    event.preventDefault();
});

button.addEventListener('mouseleave', function(event) {
    button.style.cssText -= "";
    event.preventDefault();
});



button.addEventListener('click', function() {
    navBarList.scrollIntoView({behavior:'smooth', block:'center'});
});