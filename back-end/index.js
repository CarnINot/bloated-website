/* WARNING TO ALL!!!!
   THIS IS SOME OF THE DUMBEST CODE I'VE EVER WRITTEN
   FOR EXAMPLE
   STATIC FILES ARE LOADED INTO A SQL DATABASE AS BLOBS
   ONLY TO BE READ OUT AGAIN
   THE COMMENTED OUT CODE IS ME USING THIS FILE AS A REPL
   I HAVE NEVER WORKED WITH JAVASCRIPT BEFORE AND I DONT
   PLAN ON DOING IT AGAIN
   ONLY USE THIS AS AN EXAMPLE OF WHAT NOT TO DO */
   
   
   
   


const http = require('http');
const url = require('url')

const fs = require('fs');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'bloatjs',
    database : 'bloatedwebsite'
});

db.connect(throwOnError('can\'t connect', 'connected to db'));

function throwOnError(failMessage,successMessage){
    return function(error, result){
	if (error){
	    //console.log(failMessage);
	    throw error
	}
	//console.log(successMessage)
;};

}

/*
function makeStaticResource(name){
    return {"type": "static",
	    "static": fs.readFileSync("./static/" + name)}
}



var database = new Map([
    ["/favicon.ico",
     makeStaticResource("favicon.ico")],
    ["/stars2bg.gif",
     makeStaticResource("stars2bg.gif")],
    ["/earthb_box.png",
     makeStaticResource("earthb_box.png")],
    ["/style.css",
     makeStaticResource("style.css")],
    ["/", { "type": "dynamic",
	    "title": "Cool-Website.XYZ",
	    "heading":"I still have not fully decided what to do with this website yet, so it is very empty right now.",
	    "articleContent":`<div>
      <h2> <a href="blog"> Check out MY BLOG </a> </h2>	
    </div>
<div class="article-content">
        <p> Stare into the void </p>
        <p id="the-void"> THE VOID </p>
    </div>`}],
    ["/blog", { "type": "dynamic",
	    "title": "Blog ~ Cool-Website.XYZ",
	    "heading":"This is my blog",
	    "articleContent":`<div>
      <a href="blog/return-to-gold-standard">
	<h2>
	  Buy Gold ~ Return to the Gold Standard
	</h2>
      </a>
              <a href="blog/get-rid-of-useless-emails"> <h2>Get Rid of Useless Emails</h2> </a>
        <a href="blog/richard-stallman-was-right-again"> <h2> Richard Stallman was Right Again </h2> </a>
    </div>`}],
    ["/blog/return-to-gold-standard",
      { "type": "dynamic",
	    "title": " Buy Gold ~ Why we should return to the gold standard",
	    "heading":"Buy Gold ~ Why we should return to the gold standard",
	    "articleContent":`<div class="article-content">
      <p> I'm sure you've all felt the pain of the <em> so called transitory </em> inflation (unless you own a big house you are planning on selling). Normally this would sound crazy, but by now we can all agree that <em> there is a problem</em>; the only way to solve this problem once and for all is to return to a pre-inflation economy.<em> We need to go back to the gold standard.</em> </p>
      <p> Why gold? Because <em> gold just keeps going up</em>. The dollar has gone down in value by nearly 90% since the 70's, but gold has gone up in value compared to the dollar by over <em> 4500%</em>. Don't believe me? Well, believe my Grandpa. He was telling me some boomer story about how my Grandma put all their savings in gold since 1970 and how that set them both up for life. <em> My Grandpa is a trustworthy guy. If you don't believe him, something's wrong with you. </em> </p>
      <p> Anyways, this is how much things would cost if we stayed on the gold standard from 1970. This isn't just inflation. If you need another way of looking at things, this is effectively how much my Grandparents pay for things because they put all their savings in gold. This is in <em> 2022 </em> dollars. </p>

      <p> Gas - 11¢/gal (currently $5/gal) </p>

      <p> McChicken from McDonalds - 4¢ (currently $1.85) </p>

      <p> Fancy Diamond Wedding Ring - $220 (currently $10,000) </p>

      <p> Trip to space - $9,900 (currently $450,000) </p>

      <p> A <em> house </em> in the <em> middle of Chicago</em> - $169/mo (currently $7,700/mo) </p>
      <ul>
	<li> 3545 N Fremont St, Chicago, IL 60657 in Lakeview </li>
	<li> 4 beds </li>
	<li> 2 and a half baths </li>
	<li> 2 fireplaces </li>
	<li> Steps away from Wrigley Field, whole foods, jewelry stores, and what ever else you need to flex on those non goldies. </li>
      </ul>

      <p> <em> Note: This is just a random house I found. Don't harrass these people.</em> </p>

      <p> This is the future Richard Nixon stole from you. Tell the president that we need to go back to the gold standard. </p>

      <p> P.S. Since I know he won't do that, here is a tip if you want to live in the same future as my Grandparents: <em> Buy Gold. </em> Get yourself on the gold standard. Other people will experience inflation while you get deflation.</p>
      <footer>
	<a href="/">
	  Cool-Website.XYZ
	</a>
      </footer>
    </div>`}],
    ["/blog/get-rid-of-useless-emails",

     { "type": "dynamic",
       "title": "Get Rid of Useless Emails ~ Cool-Website.XYZ",
       "heading":"A simple trick to get rid of all the useless emails",
       "articleContent":`<div class="article-content">
        <p> Are you the kind of person who has a kazillion unread emails? Well, I have a simple trick. Delete <em>all</em> emails that contain the words<em> Unsubscribe </em> and/or <em> LinkedIn</em>. No  real  human would send and email that contains either of those words. If you are feeling cautious, you could limit that to all emails that are older than three months and unread. I went from thousands of unread mail to a few hundered. It's such a different world to open your email and <em> see only the things you care about</em>.</p>
	<p>If you want to prevent this from happening in the future, here are a few tips you can do to preserve inbox hygiene: </p>
	<ol>
	  <li>Have a seperate email for robots and humans.</li>
	  <li>Immediately click unsubscribe when you recieve a useless email.</li>
	  <li>Be incredibly reluctant to give out your email, especially to robots.</li>
	  <li>Call out website owners who don't honor unsubscribing.</li>
	</ol>
	<footer>
	  <a href="/"> Cool-Website.XYZ </a>
	</footer>
    </div>
  `}
     

    ],
    ["/blog/richard-stallman-was-right-again",
     
 { "type": "dynamic",
	    "title": " Richard Stallman was right again ~ Cool-Website.XYZ",
	    "heading":"Richard Stallman was right again",
	    "articleContent":`<div class="article-content">
        <p> Many years ago, I managed to convince my dad to buy me the video game Minecraft. It ended up being a "shared" account between me and my sister, but I spent the most time playing. My sister recently wanted to start a Minecraft server with her friends, so I thought I could set one up using the machine this website is running on. It had been a while since either of us had played the game, so when I tried to turn it on on the family computer, I had to <em> "Join the Microsoft Family!" </em> with a Microsoft Account to keep playing.</p>
	<p> Immediately, it takes me to this terrible website and it was trying to force me to make an account. Foolishly, I decided to go along with the  website's plans, and just after I had finished making a microsoft account, it told me, <em> "There was a problem." </em> Gee, thanks. </p>
	<p> "Okay, whatever," I thought, but then when I started up the game again, it told me <em> I could play the Demo.</em> What? I have already owned the game for close to a decade, it's <em> downloaded </em> onto my computer, but I can't run it because now <em> Microsoft </em> suddenly has a problem? I looked it up, and apparently this is a common thing. Mojang even talked about it on their Twitter page, although they sort of phrased it  as if it wasn't their fault. Anyways, in the process, I got a nice glimpse of the Microsoft "family" of products, and I couldn't help feeling disgusted. They were selling this tracking app that stalks your kids for $10 a month, they were talking about making minecraft safer by integrating it with Xbox and policing what you say, and some other things so bad I don't even want to say it. </p>
	<p> Look, I bought Minecraft before Microsoft bought Minecraft. Why do I have to regularly interact with this company just to play the game? I'm running a Minecraft server on <em> my hardware </em> with clients that are also <em> my hardware</em>, not even running windows. I don't want a Microsoft account. I don't want an Xbox Gamer Tag. I wonder if any of these workers at Big Tech companies ever take a look at themselves and think, "Hmm... Maybe I shouldn't ruin the lives of millions of children by shoving DRM down their throats." I sure hope that the money was worth it. </p>
	<p> Anyways, I eventually solved the problem by performing some magic rituals, but I can't imagine that the parents of many young kids who are just getting into this game would be willing to do all that. I imagine that a few of them even paid $30 to buy a game that they already own. People always complain about how hard it is to use GNU/Linux, but I swear, It's <em> soooo </em> much worse with everything else. Everytime I have to interact with proprietary software, it's the same story of them making their products <em> horrible </em> through some half-hearted attempt to control their users. It's so bad, I can't go back to using things like Windows, even if I wanted to. Why are you still using Microsoft/Apple/Google/Amazon/proprietary anything in the current year? </p>
	<p> P.S. This server's CPU sucks so I had to host the Minecraft server somewhere else. </p>
	<p> If you want to play Minecraft, join the server <nobr><em> minecraft.cool-website.xyz</em></nobr>. Anything's allowed. If it gets too bad I'll just reset the world to a back up and actually add some rules. </p>
	<footer>
	  <a href="/"> Cool-Website.XYZ </a>
	  </footer>
    </div>`}]
]);


//createdb
//db.query('CREATE DATABASE bloatedwebsite',throwOnError('cant make db','made db'));

//createtable
//db.query('CREATE TABLE resource(id int AUTO_INCREMENT PRIMARY KEY, path VARCHAR(255), info MEDIUMBLOB)');

//add resources
database.forEach(function(data,docpath) {
    const pair = {path: docpath, info: JSON.stringify(data)};
    db.query("INSERT INTO resource SET ?",pair,throwOnError("cant add post",
							    "post added"));
});
    
*/

     
    
// javascript async is annoying so I did continuation passing style
function databaseLookUp(pathName,continuation){
    //console.log(pathName);
    db.query('SELECT * FROM resource WHERE path = ?',pathName,
	     function(error, data){
		 continuation ( error ? false : data)});
}

function templatePage(info){
    const { title , heading, articleContent} = info;
    return `<html lang="en">
<head>
    <meta charset="utf-8">
    <title> ${title} </title>
    <link rel="stylesheet" type="text/css" href="/style.css">
  </head>
  <body>
    <div>
	<h1> ${heading} </h1>
    </div>
${articleContent}
   </body></html>`;
    
}
function wrap(func,...args){
    return (...moreargs) => {
	func.apply(null,args.concat(moreargs));
    }}


function isAPICall(req){
    const regex =/^\/api.?/;
    return url.parse(req.url).pathname.match(regex);
}

function serveResponse(req,res,data){
    if (data == false){
	res.writeHead(404);
	res.write("NOT FOUND");
	res.end();
    }
    else{
	const info = JSON.parse(data[0].info.toString());
//	console.log(info);
	if (info.type == "static"){
	    const content = Buffer.from(info.static.data);
	    	res.writeHead(200);
	    res.write(content);
	    res.end();
	}
	else{
	    if (isAPICall(req)){
		res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
		res.write(JSON.stringify(info));
	    }
		
/*	    else{
		res.writeHead(200);
	    
		res.write(templatePage(info));
	    }
*/	    res.end();
	}
	
    }
}

function handleRequest(req,res){
   // console.log(isAPICall(req));
    const fullPath = url.parse(req.url).pathname;
    const lookupPath = (isAPICall(req) ? fullPath.slice(4) : fullPath);
    databaseLookUp(lookupPath,wrap(serveResponse,req,res));
    // continuation passing style deals with the rest
}



const server = http.createServer(handleRequest).listen(8000);
