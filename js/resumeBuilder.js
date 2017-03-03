var bio = {
    "welcomeMessage": "Microsoft Certified IT Professional with many years of experience, fluent in Spanish/English, trained in statistical analysis, educated in computer technologies, strong programming skills and experienced in front/back end web development and Android development.",
    "name": "George N. Studenko Debicki",
    "role": "Web Developer",
    "contacts": {
        "email": "george@itecpro.com",
        "mobile": "+34 670 363 866",
        "github": "gnstudenko",
        "twitter": "georgestudenko",
        "blog": "georgestudenko.com",
        "location": "Barcelona, Spain"
    },
    "biopic": "images/George-Studenko-800.jpg",
    "skills": ["Android Studio", "HTML5", "CSS3", "Responsive Web Design", "Bootstrap", "Javascript", "jQuery", "JSON", "AngularJS","Grunt", "NopCommerce Customization", "Umbraco", "Magento", "Wordpress", "SEO", "SEM", "OOP", "ASP.NET", "Webforms", "MVC", "SQL Sever", "Database Developer", "Database Administrator", "T-SQL", "Reporting Services", ".NET Framework", "C#", "WinForms", "EPPlus", "Xamarin", "Android Development", "Java", "Wireless Networks", "Wired Networks EIA/TIA 568A/B", "Windows Server"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);

    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var blog = HTMLblog.replace("%data%", bio.contacts.blog);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);

    var picture = HTMLbioPic.replace("%data%", bio.biopic);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName, role);
    $("#header").append(picture, welcome);

    $("#topContacts").append(mobile, email, twitter, github, blog, location);
    $("#footerContacts").append(mobile, email, twitter, github, blog, location);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i=0;i< bio.skills.length; i++) {
            var currentSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(currentSkill);
        }
    }
};

var projects = {
    "projects": [{
            "title": "georgestudenko.com",
            "dates": "December 2016",
            "description": "HTML, CSS, Bootstrap, jQuery",
            "images": ["images/georgestudenko/1.jpg", "images/georgestudenko/2.jpg", "images/georgestudenko/3.jpg", "images/georgestudenko/4.jpg"],
            "url": "http://www.georgestudenko.com/",
        },
        {
            "title": "Out of China Barcelona",
            "dates": "2016 - 2017",
            "description": "HTML, CSS, PHP, jQuery",
            "images": ["images/outofchinabarcelona/1.jpg", "images/outofchinabarcelona/2.jpg", "images/outofchinabarcelona/3.jpg", "images/outofchinabarcelona/4.jpg"],
            "url": "http://www.outofchinabarcelona.com/test/",
        },

        {
            "title": "Academia Speakeasy",
            "dates": "2016",
            "description": "ASP.NET, C#, Classic ASP, SQL Server",
            "images": ["images/speakeasybcn/1.jpg", "images/speakeasybcn/2.jpg", "images/speakeasybcn/3.jpg", "images/speakeasybcn/4.jpg"],
            "url": "http://www.speakeasybcn.com",
        },
        {
            "title": "Amparo Rodriguez",
            "dates": "2015 - 2016",
            "description": "Fully Customized Wordpress, HTML5, CSS",
            "images": ["images/ar/1.png", "images/ar/2.png", "images/ar/3.png", "images/ar/4.png"],
            "url": "http://www.amparorodriguez.com",
        }
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var proImages = "";
        for (var n = 0; n < projects.projects[i].images.length; n++) {
            proImages = proImages + HTMLprojectImage.replace("%data%", projects.projects[i].images[n]);
        }
        $(".project-entry:last").append(
            HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#",projects.projects[i].url) +
            HTMLprojectDates.replace("%data%", projects.projects[i].dates) +
            HTMLprojectDescription.replace("%data%", projects.projects[i].description) +
            proImages);
    }
};

var work = {
    "jobs": [{
            "employer": "Go and Connect S.L.",
            "title": "IT Manager / Developer",
            "location": "Barcelona, Spain",
            "dates": "February 2007 - May 2017",
            "description": "Company IT Manager and Developer using technologies such as HTML, CSS, Javascript, jQuery, ASP.NET, C#, SQL Server, Installed, configured and managed WiFi and wired networks.  Dealt with providers for buying hardware and software for customers. Business management software tailored to businesses, made with c# and sql server 2008, clickonce app deployment with automatic updates. SEO and SERP manager. Bought installed and configured Windows Servers tailored to each customer needs. Responsible for converting and uploading online versions of a number of magazines. Provide technical support and maintenance of the Connect Club Privilege Card and Connect Online Community websites.  Create websites and ensure smooth running of the internet-based online resources.  Develop and administer company’s and client's databases. Obtain and analyze statistics, reports from users, and other website data. Prepare internal reports on progress, costs, and time requirements for ongoing and future projects. Create documents for customers to explain the current changes and outline the benefits of modifications. Create and integrate new features to improve the current websites, including renewal of designs and multiple language implementation. Developed an invoice system integrated to the CRM to improve tracking and increase the overall efficiency of the operations with invoices. Initiated and integrated the automatic banners system for selling to customers. Provide IT support to multiple external clients and configured the company servers. Introduced search engine optimization for the websites to generate more traffic. Installed configured encryption systems for documents to improve security for the company and customers. Created mailer software to send monthly newsletter to our subscribers; collaborated with writers and designers to create attractive message."
        },
        {
            "employer": "i•zone Internet Cafe",
            "title": "Front Desk / IT",
            "location": "Encarnacion, Paraguay",
            "dates": "January 2005 - February 2007",
            "description": "Front Desk, customer service, IT support. Responsible for opening the place and helping the customers with their needs. Assisted with buying the equipment and mounting the network, Ensured efficient day-to-day operations of the business, the Internet, and other services, Provided customers with basic training on the Internet search, Ensured maintenance, program installations, configurations, and proper use of the computers and other equipment, Installed networks and configured applications, managed data warehousing, database backups, interfaces, and server builds, Performed daily activities to support smooth running of business, including querying analysis, report development, and first-level troubleshooting, Responsible for configuration of wireless networks and devices"
        },
        {
            "employer": "ET@Info",
            "title": "Teacher / IT Manager",
            "location": "Encarnacion, Paraguay",
            "dates": "January 2004 - January 2005",
            "description": "Planned lessons and taught groups of 6-15 students in Windows XP, MS Office, and Microsoft Access applications. Installed, configured, maintained, and fixed computers and networks. Monitored attendance and assessed students’ progress throughout the course. Responsible for installation, maintenance, and troubleshooting of the systems, hardware, and desktop applications. Oversaw diagnosis, identified problems, and resolve recurring technical problems"
        },
        {
            "employer": "ICC",
            "title": "Technical Support",
            "location": "Encarnacion, Paraguay",
            "dates": "January 2002 - February 2003",
            "description": "Installed, configured, maintained, and fixed computers and networks. Helped to install the software required by the teachers for teaching. Installed, configured, monitored, and maintained computer hardware, operating systems, and software applications. Responsible for troubleshooting system and network problems and diagnosing hardware and software failures. Supported roll-out of the new applications and set up new users’ accounts"
        }
    ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(
            HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
            HTMLworkTitle.replace("%data%", work.jobs[i].title) +
            HTMLworkDates.replace("%data%", work.jobs[i].dates) +
            HTMLworkLocation.replace("%data%", work.jobs[i].location) +
            HTMLworkDescription.replace("%data%", work.jobs[i].description)
        );
    }
};

var education = {
    "schools": [{
            "name": "Centro Regional de Educacion de Encarnacion",
            "location": "Encarnacion, Paraguay",
            "degree": "Bachelor",
            "majors": ["IT"],
            "dates": "2001 - 2004",
            "url": "http://www.sicpy.gov.py/generales/?1809"
        },
        {
            "name": "Universidad Nacional de Itapua",
            "location": "Encarnacion, Paraguay",
            "degree": "Engineering",
            "majors": "Computer Engineering",
            "dates": "2005 - 2007",
            "url": "http://uni.edu.py/"
        },

        {
            "name": "New Horizons",
            "location": "Barcelona, Spain",
            "degree": "MCITP, MCTS",
            "majors": "SQL Server, .NET Framework 3.5, ASP.NET",
            "dates": "2008 - 2010",
            "url": "http://www.nhbarcelona.com/"
        }

    ],
    "onlineCourses": [
		{
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016 - 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
		{
            "title": "Associate Android Developer Fast Track",
            "school": "Udacity",
            "dates": "2016 - 2017",
            "url": "https://www.udacity.com/course/associate-android-developer-fast-track--nd818"
        },
		{
            "title": "Learn Visual Studio .NET",
            "school": "Learnvisualstudio.net",
            "dates": "2007 - 2015",
            "url": "http://www.learnvisualstudio.net/"
        },
        {
            "title": "Training Spot",
            "school": "Trainingspot.com",
            "dates": "2010 - 2012",
            "url": "http://www.trainingspot.com/"
        },
        {
            "title": "Developer University",
            "school": "Devu.com",
            "dates": "2016 - 2017",
            "url": "http://www.devu.com"
        },
        {
            "title": "Udemy",
            "school": "Udemy.com",
            "dates": "2012 - 2017",
            "url": "https://www.udemy.com/"
        },
        {
            "title": "Code School",
            "school": "CodeSchool.com",
            "dates": "2016 - 2017",
            "url": "https://www.codeschool.com/users/gnstudenko"
        },      

        {
            "title": "edX",
            "school": "edX.org",
            "dates": "2016 - 2017",
            "url": "https://www.edx.org/"
        }
    ]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(
            HTMLschoolName.replace("%data%", education.schools[i].name).replace("#",education.schools[i].url) +
            HTMLschoolDegree.replace("%data%", education.schools[i].degree) +
            HTMLschoolDates.replace("%data%", education.schools[i].dates) +
            HTMLschoolLocation.replace("%data%", education.schools[i].location) +
            HTMLschoolMajor.replace("%data%", education.schools[i].majors)
        );
    }

    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(
            HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#",education.onlineCourses[i].url) +
            HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school) +
            HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates) +
            HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#",education.onlineCourses[i].url)
        );
    }
};

function inName(oldName) {
    var finalName = oldName;    
    var firstName = oldName.split(' ')[0];
    var lastName = oldName.split(' ')[1];
    firstName = firstName.toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    finalName = firstName + ' ' + lastName.toUpperCase();
    
    return finalName;
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$('#navBar a').click(function(){
    $('.navbar-collapse').collapse('hide');
});
