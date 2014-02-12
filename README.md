FreshFinder:  The Place to Find and Review Farmer's Markets
===========================================================

[![Code Climate](https://codeclimate.com/repos/52f04f28e30ba07a88003382/badges/ab46d8f8841f0875ddea/gpa.png)](https://codeclimate.com/repos/52f04f28e30ba07a88003382/feed)


This site can be found at www.freshfinder.us.  It is a site dedicated to finding fresh food in your area using USDA data. The end goal is to be able to have crowd-sourced reviews of the markets so that people understand the markets better (aka, what is sold, what is good, etc).

Homepage
-------

![Homepage](https://s3-us-west-2.amazonaws.com/mappingkat/freshfinder.png)


Market Page
-----------
![Market]("https://s3-us-west-2.amazonaws.com/bearyhungry/market.png")



##Cloning the project

To checkout this project, get the code:

`git clone git@github.com:FreshFinder/frontend.git` (you should also grab the other services: to-the-market and reviews-api)

Go into the directory:

`cd frontend`

Install all of the gems:

`bundle`

Make sure PostgreSQL is running on your local machine. Also, it would be ideal if after you grabbed the API repositories you set up foreman (install gem foreman), set up nginx and cloned the 'processes' repo).  Once all that is conducted and you have nginx running (sudo nginx), then you can...

`foreman start`

Go to 'localhost:8080' to checkout the site. 

*Project built on Rails 4.0.0, and uses Foundation*
