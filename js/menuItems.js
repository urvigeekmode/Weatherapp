/***********************************************
* Omni Slide Menu script - © John Davenport Scheuer
* very freely adapted from Dynamic-FX Slide-In Menu (v 6.5) script- by maXimus
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full original source code
* as first mentioned in http://www.dynamicdrive.com/forums
* username:jscheuer1
***********************************************/

//One global variable to set, use true if you want the menus to reinit when the user changes text size (recommended):
resizereinit=true;


menu[3] = {
id:'menu3', //use unique quoted id (quoted) REQUIRED!!
bartext:'RIGHT MENU',
menupos:'right',
kviewtype:'fixed', 
menuItems:[ // REQUIRED!!
//[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
["Menu"], //create header
["Dynamic Drive", "http://www.dynamicdrive.com", ""],
["What's New", "http://www.dynamicdrive.com/new.htm",""],
["What's Hot", "http://www.dynamicdrive.com/hot.htm", ""],
["Message Forum", "http://www.dynamicdrive.com/forums", ""],
["Submit Script", "http://www.dynamicdrive.com/submitscript.htm", ""],
["Link to Us", "http://www.dynamicdrive.com/link.htm", ""],

["FAQ", "http://www.dynamicdrive.com/faqs.htm", "", 1, "no"], //create two column row, requires d_colspan:2 (the default)
["Email", "http://www.dynamicdrive.com/contact.htm", "",1],

["External Links", "", ""], //create header
["JavaScript Kit", "http://www.javascriptkit.com", "_new"],
["Freewarejava", "http://www.freewarejava.com", "_new"],
["Coding Forums", "http://www.codingforums.com", "_new"]  //no comma after last entry

]}; // REQUIRED!! do not edit or remove

////////////////////Stop Editing/////////////////

make_menus();