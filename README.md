# How to compile sass:
## 1. Do some installation
## 1.1 sudo apt-get update
## 1.2 sudo apt-get install rubygems
## 1.3 sudo apt install ruby-sass

## 2. Compile scss in platform 

## 3. We have in our css folder new file - lms-main-v1.css, now we do copy this file and give a temporary name, for example: time-lms-main-v1.css

## 4. We replace our file in sass:

//import the original styles from edx-platform<br>
// @import "lms/static/sass/lms-main-v1";<br>
@import "../css/time-lms-main-v1.css"; - it is our temporary files which contains style from platform <br><br>

## 5. In your console from static folder where is a config.rb you type: 
    sass --watch sass/lms-main-v1.scss:css/lms-main-v1.css
###### And now you can work with this file

## 6. In the end you should return the file to its original form: 
//import the original styles from edx-platform<br>
@import "lms/static/sass/lms-main-v1";<br><br>


@import "main";
###### And compile our work with paver devstack lms

## 7. Delete our time file time-lms-main-v1.css
:+1:

sass --watch sass/lms-main-v1.scss:css/lms-main-v1.css sass/discussion/lms-discussion-main.scss:css/discussion/lms-discussion-main.css sass/lms-main-v1-rtl.scss:css/lms-main-v1-rtl.css sass/discussion/lms-discussion-main-rtl.scss:css/discussion/lms-discussion-main-rtl.css