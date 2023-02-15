import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { color } from '@mui/system';


function App() {
  return (
    <>
    <header>
		<img src="/images/logo2.jpg" alt="Picture of logo2" height="80"/>
		<h2>Nikitta's Portfolio</h2>
	  </header>
		  <nav id="nav_menu">
			  <ul>
				  <li> <a href="../mainpage.html"> Home </a> </li>
				  <li><a href >People</a>
            		<ul>
						        <li><a href="Bri.html"> Bri </a></li>
						        <li><a href="nikitta.html"> Nikitta </a></li>
                    <li><a href="anthony.html"> Anthony </a></li>
                    <li><a href="contact.html"> Contact Us </a></li>
            		</ul>
        		</li>
			</ul>
		</nav>
	<main id="flex">	
		<div id="bio">
            <img src="/images/Nikitta.PNG" alt="Picture of Nikitta" height="80"/>
        </div>
        	<div>
				<article>
					<h2>Who am I</h2>
						<p>Hey I like to consider myself as a philanthropist, play boy and a part time
						detective. Tragically my parents died at a young age but it has shaped me to 
						fight crime in anyway possible. One thing to know about me is my digust for bats.
                    	They are disgusting flying rat creatures. In this page I wanted to show some of my 
                    	own products that can be quite useful in the right situations.  </p>
				</article>
       	 </div>
		<div>
            <aside id="flex_in" >
			  <h2>Products</h2>
				<div><h3><br/><a href="https://www.amazon.com/BROCCOLI-FRESH-PRODUCE-VEGETABLES-BUNDLE/dp/B008N8K15K/ref=sr_1_4?crid=3GUM19EXW6GAS&keywords=broccoli&qid=1653531664&sprefix=brocolli%2Caps%2C207&sr=8-4">Dota 2</a></h3>
					<img src="images/dotablue2.jpg" height="100px" alt="placeholder image 1"/>
            	</div>
				<div><h3><br/><a href="https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B000AYN7LU/ref=sr_1_2?crid=2CK9D9IHVO6L5&keywords=kong&qid=1653530986&sprefix=kong%2Caps%2C205&sr=8-2&th=1">Half-life 2</a></h3>
					<img src="images/halfblue.jpg" height="100px" alt="placeholder image 2"/>
           		</div>
				<div><h3><br/><a href="https://www.amazon.com/Skippy-Creamy-Peanut-Butter-16-3/dp/B07Y944JQR/ref=sr_1_3?crid=31VZEJ9D4KUF6&keywords=skippy+peanut+butter&qid=1653531140&sprefix=skippy+%2Caps%2C179&sr=8-3">Starcraft 2</a></h3>
					<img src="images/sc2blue.jpg" height="100px" alt="placeholder image 3"/>
            	</div>
		    </aside>
        </div>
	</main>
	
	<Clicker
	author= "jack and Jill"
	famousBooks = "jack and the beanstalk"
	/>
	<ComponentWithProps
	 name= "Nikitta's "
	 favGames= "Diablo 2, Half-life 2, Starcraft 2, Dota 2"
	/>
	<NameGames/>
	<footer>
		<p>&copy; 2022, Im not putting my actual address here, zip code</p>
	</footer> 
	</>

  );
}
function ComponentWithProps(props){
let[showFavs, setShowFavs] = React.useState(false)
if(showFavs){
	return<>
		<p> {props.name}favorite games are:<span style={{color: props.favGames}}>{props.favGames}</span>

		 <Button onMouseOver={()=>{
			setShowFavs(false)
		}}>Unshow Favs </Button>
		</p>
		
	</>
}else{
	return<>
		<p>{props.name} favorite games are: 
		<Button onMouseOver={()=>{
			setShowFavs(true)
		}}>Show Favorites </Button>
		</p>
	</>
}
}
function Clicker(props){
 let [count, setCount] = React.useState(0)
  return<>
  <p>{props.author} {props.famousBooks} </p>

  <p>Earnings {count}</p>
  <button onClick={()=>{
	setCount(count + 10000)
  }}>How much?</button>


  </>
}
function NameGames() {
	let [games, setGames] = React.useState("No data yet")

	React.useEffect(() => {
	  fetch('https://pear-bush-scraper.glitch.me//')
		.then((response) => response.json())
		.then((data) => {
		  //let firstGame = data.myGames[1].name
		  setGames(data.myGames)
		});
	})
	return <> 
	  Games: { games && games[2].name }
	  <br/><br/>

			All Time Games <br/><br/> 

			{games && <Project project={games[0]}/>}
			{games && <Project project={games[1]}/>}
			{games && <Project project={games[2]}/>}
			</>
	
  }
  function Project(props){
	return <div style={{border: "1px solid white",  color:"White", background: "black"}}> 
	  Name: {props.project.name}
	  <ul>
		
		<li>Category: {props.project.type}</li>
		<li>Ranking: {props.project.Rank}</li>
		<li>Time spent: {props.project.Time}</li>
	  </ul> 
	</div>
	
  }



export default App;
