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

document.addEventListener('DOMContentLoaded', () => {
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

	/*
	* @description: get the nav menu item for give document section
	* @param {document element} section - section of html page
	* @return {document element} menu - Nav bar menu item
	*/
	function getCorrespondingMenu(section) {
		// get all menu items to cross check which one correspnds to section
		const menuLinksList = document.querySelectorAll('.menu__link');

		for(const menu of menuLinksList) {
			if (menu.innerText == section.getAttribute('data-nav')) {
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
		const navFragment = document.createDocumentFragment();

		// create a navbar menu item for each section in the index
		sectionsList.forEach((sectElement) => {
			// create a list item
			const navListItem = document.createElement('li');

			// add attributes and content to list item
			navListItem.innerText = sectElement.getAttribute('data-nav');
			navListItem.classList.add('menu__link');

			//add click event listener to the item to scroll to corresponding section on click
			navListItem.addEventListener('click', () => {
				sectElement.scrollIntoView({behavior: "smooth"});
			});

			//add nav list item to the document fragment
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
	* @description: Add scroll event listeners which will highlight the section in viewport and its corresponding menu item
	* @param {}
	* @return {}
	*/
	function activeSection() {
		// add scroll event listener
		window.addEventListener('scroll', () => {
			// check which section is active
			sectionsList.forEach((section) => {
				//get menuItem correspoding to this section
				const menuItem = getCorrespondingMenu(section);

				// execute if the section is in viewport
				if(isInViewport(section)) {
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
		// get the button element
		const toTopBtn = document.getElementById('toTopBtn');
		// add event listener to display button when scrolling
		window.addEventListener('scroll', () => {
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

	// Set sections as active
	activeSection();

	// burger menu toggle function
	burgerMenu();

	/**
	 * End Function Calls
	 *
	*/
});