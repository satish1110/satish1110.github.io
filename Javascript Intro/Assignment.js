
//AJAX function, takes function(response) as parameter
function loadJSON(callback) 
{   
    //communicate with server, update webpage without reloading it
    var xobj = new XMLHttpRequest();
    //specifies a MIME type other than the one provided by server to be used instead when interpreting the data being transferred in a request
    xobj.overrideMimeType("application/json");
    //initilaize request (method, path of file to send request, bool async)
    xobj.open('GET', 'pokemon.json', true); 
	
    //event handler called when readyState object changed to is "done" state or object staus is "loading/done"
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
	  {
            //text returned from server(json)  
            // Requireduse of an anonymous callback as .open will NOT return a value but simply returns undefined in 
            // asynchronous mode
            callback(xobj.responseText);
          }
    };
	
    //send request; body null since GET
    xobj.send(null);  
 }

//print the pokemon json data
function displayData(pokemonData)
{
    console.log(pokemonData);

}

//find a pokemon by name
function findByName(pokemonData,name)
{
    
    var x,flag = 0;
   
   //search in pokemon array
   for(x in pokemonData.pokemon)
   {
       if(pokemonData.pokemon[x].name == name)
       {
           flag = 1;
           console.log("pokemon "+ name + " found!" + JSON.stringify(pokemonData.pokemon[x]));
       }
       
   }
   
   if(flag == 0)
   {
       console.log("pokemon "+ name + " not found!");
   }
   
}

//find all the pokemons with this pokemon as their next evoultion
function isNextEvolution(pokemonData,name)
{
    var x,flag = 0;
   
   //search in pokemon array
   for(x in pokemonData.pokemon)
   {
       //search in pokemon's next_evolution array
       for(y in pokemonData.pokemon[x].next_evolution)
       {
        if(pokemonData.pokemon[x].next_evolution[y].name == name)
        {
           flag = 1;
           console.log("pokemon "+name+" is next evolution of " + JSON.stringify(pokemonData.pokemon[x].name));
        }
       }
       
   }
   
   if(flag == 0)
   {
       console.log("pokemon "+ name + " is not next evolution of any other pokemon");
   }
    
}

//find all pokemon with given weakness
function isWeakness(pokemonData,weakness)
{
    var x,flag = 0;
   
   //search in pokemon array
   for(x in pokemonData.pokemon)
   {
       //search in pokemon's weaknesses array
       for(y in pokemonData.pokemon[x].weaknesses)
       {
        if(pokemonData.pokemon[x].weaknesses[y] == weakness)
        {
           flag = 1;
           console.log("pokemon with this weakness: "+ JSON.stringify(pokemonData.pokemon[x].name));
        }
       }
       
   }
   
   if(flag == 0)
   {
       console.log("No pokemon has weakness "+ weakness);
   }
}

//driver function to call other functions
function getPokemon() 
{
 //use function callback to load json file   
 loadJSON(function(response) 
 {
    // Parse JSON string into object
    var pokemonData = JSON.parse(response);
    
    //displayData(pokemonData);
    findByName(pokemonData,"Ivysaur");
    isNextEvolution(pokemonData,"Venusaur");
    isWeakness(pokemonData,"Fire");
 
 });
}

