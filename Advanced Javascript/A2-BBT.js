
//AJAX function, takes function(response) as parameter
function loadJSON(callback) 
{   
    //communicate with server, update webpage without reloading it
    var xobj = new XMLHttpRequest();
    //specifies a MIME type other than the one provided by server to be used instead when interpreting the data being
    // transferred in a request
    xobj.overrideMimeType("application/json");
    //initilaize request (method, path of file to send request, bool async)
    xobj.open('GET', 'BBT.json', true); 
	
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

//print the person json data
function displayData(BbtData)
{
    console.log(BbtData);

}

//function to search episode by its name
let findByName = (BbtData,name) =>
{
    let flag = 0;
    
   //search for episodes by episode name
   for(x in BbtData._embedded.episodes)
   {
       if(BbtData._embedded.episodes[x].name == name)
       {
           flag = 1;
           console.log(`Episode with name ${name} is found`);
       }
       
   }
   
   if(flag == 0)
   {
       console.log(`Episode with name ${name} is not found`);
   }
    
    
}

//function to search by episode no. and season no.
let findBySidEid = (BbtData,sno,eno) =>
{
    
    let flag = 0;
    
   //search for episodes by both season and episode numbers
   for(x in BbtData._embedded.episodes)
   {
       if(BbtData._embedded.episodes[x].season == sno && BbtData._embedded.episodes[x].number == eno)
       {
           flag = 1;
           console.log("Episode found with details" + JSON.stringify(BbtData._embedded.episodes[x]));
       }
       
   }
   
   if(flag == 0)
   {
       console.log(`Episode not found`);
   }
    
}

//function to search all given episode ids
let findByEpisodeId = (BbtData,...eid) =>
{
   let flag = 0;
   //for more efficient search since json data sorted by episode id
   eid.sort(); 
   
   //index of eid array
   let i = 0; 
   //console.log(eid);
   
   //search for episode with an id
   for(x in BbtData._embedded.episodes)
   {
       //if an episode is not found
       while(BbtData._embedded.episodes[x].id > eid[i] && i < eid.length)
       {
           i++;
       }
       
       if(i >= eid.length)
           break;
       
       //found
       if(BbtData._embedded.episodes[x].id == eid[i])
       {
           flag = 1;
           console.log("Episode found with details" + JSON.stringify(BbtData._embedded.episodes[x]));
           i++;
       }
       
   }
   
   
   if(flag == 0)
   {
       console.log(`None of the episode ids found`);
   }  
    
}


//driver function to call other functions
let getDetails = () =>
{
 //use function callback to load json file   
 loadJSON(function(response) 
 {
    // Parse JSON string into object
    var BbtData = JSON.parse(response);
    
    //print the full json object
   // displayData(BbtData);
    findByName(BbtData,"The Fuzzy Boots Corollary");
    findByEpisodeId(BbtData,1,2915,2913);
    findBySidEid(BbtData,1,2); 
 });
}




