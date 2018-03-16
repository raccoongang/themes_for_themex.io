#!/bin/bash

#function for add comment 
comment() {
    sed -i '' '1s/^/\/\//g' $1 #add coment on first line
    sed -i '' '2s/\/\//''/g' $1 #remove coment on second line
}
#function for remove comment
recomment() {
    sed -i '' '1s/\/\//''/g' $1 #remove coment on first line
    sed -i '' '2s/^/\/\//g' $1 #add coment on second line
}

if [ $1 == start ]
  then
    #change files -- add right coment for local static
    comment lms/static/sass/lms-course-rtl.scss
    comment lms/static/sass/lms-course.scss
    comment lms/static/sass/lms-main-v1-rtl.scss
    comment lms/static/sass/lms-main-v1.scss
    comment lms/static/sass/lms-main-v2-rtl.scss
    comment lms/static/sass/lms-main-v2.scss
    comment lms/static/sass/discussion/lms-discussion-main-rtl.scss
    comment lms/static/sass/discussion/lms-discussion-main.scss
    #copy files for bild static localy
    cp lms/static/css/lms-course-rtl.css lms/static/css/time-lms-course-rtl.css
    cp lms/static/css/lms-course.css lms/static/css/time-lms-course.css
    cp lms/static/css/lms-main-v1-rtl.css lms/static/css/time-lms-main-v1-rtl.css
    cp lms/static/css/lms-main-v1.css lms/static/css/time-lms-main-v1.css
    cp lms/static/css/lms-main-v2-rtl.css lms/static/css/time-lms-main-v2-rtl.css
    cp lms/static/css/lms-main-v2.css lms/static/css/time-lms-main-v2.css
    cp lms/static/css/discussion/lms-discussion-main-rtl.css lms/static/css/discussion/time-lms-discussion-main-rtl.css
    cp lms/static/css/discussion/lms-discussion-main.css lms/static/css/discussion/time-lms-discussion-main-rtl.css
    cd lms/static
    #start sass for watching sass files
    sass --watch sass/lms-main-v1.scss:css/lms-main-v1.css sass/lms-main-v1-rtl.scss:css/lms-main-v1-rtl.css sass/lms-main-v2.scss:css/lms-main-v2.css sass/lms-main-v2-rtl.scss:css/lms-main-v2-rtl.css sass/lms-course.scss:css/lms-course.css sass/lms-course-rtl.scss:css/lms-course-rtl.css sass/discussion/lms-discussion-main-rtl.scss:css/discussion/lms-discussion-main-rtl.css sass/discussion/lms-discussion-main.scss:css/discussion/lms-discussion-main.css
fi

if [ $1 == stop ]
  then
    #change files -- remove coment for prod
    recomment lms/static/sass/discussion/lms-discussion-main-rtl.scss
    recomment lms/static/sass/discussion/lms-discussion-main.scss
    recomment lms/static/sass/lms-course-rtl.scss
    recomment lms/static/sass/lms-course.scss
    recomment lms/static/sass/lms-main-v1-rtl.scss
    recomment lms/static/sass/lms-main-v1.scss
    recomment lms/static/sass/lms-main-v2-rtl.scss
    recomment lms/static/sass/lms-main-v2.scss
    #remove time files for prod
    rm lms/static/css/time-lms-course-rtl.css
    rm lms/static/css/time-lms-course.css
    rm lms/static/css/time-lms-main-v1-rtl.css
    rm lms/static/css/time-lms-main-v1.css
    rm lms/static/css/time-lms-main-v2-rtl.css
    rm lms/static/css/time-lms-main-v2.css
fi