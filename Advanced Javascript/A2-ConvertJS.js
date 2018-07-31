/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global let */

//function to perform login validations using JS
var checkLoginJS = function(email,password,allUsers)
{
    var isUserFound = false
    var passwordCorrect = false
    
    for(currentUser in allUsers)
    {
        console.log(currentUser)
        
        if(allUsers[currentUser]['email'] == email)
        {
            if(allUsers[currentUser]['password'] == password)
            {
                isUserFound = true
                passwordCorrect = true
                break
            }
            else
            {
                isUserFound = true
                passwordCorrect = false
                break
            }
            
        }
        
        else
        {
            isUserFound = false
        }
           
    }
    
    if(isUserFound == true && passwordCorrect == true)
    {
        alert('You are logged in')
    }
    else if(isUserFound == true && passwordCorrect == false)
    {
        alert('You have provided incorrect password')
    }
    else
    {
        alert('No user with this email found')
    }
    
}

//function to perform login validations using ES6
let checkLoginES6 = (email="",password="",allUsers) => 
{
    let isUserFound = false
    let passwordCorrect = false
    
    for(currentUser of allUsers)
    {
     //   console.log(currentUser)
        
        if(currentUser['email'] == email)
        {
            if(currentUser['password'] == password)
            {
                isUserFound = true
                passwordCorrect = true
                break
            }
            else
            {
                isUserFound = true
                passwordCorrect = false
                break
            }
            
        }
        
        else
        {
            isUserFound = false
        }
           
    }
    
    if(isUserFound == true && passwordCorrect == true)
    {
        alert('You are logged in')
    }
    else if(isUserFound == true && passwordCorrect == false)
    {
        alert('You have provided incorrect password')
    }
    else
    {
        alert('No user with this email found')
    }
    
}

//main function to validate login credentials
let checkLogin = () =>
{
    allUsers = [{ "email" : "anu@gmail.com","password" : "password1" },{"email" : "rsatish@gmail.com","password" : "password2" }]
    //checkLoginJS("rsatish@gmail.co","password",allUsers)
    checkLoginES6("rsatish@gmail.com","password2",allUsers)
}


//function to perform bubble sort using ES6
let bubbleSortES6 = (...a) => 
{

    let swapp;
    let n = a.length-1;
    let x = a;
    
    do
    {
        swapp = false;
        
        for(let i=0; i<n; i++)
        {
            if(x[i] < x[i+1])
            {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
                
                
            }
            
        }
        n--;
    }while(swapp);
   
   for(let value of x)
   {
       console.log(value);
   }

}

//function to perform bubble sort using JS
function bubble_sort(a)
{
    var swapp;
    var n = a.length-1;
    var x = a;
    
    do
    {
        swapp = false;
        
        for(var i=0; i<n; i++)
        {
            if(x[i] < x[i+1])
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
                
                
            }
            
        }
        n--;
    }while(swapp);
   
   return x;
}

//main function to call sort function
let sortArray = () =>
{
//var a = [1,2,3,4,5];
//console.log(bubble_sort(a));    
bubbleSortES6(2,3,1,4,5);
}

//driver function to call other functions
let convertToJS = () =>
{
checkLogin();
sortArray();   
}

