# CV

The assignment is a web based CV about myself created with HTML5, CSS and JavaScript. 
The CV created is a single-page app. This can be seen when clicking on any of the ‘a’ tags such as profile or achievements, on the navigation bar, the page scrolls down to the relevant section instead of redirecting to a new page. This was done by giving the headers id’s which also links in to the ‘href’ on the navigation bar. 
 
However, there is one additional page which is linked to the CV. When clicking on the send message button, CV page redirects to a page where people can send me a message if they have any questions. 

<a href="#profile">Profile</a>
<h2 id="profile">Profile</h2>

One of the main issues I faced during the development process was rather simple, which was not being able to link the navbar to each of the headings on the CV page.  The reason for this is because I did not include ‘#’ tag after the ‘href’. Therefore, when I clicked on the on ‘a’ tags on the nav bar, they didn’t do anything.  I managed to solve this issue by looking back at the lab work we did in Week 2. I noticed that we included the # tag after the ‘href’. Once I included this in my CV, it then worked. When I clicked on the relevant 'a' tag i.e. profile, it took me to the right heading (profile) of the CV.  
			
