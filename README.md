# Adding Images to Event App from a 3rd Party API

The event manager needs to add images to events going forward. She, however, does not want to upload images directly. She just needs random images that fit the category of the event. E.g if the category is "casual", she just needs an image that depicts "casual". You have been provided with an API that does just that: <https://imagegen.herokuapp.com/>

Here is your task:

1. Add an image field to the event model
2. Update the POST /events route in the event app to do these:

   - Using any HTTP request library, Send a GET request to <https://imagegen.herokuapp.com/?category=event_category> to fetch an image that matches the category of the new event (e.g <https://imagegen.herokuapp.com/?category=casual>, <https://imagegen.herokuapp.com/?category=business>)

   - append the image in the response as the event's image.

   - Submit a link to your publicly accessible repository

3. Submit a link to your repository
