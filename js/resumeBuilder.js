var bio = {
  name: "Yao Chen",
  role: "Web-developer, Instructional Designer",
  contacts:{
                mobile: "9178157626",
                email: "yc3185@tc.columbia.edu",
                github: "https://github.com/yaochen1224",
                location: "1230 Amsterdam Ave"
              },
  welcomeMessage: "Welcome to my online resume!",
  skills: ["Microsoft Office", "Java", "Python", "JavaScript","Html","C++","R"],
  biopic: "images/photo.jpeg"
};

function inName(name) {
  var nameArray = name.trim().split(" ");
  var firstName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  var lastName = nameArray[1].toUpperCase();
  return firstName + " " + lastName;
}
$("#main").append(internationalizeButton);

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);

  var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedImage);


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation,formattedWelcomeMsg);
  // $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";

    for(var i=0; i < bio.skills.length; i++ ){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
};






var work = {
  "jobs" : [
  {
    "title" : "Data Analyst Intern",
    "employer" : "Millward Brown",
    "dates" : "2016.01-2016.05",
    "location" : "Beijing, China",
    "description" : "♣	Designed surveys and assessed data quality to prepare accurate final deliverables to clients on their brand and communications strategy;<br/>♣	Incorporated a wide range of quantitative research methods for digital and traditional media campaign evaluation, media deployment evaluation, consumer digital media behavior understanding, brand health/equity tracking, and advanced path modeling analysis;<br/>♣	Visualized data into report so as to provide a market overview at both micro and macro level."
  },
  {
    "title" : "Tutor",
    "employer" : "The Beijing Center for Chinese Studies",
    "dates" : "2015.09-2016.02",
    "location" : "Jeju island, South Korea",
    "description" : "♣	Offered courses in Chinese Language and Culture;<br/>♣	Helped to improve across cultured experience for American and French exchange students"
  }]
};


work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  for(var i=0; i < work.jobs.length; i++){
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry").append(formattedEmployer+formattedTitle, formattedLocation, formattedDates, formattedDescription);
  }
};


var education = {
  "schools":[
    {
    "name":"Teachers College, Columbia University",
    "location": "New York, NY, US",
    "degree": "Master of Art",
    "majors" : ["Instructional Technology and Media"],
    "dates" : "2016 - 2018",
  },
    {
    "name":"University of International Business and Economics",
    "location": "Beijing, CHINA",
    "degree": "Bachelor of Art",
    "majors" : ["Teaching Chinese as a Second Language","Finance"],
    "dates" : "2012 - 2016",
    }
  ],

  "onlineCourses":[
    {
      "title": "Front-end Developer Nanodgree",
      "school":"Udacity",
      "dates":"2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Python for Informatics",
      "school": "Coursera",
      "dates": "2016",
      "url": "https://www.coursera.org/specializations/python"
    }
  ]
};

education.display = function() {
  for (var i=0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
    var formattedSchoolDgree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
    var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDgree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajors);
  }

  if(education.onlineCourses.length>0){
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++){
      var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
      var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
      var onlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
      var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
      $("#education").append('<div class = "onlineCourses"></div>');
      $(".onlineCourses:last").append(onlineTitle+onlineSchool, onlineDate, onlineURL);
    }
  }
};

var projects = {
  "projects": [
    {"title":"STD Crisis",
    "dates":"2016.11-2017.3",
    "description":"STD Crisis is an educational board game that teaches about what damages could STDs cause, and how to cure/prevent them.",
    "images":["images/organs.png", "images/STD.png","images/cureMethods.png"]
    },
    {"title":"AIESEC Global Community Development Programme",
    "dates":"2014.7–2014.8",
    "description":"Gave daily lessons to local students and taught them to speak simple Chinese words.<br/>Sold handwriting postcards and collected donations to build a reading room for local students.<br/>Improved the lightening system in schools in slums.<br/>Designed and handed out brochures on the prevention of AIDS.",
    "images":["images/slum1.png", "images/slum2.png","images/slum3.png"]
    }
  ]
};

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, '<div class="project-img"></div>')
    if(projects.projects[i].images.length>0){
      for (var q=0; q < projects.projects[i].images.length; q++) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[q]);
        $(".project-img:last").append(formattedImage);
      }
    }

  }
};


$(document).click(function(loc){
  console.log(1);
  var x = loc.pageX;
  var y = loc.pageY;
  console.log(x + " " + y);
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
