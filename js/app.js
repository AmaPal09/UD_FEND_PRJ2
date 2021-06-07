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

// console.log("File is attached");

document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Define Global Variables
	 *
	*/
	// const t0 = performance.now();
	// Get all the sections in the main body
	const sectionsList = document.querySelectorAll('section');

	//get parent element where the menu list will be added
	const navbarParent = document.querySelector('#navbar__list');


	/**
	 * End Global Variables
	 * Start Helper Functions
	 *
	*/

	/*
	* @description: get the section for given menu item
	* @param {document element} menu - Nav bar menu item
	* @return {document element} section - section of the html page
	*/
	function getCorrespondingSection(menu) {
		const sectionId = menu.getAttribute('href').substring(1);
		// console.log(`getCorrespondingSection called for ${sectionId}`);
		return document.getElementById(sectionId);
	}


	/*
	* @description: get the nav menu item for give document section
	* @param {document element} section - section of html page
	* @return {document element} menu - Nav bar menu item
	*/
	function getCorrespondingMenu(section) {
		// get all menu items to cross check which one correspnds to section
		const menuLinksList = document.querySelectorAll('.menu__link');

		for(const menu of menuLinksList) {
			menuHref = menu.getAttribute('href').substring(1);
			if (menuHref == section.id) {
				return menu;
			}
		}
		return undefined;
	}


	/*
	* @description: check if document element is in viewport or not
	* @param {document element} elem - section of html page
	* @return {bollean} true/false - is or is not in viewport
	*/
	function isInViewport(elem) {
		// console.log(`isInViewport called for ${elem.id}`);
		let bounding = elem.getBoundingClientRect();
		return (
			bounding.top +150 >=0 &&
			bounding.left +150 >= 0 &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
	}


	/**
	 * End Helper Functions
	 * Begin Main Functions
	 *
	*/

	/*
	* @description: Populate nav bar dynamically with menu items
	* @param {}
	* @return {}
	*/
	function addNavItems() {
		// console.log("addNavItems started")
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


	/*
	* @description: Create a button to scroll to the top of the screen
	* @param {}
	* @return {}
	*/
	function createToTopButton() {
		//create new buttom element
		const topButton = document.createElement('button');

		// add attributes to the button
		topButton.id = 'toTopBtn';
		topButton.title = 'Go to top of webpage';
		topButton.innerText = 'Top';
		// add classes
		topButton.classList.add('btn');
		topButton.classList.add('btn-scrollTop');

		//add button to the webpage
		document.body.appendChild(topButton);
	}



	/**
	 * End Main Functions
	 * Begin Events
	 *
	*/

	/*
	* @description: add scrolling event listeners to nav bar menu items so that when clicked on, they scroll to corresponding section
	* @param {}
	* @return {}
	*/
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
				// console.log(`click event on ${menu.innerText}`);
				// scroll smoothly to the section
				menuCorrSect.scrollIntoView({behavior: "smooth"});
			});
		});
	}


	/*
	* @description: Add scroll event listeners which will highlight the section in viewport and its corresponding menu item
	* @param {}
	* @return {}
	*/
	function activeSection() {
		// console.log("Active sections called");
		// add scroll event listener
		window.addEventListener('scroll', () => {
			// console.log("scroll event");
			// check which section is active
			sectionsList.forEach((section) => {
				//get menuItem correspoding to this section
				const menuItem = getCorrespondingMenu(section);

				// execute if the section is in viewport
				if(isInViewport(section)) {
					// console.log(`section ${section.id} is in viewport`);
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
	}


	/*
	* @description: Add scroll event on the to Top button so that it is displayed when user scrolls away from the top of the page
	* @param {}
	* @return {}
	*/
	function displayToTopButton() {
		// console.log("Hello World");
		// get the button element
		const toTopBtn = document.getElementById('toTopBtn');
		// add event listener to display button when scrolling
		window.addEventListener('scroll', () => {
			// console.log("adding scroll event");
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				toTopBtn.style.display = "block";
			} else {
				toTopBtn.style.display = "none";
			}
		});
	}


	/*
	* @description: Add click event listener on the to top button so that user jumps to the top of the page on clicking it
	* @param {}
	* @return {}
	*/
	function clickToTopButton() {
		// get the button element
		const toTopBtn = document.getElementById('toTopBtn');
		// add event listener to check when button is clicked
		toTopBtn.addEventListener('click', () => {
			document.body.scrollTop = 0; //For safari
			document.documentElement.scrollTop = 0; //For chrome, firefox, ie, opera, etc.
		});
	}


	/*
	* @description: Add toggle feature to the burger navbar displayed on
	small screens
	* @param {}
	* @return {}
	*/
	function burgerMenu() {
		const burger = document.querySelector('.hamburger');

		//add click event to display navbar menu
		burger.addEventListener('click', () => {
			navbarParent.classList.toggle('navbar__list--active');
		});
	}



	/**
	 * End Event Functions
	 * Begin Function Calls
	 *
	*/

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

	// burger menu toggle function
	burgerMenu();

	/**
	 * End Function Calls
	 *
	*/
	// const t1 = performance.now();
	// console.log(`Code took ${t1-t0} miliseconds`);
});