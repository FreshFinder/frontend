FreshFinder:  
============
##The Place to Find and Review Farmers' Markets

[![Code Climate](https://codeclimate.com/repos/52f04f28e30ba07a88003382/badges/ab46d8f8841f0875ddea/gpa.png)](https://codeclimate.com/repos/52f04f28e30ba07a88003382/feed)

This site can be found at www.freshfinder.us.  It is a site dedicated to finding farmers' markets and fresh food in your area using USDA data. The end goal is to be able to provide crowd-sourced reviews of the markets so that FreshFinder users have a more complete picture of market information (e.g., what is sold, what past visitors found to be good, etc).

Homepage
-------

![Homepage](https://s3-us-west-2.amazonaws.com/mappingkat/freshfinder.png)


Market Page
-----------
![Market](https://s3.amazonaws.com/bearlyhungry/market.png)



##Cloning the project

To checkout this project, get the code:

`git clone git@github.com:FreshFinder/frontend.git` (you should also grab the other services: to-the-market and reviews-api)

Go into the directory:

`cd frontend`

Install all of the gems:

`bundle`

Make sure PostgreSQL is running on your local machine. The easiest way to get up and running is to set up foreman (install gem foreman) and nginx after you've cloned all of the API repositories.  Once these steps are complete and you have nginx running (sudo nginx), you can...

`foreman start`

Go to 'localhost:8080' to checkout the site. 

*Project built on Rails 4.0.0 with a custom front end.*
