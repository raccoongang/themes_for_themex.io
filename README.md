# If you want to use online sass compile You should follow the next steps (I can show my example by lms-main-v1.scss):
## 1. You copy the file lms-main-v1.scss from the platform to edx-themes. You always do it
## 2. Complile this file with paver devstack lms
## 3. You file will have this structure, you example can be different:

//import the original styles from edx-platform<br>
@import "lms/static/sass/lms-main-v1";  - this path to platform <br><br>

//our overrides for settings we want to change<br>
$img-path: "../images" !default;  - we have different path in files, for example discussion<br>
$font-path: "../fonts" !default;<br><br>

@import "main"; - this file will be contain our new files<br>

## 4. We have in our css folder new file - lms-main-v1.css, now we do copy this file and give a temporary name, for example: time-lms-main-v1.css
## 5. We replace our file in sass:

//import the original styles from edx-platform<br>
// @import "lms/static/sass/lms-main-v1";<br>
@import "../css/time-lms-main-v1.css"; - it is our temporary files which contains style from platform <br><br>

//our overrides for settings we want to change<br>
$img-path: "../images" !default;<br>
$font-path: "../fonts" !default;<br><br>

@import "main";<br>

## 6. In your console from static folder where is a config.rb you type: 
    sass --watch sass/lms-main-v1.scss:css/lms-main-v1.css
###### And now you can work with this file

## 7. In the end you should return the file to its original form: 
//import the original styles from edx-platform<br>
@import "lms/static/sass/lms-main-v1";<br><br>

//our overrides for settings we want to change <br>
$img-path: "../images" !default; <br>
$font-path: "../fonts" !default; <br><br>

@import "main";
###### And compile our work with paver devstack lms

## 8. Delete our time file time-lms-main-v1.css
:+1:
