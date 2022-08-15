import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TheContent from './App';
import reportWebVitals from './reportWebVitals';


/* THIS IS THE LEAST REACT CODE EVER WRITTEN
   IT BASICALLY ONLY USES REACT IN THE BEGINING
   THEN IT TRIES TO IGNORE THAT REACT EXISTS */


const intermediate =Array.from(document.getElementsByTagName('body'));
const theBody = intermediate[0];
var root = ReactDOM.createRoot(theBody);


function renderStuff(heading,articleContent){
     console.log('rendered');
 }

function otherJS(arg){
    if ( arg === "withreact"){
    console.log('moved to body');
    const divWrapper =  theBody.children[0];
    console.log(divWrapper);
    theBody.removeChild(divWrapper);
    const stuffInWrapper =  Array.from(divWrapper.children);
    stuffInWrapper.forEach(el => theBody.appendChild(el));
    }
    const as = Array.from(document.getElementsByTagName('a'));
    as.forEach(a => {
	const path =new URL(a.href).pathname;
	console.log(path);
	a.removeAttribute('href');
	a.addEventListener('click',makeEventListener(path));});

}

// at this point I just gave up
function renderWithoutReact(heading,articleContent){
    theBody.innerHTML = `
<div>
<h1>` +
heading + `
</h1>
</div>` +
articleContent;
}

function makeEventListener(path){
    return  function(){
	console.log('clicked');
	console.log(path);
	fetch(apiPlace + '/api' + path).then(
	    async response =>{ var jsonFetch = await response.json()
			       	    console.log('got json stuoff');
			       console.log(jsonFetch);


			       renderWithoutReact(jsonFetch.heading,jsonFetch.articleContent);
			       setTimeout(otherJS,1,"noreact");
			     });
    
    }
}
const apiPlace = `http://localhost:8000`

fetch(apiPlace + '/api' + window.location.pathname).then( async response => {var jsonFetch = await response.json() ;

    root.render((<TheContent heading={jsonFetch.heading} articleContent={jsonFetch.articleContent} />));

									     
									     setTimeout(() => otherJS('withreact'),1);
								  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
