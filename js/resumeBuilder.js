/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: "Yao Chen",
  role: "Web-developer, Instructional Designer",
  contactInfo:{ mobile: "9178157626",
                email: "yc3185@tc.columbia.edu",
                github: "https://github.com/yaochen1224",
                location: "1230 Amsterdam Ave"},
  welcomeMessage: "Welcome to my online resume!",
  skills: ["Microsoft Office", "Java", "Python", "JavaScript","Html","C++","R"],
  bioPic: "images/photo.jpeg"
};
function inName(name) {
  var nameArray = name.trim().split(" ");
  var firstName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  var lastName = nameArray[1].toUpperCase();
  return firstName + " " + lastName;
}
$("#main").append(internationalizeButton);

bio.displayBio = function(){
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);

  var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").append(formattedImage);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);


  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";

    for(var i=0; i < bio.skills.length; i++ ){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
}

bio.displayBio();




var work = {
  "job" : [
  {
  "title" : "Data Analyst Intern",
  "employer" : "Millward Brown",
  "years" : "2016.01-2016.05",
  "location" : "Beijing, China",
  "description" : "♣	Designed surveys and assessed data quality to prepare accurate final deliverables to clients on their brand and communications strategy;<br/>♣	Incorporated a wide range of quantitative research methods for digital and traditional media campaign evaluation, media deployment evaluation, consumer digital media behavior understanding, brand health/equity tracking, and advanced path modeling analysis;<br/>♣	Visualized data into report so as to provide a market overview at both micro and macro level."
  },
  {
  "title" : "Tutor",
  "employer" : "The Beijing Center for Chinese Studies",
  "years" : "2015.09-2016.02",
  "location" : "Jeju island, South Korea",
  "description" : "♣	Offered courses in Chinese Language and Culture;<br/>♣	Helped to improve across cultured experience for American and French exchange students"
  },
  {
  "title" : "Chinese Teacher",
  "employer" : "Chinese Language School of Jeju",
  "years" : "2014.07",
  "location" : "Jeju island, South Korea",
  "description" : "♣	Tailored lesson plans to teach students who aged between 25 to 65 to speak Chinese and learned their motivation in learning Chinese."
  }
  ]
}


work.displayWork = function(){
  $("#workExperience").append(HTMLworkStart);
  for(var i=0; i < work.job.length; i++){
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.job[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.job[i].title);
    $(".work-entry").append(formattedEmployer+formattedTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.job[i].location);
    $(".work-entry").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%",work.job[i].years);
    $(".work-entry").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.job[i].description);
    $(".work-entry").append(formattedDescription);
  }
}

work.displayWork();

var education = {
  "schools":[
    {
    "schoolName":"Teachers College, Columbia University",
    "location": "New York, NY, US",
    "degree": "Master of Art",
    "majors" : ["Instructional Technology and Media"],
    "dates" : "2016 - 2018",
  },
    {
    "schoolName":"University of International Business and Economics",
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
      "date":"2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Python for Informatics",
      "school": "Coursera",
      "date": "2016",
      "url": "https://www.coursera.org/specializations/python"
    }
  ]
}

education.displayEducation = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].schoolName);
    var formattedSchoolDgree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDgree);
    // $(".education-entry:last").append(formattedSchoolDgree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajors);
  }

  if(education.onlineCourses.length>0){
    $("#education").append(HTMLonlineClasses);
    for (ecourse in education.onlineCourses){
      var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[ecourse].title);
      var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[ecourse].school);
      var onlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[ecourse].date);
      var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[ecourse].url);
      $("#education").append('<div class = "onlineCourses"></div>');
      $(".onlineCourses:last").append(onlineTitle+onlineSchool);
      $(".onlineCourses:last").append(onlineDate);
      $(".onlineCourses:last").append(onlineURL);
    }
  }
}
education.displayEducation();

var projects = {
  "project": [
    {"title":"STD Crisis",
    "dates":"2016.11-2017.03",
    "description":"STD Crisis is an educational board game that teaches about what damages could STDs cause, and how to cure/prevent them.",
    "images":["images/organs.png", "images/STD.png","images/cureMethods.png"]
    },
    {"title":"AIESEC Global Community Development Programme",
    "dates":"2014.07–2014.08",
    "description":"Gave daily lessons to local students and taught them to speak simple Chinese words.<br/>Sold handwriting postcards and collected donations to build a reading room for local students.<br/>Improved the lightening system in schools in slums.<br/>Designed and handed out brochures on the prevention of AIDS.",
    "images":["images/slum1.png", "images/slum2.png","images/slum3.png"]
    }
  ]
}

projects.displayProject = function() {
  for (project in projects.project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append('<div class="project-img"></div>')
    if(projects.project[project].images.length>0){
      for (image in projects.project[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
        $(".project-img:last").append(formattedImage);
      }
    }

  }
}
projects.displayProject();

$(document).click(function(loc){
  console.log(1);
  var x = loc.pageX;
  var y = loc.pageY;
  console.log(x + " " + y);
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
