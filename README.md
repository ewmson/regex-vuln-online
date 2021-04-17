# Regex Vuln Online

This project is a simple extension of previous work by davisjam https://github.com/davisjam/vuln-regex-detector. 
This makes the regex detector available online to hopefully make it much easier to query
(and also to have some fun writing some typescript + react :) ).


This will likely be very loosely supported in my spare time and intended for occasional use 
(if you want to use the detection  for a lot of regex, run the detector on your local servers :) ).


## src
Stores the code for the front-end which takes regex and feeds back anything that is detected.

## server
The api the frontend will talk to that determines if the regex is vulnerable and with what string.


## shared

A shared set of types used by the frontend and the server to communicate.
Not going to be push safe, but I expect not enough people will use this for it to matter.