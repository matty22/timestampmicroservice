# Timestamp Microservice

The timestamp microservice is a project I built while working through the projects in the freeCodeCamp curriculum. The app takes a URL param of either a human-readable date or a unix timestamp and returns the other.

## To Use

Go to https://matty22timestampmicroservice.herokuapp.com/ and after the last / in the URL, add either a human-readable date or a unix timestamp. The app will return the other. For example, navigating to something like: https://matty22timestampmicroservice.herokuapp.com/December%2015,%202015 would return to you an object that looks like this: 
`{"readable":"December 15, 2015","unixtime":"1450166400"}`
