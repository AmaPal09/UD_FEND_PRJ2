# Simple Landing Project

## Description
The aim of the project was to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.
**Languages used**
- HTML
- CSS
- JS

## Project Requirements
- **Navigation**
	Navigation is built dynamically as an unordered list.
- **Section Active State**
	It should be clear which section is being viewed while scrolling through the page.
- **Scroll to Anchor**
	When clicking an item from the navigation menu, the link should scroll to the appropriate section.
- **Usability**
	All features are usable across modern desktop, tablet, and phone browsers.

## Demo
You can check the live project [here](https://amapal09.github.io/UD_FEND_PRJ2/).

## Code Examples
app.js in the JS folder contains the js script created for this landing page.
Below listed are few of the important features created as a part of this project and listed with them are the js and DOM concepts learned and implemented for the proper working of these features.

- **Dynamic Navigation Bar construnction**
`function addNavItems()` contains the code for creating the menu items in the navigation bar on page loads.
 __Important concepts used in addNavItems()__
	- createDocumentFragment()
	- createElement()
	- Element. attributes like href, innerText
	- Element.classList, and its methods add()
	- Element.appendChild()

- **Section Active State**
<<<<<<< HEAD
`function activeSection()` & ` function isInViewport()` contain the code that highlights the section that is currently visible to the use and highlights the navigation bar menu item corresponding that section.
 __Important concepts used in activeSection__
||||||| f345ce1
`function activeSection()` & ` function isInViewport()` contain the code that highlights the section that is currently visible to the use and highlights the navigation bar menu item corresponding that section
__Important concepts used in activeSection__
=======
`function activeSection()` & ` function isInViewport()` contain the code that highlights the section that is currently visible to the use and highlights the navigation bar menu item corresponding that section. 
 __Important concepts used in activeSection__
>>>>>>> 225af2e75c1c59b0cef6cee4a444c1aa051ec941
	- window.addEventListener
	- scroll event
 __Important concepts used in isInViewport__
	- Element.getBoundingClientRect()
	- window.innerHeight
	- document.documentElement.clientHeight

- **Scroll to Anchor**
`function navToSectionScroll()` implements the code that scrolls to the corresponding section when a menu item in navigation bar is clicked on.
 __Important concepts used in navToSectionScroll__
	- document.querySelectorAll()
	- Element.addEventListener()
	- click event
	- event.preventDefault()
	- Element.scrollIntoView()

- **Scroll to top button**
`function createToTopButton()`, `unction displayToTopButton()` and `function clickToTopButton()` together create a button on page loading that is displayed only when user scrolls away from the top of the page and on clicking on it, takes the user to the top of the page.
 __Important concepts used__
	- document.body.scrollTop
	- document.documentElement.scrollTop
	- getElementById()

- **Usability**
CSS Media Queries are used to set breakpoints for 4 screen sizes. These are:
	- small- max-width: 376px
	- medium- max-width: 768px
	- xl- min-width: 1200px
	- regular/default view falls between 789px and 1199px
The navigation menu items are placed under a burger menu icon for small and medium screens.
JS code `function burgerMenu()` handles its behavior.
 __Important concept used__
	- Element.classList.toggle()

## Good to have features for future enhancements
- [x] Add an active state to the navigation items when a section is in the viewport
- [x] Add a scroll to top button on the page that’s only visible when the user scrolls away from the top of the screen
<<<<<<< HEAD
- Hide fixed navigation bar while not scrolling (it should still be present on page load).
- Make sections collapsible.
||||||| f345ce1
- [] Hide fixed navigation bar while not scrolling (it should still be present on page load).
- [] Make sections collapsible.
=======
- [] Hide fixed navigation bar while not scrolling (it should still be present on page load).
- [] Make sections collapsible.
>>>>>>> 225af2e75c1c59b0cef6cee4a444c1aa051ec941
