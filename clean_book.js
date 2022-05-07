// ==UserScript==
// @name			Clean Facebook
// @description		Debloat Facebook by removing certain elements
// 
// @version 1.0.0
// @license MIT
// @author Evgeni Genchev
//
// @match *://*.facebook.com/*
// @exclude example.com
// @run-at document-start
// ==/UserScript==



// complementary
// navigation

//TODO: New navbar
//search: https://www.facebook.com/search/top?q=emil%20ko
//my_profile: https://www.facebook.com/me/
//marketplace: https://www.facebook.com/marketplace/?ref=app_tab


// TODO: Remove
// from role=banner
// remove link page , link watch, link groups, link games


// TODO: On refresh run the script again

function fuckYouFacebook(){
	var right = document.querySelectorAll('[role=complementary]');
	var left = document.querySelectorAll('[role=navigation]');
	var stories = document.querySelectorAll('[data-pagelet=Stories]');
	var vid_chat = document.querySelectorAll('[data-pagelet=VideoChatHomeUnit]');

	right[0].remove();
	left[2].remove();
	stories[0].remove();
	vid_chat[0].remove();
}

setTimeout(fuckYouFacebook, 1000);
