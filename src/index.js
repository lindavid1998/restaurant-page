import { loadHeader, resetPage } from './page-setup.js'
import { loadHome } from './load-home.js'
import { loadMenu } from './load-menu.js'
import { loadLocations } from './load-locations.js'
import './style.css'

// initial load
loadHeader()
loadHome()

// initialize current tab
let currentTab = 'home'

// add event listeners to each tab
let tabs = document.querySelectorAll('.nav-item')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.id !== currentTab) {
            resetPage()
            if (tab.id === 'home') {
                loadHome()
                currentTab = 'home'
            } else if (tab.id === 'menu') {
                loadMenu()
                currentTab = 'menu'
            } else {
                loadLocations()
                currentTab = 'locations'
            }
        }
    })
})