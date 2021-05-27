/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


console.log("File is attached");


/**
 * Define Global Variables
 *
*/
// Get all the sections in the main body
const sectionsList = document.querySelectorAll('section');

const navbarParent = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function addNavItems() {
	const navFragment = document.createDocumentFragment();

	// create a navbar menu item for each section in the index
	sectionsList.forEach((sectElement) => {

		// create a list item
		const navListItem = document.createElement('li');
		//create an anchor element to be added to the list item
		const menuLink = document.createElement('a');

		// add attributes and content to anchor link
		menuLink.href = `#${sectElement.id}`
		menuLink.innerText = sectElement.getAttribute('data-nav');
		menuLink.classList.add('menu__link');

		//add menuLink to the list item
		navListItem.appendChild(menuLink);

		//add nav item to the document fragment
		navFragment.appendChild(navListItem);

	});

	//add the navigation fragment to the navigation parent
	navbarParent.appendChild(navFragment);

}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
addNavItems();

// Scroll to section on link click

// Set sections as active
