# PORTFOLIO WEBSITE

[View Website Here](https://chrispylcfc.github.io/Portfolio-Website/).

## SKETCHES

- Mobile Design sketches of my portfolio website.
- Each page is a section of the Single Page Website.
- Tablet & Desktop styles in comparison to mobile:
  - Differ with header having an image instead of colour background.
  - Fixed navigation bar at the top.
  - Each article in each section are beside each other the larger the screen.

![Header, About Me & Projects Page Sketches](images/sketches/sketch1.png)

![Skills & Education Page Sketches](images/sketches/sketch2.png)

![Experience, Contact Me & Footer Page Sketches](images/sketches/sketch3.png)

## KEY FEATURES

- Mobile Navigation - Press Hamburger, Overlapping page with semi-transparent background is shown with each link.
- The hamburger button animates when pressed to show the menu by rotating 90 degrees. This was done using Key Frames in CSS.
- Smooth Scroll when any links are pressed - Using scroll-behavior CSS property.
- Google Maps API, Responsive as location remains central when page size is altered.
- Contact Me modal is nice as it doesn't clutter up the website as it only displays when wanted and also shows nice use of JS.
- Header picture for Tablet/Desktop screens works well as the main focus of the image is seen on both screen sizes.
- The use of a 3rd Party Library for typewriting in Header has the desired effect.
- I have used CSS Flexbox throughout the website in order to layout the content and i feel this has worked successfully.

## ISSUES

- Unable to create a timeline with items either side for the larger screen sizes. This was because the example was not developed mobile first and adapting to mobile first was more difficult than i expected.
- Struggled to fit any animations / JSON api in to the website without it feeling random and out of place.
- The skills section isn't as good as i would have liked, this is partly due to the fact I struggled to find logo pictures of similar size and style. In future could adapt and use a third party programming logos - similar to font awesome.
- Coming up with the content for the website so in various places, dummy 'lorem ipsum' text is used as a placeholder. However the sections are still clear and distinct on what they will be about.
- Lastly avoiding excessive use of divs in the HTML has been difficult, i have used HTML5 semantic elements throughout but have used divs in order to group specific items together in order to either apply styling or use features like CSS Flexbox.


## DESIGN CONSIDERATIONS




#### PARC

| PRINCIPLE       | JUSTIFICATION |
|:---------------:|:-------------:|
| **Proximity**   | Proximity is achieved by having logical sections for the content and keeping all relevant items together. For example the projects are all very close together especially on desktop as the projects can be seen on one row.
| **Alignment**   | All the different sections are similarly aligned and positioned so that they are all aligned together. None of the content on the website is randomly placed, this is to avoid any confusion for the user and makes it easier on the eye to read the content. |
| **Repetition**  | The website takes in to consideration the design aspect of repetition by applying similar styles to all the different sections and controls on the website, thus giving everything the same look and feel. |
| **Contrast**    | The contrast has been achieved with various aspects of the website a different colour to highlight it. For example the footer and modal have a different coloured background to the rest of the elements on the sites. |

After putting the website through an accessibility checker it pointed a key contrast issue with the black text on a light grey background, after seeing this i have now changed the background of alternate table rows to be a much darker grey and with white text.

#### SITEMAP
Due to the website being a single page app a sitemap wouldn't be appropriate because there are no other html pages other than the index.html and one of the primary reasons for a sitemap is to help discover the different pages a website has.

## USER FEEDBACK

> Some of the colour scheme contrasts aren't clear enough. E.g. the button on the modal is one instance of this.

> The Navigation for the website is simple and accessible.

> External links to project GitHub repositories could have been useful.

> No success message upon form submit.

To satisfy the feedback that was presented to me by a user, I directly inverted the colours of the button on the modal, so that the background had a colour with white text. This meant that the button is now clearly visible on the modal. Unfortunately regarding the feedback about having links to projects GitHub repositories, I was unable to do this as the repositories for them are private so even if a link was provided, they wouldn't have been able to see anything. In the future I plan to flesh out the projects section with more detail including more images so that the user gets a better feel for the project and what was undertaken. Lastly in terms of a success message on form submit, because there is no backend for the website this was not possible to do in the way I would have liked, with the only option an alert dialog which would be more obtrusive to the user.

## REFERENCES

#### IMAGES / ICONS

- **Logos:**
  - HTML: https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png
  - CSS: https://designapp.io/assets/main/images/logos/css.png
  - JS: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
  - C: https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png
  - Java: http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector-768x768.png
  - Python: https://www.python.org/static/community_logos/python-logo-master-v3-TM.png
  - Django: https://www.djangoproject.com/s/img/logos/django-logo-negative.png
  - MySQL: http://2.bp.blogspot.com/-1e1iVGCYpbQ/VF9UFzkdi2I/AAAAAAAAGhw/8EzVGUQF_3M/s1600/Logo%2BMySQL.png
  - PHP: https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png
  - GitHub: https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png
  - MS Office: http://ncmedia.azureedge.net/ncmedia/2014/10/Ofc_rgb_Orng166_D.png
  - MATLAB: https://i1.wp.com/eodhistoricaldata.com/knowledgebase/wp-content/uploads/2017/06/MATLAB-.png?fit=498%2C500&ssl=1


- **Projects:**
    - Rock Paper Scissors: http://static1.squarespace.com/static/595543f6b11be1695b0fdb29/t/59555414cd0f68572370bb64/1498764324553/DFP-RockPaperScissors-Black.png?format=1000w
    - Coming Soon: https://cdn.dribbble.com/users/180057/screenshots/2256895/comingsoon.jpg


- Header: https://www.healthnutnews.com/wp-content/uploads/2016/03/bigstock-Office-Workplace-With-Open-Lap-93619313.jpg
- Font Awesome Icons: http://fontawesome.io/icons/


#### TUTORIALS

- Timeline Tutorial 1: https://www.w3schools.com/howto/howto_css_timeline.asp
- Timeline Tutorial 2: https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528
- Modal Tutorial: https://www.w3schools.com/howto/howto_css_modals.asp
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/


#### 3RD PARTY LIBRARIES

- Typewriter JS: https://safi.me.uk/typewriterjs/
