//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address,distanceFromTown,hasNeighbours)
{
    let createManager={Address : address , distance : distanceFromTown, Neighbours : hasNeighbours}
    return typeof createManager.Address +typeof createManager.distance + typeof createManager.Neighbours;
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean


function moreAboutKaren(parents,noOfSiblings,isNuclearFamily)
{
  let moreAboutKaren={pa : parents , no : noOfSiblings,nuclear : isNuclearFamily}
 // alert(typeof moreAboutKaren.nuclear)
  if ( typeof moreAboutKaren.pa === typeof "" && typeof moreAboutKaren.no === 'number' && typeof moreAboutKaren.nuclear === 'boolean')
  return true
  else
  return false
}



//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(agetext,agenumber)
{

    if (agetext === 'NaN'  ||  agenumber === 'NaN')
    {
    return  agetext
    }
    if (isNaN(agetext) || isNaN(agenumber) )
    return NaN
    
    
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalno,consumed,consumedinmeter, meterstotravel)
{
if (isNaN(totalno) ||isNaN(consumed) || isNaN(consumedinmeter) || isNaN(meterstotravel))
return "No sweets for Karen's friend"
if (totalno === 0 && consumedinmeter === 0 &&  consumed === 0 && meterstotravel === 0)
return totalno;
if (consumedinmeter < meterstotravel)
return 0
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(data)
{
    if (typeof data === 'undefined' || typeof data === 'string' || typeof data === 'object')
    return 'Technical Error!'
    else
    return (5/9*(data-32))
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice)
{
    if (choice === 1)
    return 'Take her daughter to a doctor'
    else if(choice ===2)

        return "Talk to her husband about it";
    
    else if(choice===3)
    
        return "Counsel her daughter herself";
    
    else if(choice===4)
    
        return "Lock her daughter in her room";
    
    else if (choice === -1 )
    return  'Break down and give up all hope'
    else if (typeof choice === 'undefined')
    
    return "Wasn't able to decide"
    else
    return 'Refused to do anything for Karen'
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies)
{
    var singlevar="";
    for (const i of strategies) {
        singlevar+=" "+i;
    }
    return singlevar.length;
}