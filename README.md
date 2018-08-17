# Swipe
Creates a swiper best for mobile users to let them know to swipe left or right

This is a javascript api is an object that requires only 2 parameters to create it.


REQUIRES PARAMETERS:

    1. A CSS positioned element, preferably a div but that isn't necessary.  The height of the div will become the height of the moving object and the width of the div will become the distance the object travels.

    2. An id must be assigned for the moving object.  This id will be a string and will be assigned to a newly creative div within the code and should be included in your CSS and assigned the preferred background image for the object being swiped.


WHAT THE CODE WILL LOOK LIKE:

    const container=document.getElementById('thePositionedElement');

    const swiper=new Swiper(container, "swipeObject");

    swiper.swipe();


THAT'S IT! That's all that's required to create the swiper.  There are many additional features you can add to the swiper if you require more specifications. Here is a list of all the available methods on the object:


METHODS:

    setMaxWidth() - Takes 1 parameter. Sets the widest screen width you wish for the swiper to appear on. DEFAULT set to 600

    setMaxHeight() - Takes 1 parameter. Sets the highest screen height you wish for the swiper to appear on. DEFAULT set to 2000

    setEventObject() - Takes 1 parameter. The parameter is optional but highly recommended or the swiper will stay continuously moving. This parameter is the element that you would like an event listener added to in order to stop the swiper movement.

    setEventType() - Takes 1 parameter.  This parameter is a string and will be used as the event for the event listener that stops the swiper. DEFAULT set to "touchstart".

    setWait() - Takes 1 parameter.  This parameter determines the waiting time between events before the swiper is reactivated.  It requires an integer that will be used as milliseconds. DEFAULT set to 15000ms

    setSpeed() - Takes 1 parameter.  This parameter sets the time it takes from the start of the swipe to the completion of the swipe. It requires an intefer that will be used as milliseconds. DEFAULT set to 1500ms

    swipe() - Takes 0 parameters and should be the last method of the chain.  This initiates the swiping event.


THIS SWIPER ALLOWS FOR CHAINING!
All methods are able to be chained together. Combine as many as you wish. **NOTE** The last method in the chain must be the swipe() method in order to initiate the Swipe api.


HOW TO USE:

  const container=document.getElementById('thePositionedElement');

  const body=document.querySelector('body');

  const swiper=new Swiper(container, "swipeObject");

  swiper.setMaxWidth(600).setEventObject(body).setWait(20000).swipe();


**The above code does the following:

  -gets the positioned element by its id and sets it to the container variable

  -gets the body of the DOM and sets it to the body variable

  -creates a new swiper object, passing in the container and an id that will be given to the swiper object

  -sets the max with of the swiper to 600px, sets the event object to the body, sets the waiting time between events to 20000ms, and initiates the swiper which will begin after the set waiting time.


