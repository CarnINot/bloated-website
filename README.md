# bloated-website
The worst javascript website ever

I MADE THIS VERY QUICKLY FOR A BLOG POST. I HAVE NO SERIOUS PRIOR KNOWLEDGE OF REACT OR NODEJS. DON'T USE THIS WITHOUT HEAVY MODIFICATIONS.

Here is a short explanation of how the back end and front end work.

The back end has the content of all the pages of my website loaded into MariaDB in json format. The front end is the same page no matter what page you visit, then the javascript interacts with the back end the contents of the website and loads it onto the page. It does this by checking the path of the page loaded. The front end also replaces all links with calls to the API to change the contents of the webpage without doing a page reload. All the pages on my website kind of look the same so the JSON responses are like this:

{"heading" : (a few words) the stuff that goes in the first div of my site,
"articleContent" : (HTML) everything else in the body after the first div}
