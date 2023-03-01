# challenge-18-social-net-api

## User Story
As a social media app start up
I want my ocial network to havean api that uses noSQL as a database.
SO That my webite will be able to handle large amounts of unstructured data.


### ACCeptance criteria
GIVEN a social network api
When i enter the comand to invoke the application
THEN my server is started and the mongoose models are synched to the mongoDB database
WHEN i open API GET routes in insomnia for users and thoughts
Then the data for each of these routes is displayed in a formatted JSON
WHEN i test API,POST,PUT, and DELETE routes in insomnia
THEN i am able to successfully create, update, and delete users and thoughts in my database.
WHEN i testAPI POST and DELETE routes in insomnia
THEN I am able to successfylly create and delete reactions to thoughts and add and remove friends to a users friend list.


## app
this app runs using express and mongoose.
(still-nonfunctional)
