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

//get parent element where the menu list will be added
const navbarParent = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//Get the section corresponding to the input menu item
function getCorrespondingSection(menu) {
	const sectionId = menu.getAttribute('href').substring(1);
	console.log(`getCorrespondingSection called for ${sectionId}`);
	return document.getElementById(sectionId);
};


// Get the menu item corresponding to the input section
function getCorrespondingMenu(section) {
	// get all menu items to cross check which one correspnds to section
	const menuLinksList = document.querySelectorAll('.menu__link');

	for(const menu of menuLinksList) {
		menuHref = menu.getAttribute('href').substring(1);
		if (menuHref == section.id) {
			return menu;
		}
	};

	return undefined;
};



// fuction  to check if element is in viewport
function isInViewport(elem) {
	console.log(`isInViewport called for ${elem.id}`);
	let bounding = elem.getBoundingClientRect();
	// return (bounding.top + 100 >=0 &&
	// 		bounding.left + 100 >= 0 &&
	// 		bounding.bottom <= (window.innerHeight ||
	// 							document.documentElement.clientHight) &&
	// 		bounding.right <= (window.innerWidth ||
	// 							document.documentElement.clientWidth)
	// 		);
	return (
		bounding.top +150 >=0 &&
		bounding.left +150 >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function addNavItems() {
	console.log("addNavItems started")
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

};


// Function that will create a floating to jump to top button
function createToTopButton() {
	const topButton = document.createElement('button');
	topButton.id = 'toTopBtn';
	topButton.title = 'Go to top of webpage';
	topButton.innerText = 'Top';
	topButton.classList.add('btn-scrollTop')

	//add button to the webpage
	document.body.appendChild(topButton);

};



/**
 * End Main Functions
 * Begin Events
 *
*/

//function for click events listener to scroll to section
function navToSectionScroll() {
	// get all menu list items
	const menuLinksList = document.querySelectorAll('.menu__link');

	// add the events on each menu item
	menuLinksList.forEach((menu) => {
		// get the section to which the menu points
		const menuCorrSect = getCorrespondingSection(menu);
		// add click event listener
		menu.addEventListener('click', (event) => {
			// stop from jumping to the section
			event.preventDefault();
			console.log(`click event on ${menu.innerText}`);
			// scroll smoothly to the section
			menuCorrSect.scrollIntoView({behavior: "smooth"});
		});
	});
};


// function to add scroll event listener to highlight corresponding menu item
function activeSection() {
	console.log("Active sections called");

	// add scroll event listener
	window.addEventListener('scroll', () => {
		console.log("scroll event");

		// check which section is active
		sectionsList.forEach((section) => {
			//get menuItem correspoding to this section
			const menuItem = getCorrespondingMenu(section);

			// execute if the section is in viewport
			if(isInViewport(section)) {
				console.log(`section ${section.id} is in viewport`);

				// add active classes to the navigation menu item
				menuItem.classList.add('menu__link--active');
				// add active classes to the section
				section.classList.add('section--active');
			}
			else {
				// as section is not active remove active classes from navigation menu item and section
				menuItem.classList.remove('menu__link--active');
				section.classList.remove('section--active');
   			}
		});
	});

};


// function to add events that will display to top button
function displayToTopButton() {
	console.log("Hello World");
	const toTopBtn = document.getElementById('toTopBtn');
	window.addEventListener('scroll', () => {
		console.log("adding scroll event");
		if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			toTopBtn.style.display = "block";
		} else {
			toTopBtn.style.display = "none";
		}
	});

};


//function to add event listener that will jump to top when clicked on button
function clickToTopButton() {
	const toTopBtn = document.getElementById('toTopBtn');
	toTopBtn.addEventListener('click', (event) => {
		document.body.scrollTop = 0; //For safari
		document.documentElement.scrollTop = 0; //For chrome, firefox, ie, opera, etc.
	});
};

// Build menu
addNavItems();

// Create jump to top button
createToTopButton();

// Add scroll event to display jump to top button
displayToTopButton();

//Add click event toTopButton
clickToTopButton();

// Scroll to section on link click
navToSectionScroll();

// Set sections as active
activeSection();