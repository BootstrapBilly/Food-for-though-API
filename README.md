## What is it ?

A very small API for persisting favourited food items and portion size for the food for thought app

## The front end

https://github.com/BootstrapBilly/Food-for-thought

### Database

It connects to a mongodb database

### Endpoints 

<br/>
### Set portion size

**This endpoint sets the current portion size of the item e.g. 100g=>200g, which will then be reflected on the front end by changing the calories**

POST => https://food-for-thoughtt.herokuapp.com/set_portion_size" 

&nbsp;&nbsp;&nbsp; **title**:String - Title of the food item where the portion size is being set<br/>
&nbsp;&nbsp;&nbsp; **text**:String - Name of portion size e.g. (Half, 100g, two)<br/>
&nbsp;&nbsp;&nbsp; **multiplier**:String - Multiplier to adjust the calories on the front end<br/>

<br/>
### Get portion size

**This endpoint fetches the current portion size of the item**

POST => https://food-for-thoughtt.herokuapp.com/get_portion_size" 

&nbsp;&nbsp;&nbsp; **title**:String - Title of the food item where the portion size is being fetched

<br/>
### Add or remove from favourites

POST => https://food-for-thoughtt.herokuapp.com/toggle_favourite" 

**This endpoint makes a copy of the food item and stores it in the database, it could be more efficient by only storing the title and populating it on the front end, but for the size of the project, its not worth changing it**

**When removing it simply deletes the item from the database**

&nbsp;&nbsp;&nbsp; **title**:String - Title of the food item<br/>
&nbsp;&nbsp;&nbsp; **thumbnail**:String - Url of the thumbnail image<br/>
&nbsp;&nbsp;&nbsp; **image**:String - Url of the enlarged image in the food detail screen<br/>
&nbsp;&nbsp;&nbsp; **rating**:String - Rating of the food<br/>
&nbsp;&nbsp;&nbsp; **kcals**:String - Kcals for the standard portion of the food<br/>
&nbsp;&nbsp;&nbsp; **source**:String - Url to the nutritional data of the food<br/>
&nbsp;&nbsp;&nbsp; **pros**:Array - A list of good things about the food<br/>
&nbsp;&nbsp;&nbsp; **cons**:Array - A list of bad things about the food<br/>
&nbsp;&nbsp;&nbsp; **categories**:Array - A list of categories it falls into such as (Salad, lunch, fruit, meat, dinner)<br/>
&nbsp;&nbsp;&nbsp; **toggle_options**:Array - A list of portion sizes available for the item<br/>
&nbsp;&nbsp;&nbsp; **default_portion**:String - The default portion size for the item e.g 100g<br/>

<br/>
### Get portion favourites

GET => https://food-for-thoughtt.herokuapp.com/get_portion_size" 

**Fetches and returns all favourites from the database**



