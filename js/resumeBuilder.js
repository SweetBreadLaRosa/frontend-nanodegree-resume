/*
This is empty on purpose! Your code to build the resume will go here.
 */
// NOTES
/*let emailAddress = 'john.larosa124@gmail.com';
let awesomeThoughts = 'I am John LaRosa and I am AWESOME!';
console.log(awesomeThoughts);
let newEmail = emailAddress.replace('124','012');
console.log('new email', newEmail);
let funThoughts = awesomeThoughts.replace('AWESOME!','FUN');
$("#main").append(funThoughts);*/


// RESUME Code
const data = '%data%';

let bio = {
    name: 'John LaRosa',
    role: 'Software Engineer',
    contacts: {
        mobile: '206-829-0757',
        email: 'john.larosa124@gmail.com',
        github: 'SweetBreadLaRosa',
        twitter: 'none',
        location: 'Seattle'
    },
    welcomeMessage: 'Welcome to my resume!',
    skills: ['programming', 'basketball', 'eating'],
    biopic: 'images/me.jpg',
    display: () => {
        let formattedName = HTMLheaderName.replace(data, bio.name);
        let formattedRole = HTMLheaderRole.replace(data, bio.role);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        $('#topContacts').append(HTMLmobile.replace(data, bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace(data, bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace(data, bio.contacts.github));
        $('#topContacts').append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace(data, bio.contacts.location));

        $('#footerContacts').append(HTMLmobile.replace(data, bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace(data, bio.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace(data, bio.contacts.github));
        $('#footerContacts').append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $('#footerContacts').append(HTMLlocation.replace(data, bio.contacts.location));

        $('#header').append(HTMLbioPic.replace(data, bio.biopic)).
        append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage)).append(HTMLskillsStart);

        bio.skills.forEach(skill => {
            $("#skills").append(HTMLskills.replace(data, skill));
        });
    }
};

let work = {
    jobs: [{
        position: 'Software Engineer',
        employer: 'Apex Learning',
        dates: '5 years ',
        location: 'Seattle',
        description: 'Full Stack Developer'
    }]
};

$("#workExperience").append(HTMLworkStart);
work.jobs.forEach(job => {
    $(".work-entry").append(HTMLworkEmployer.replace(data, job.employer))
        .append(HTMLworkTitle.replace(data, job.position))
        .append(HTMLworkDates.replace(data, job.dates))
        .append(HTMLworkLocation.replace(data, job.location))
        .append(HTMLworkDescription.replace(data, job.description))
});

let education = {
    schools: [
        {
            name: 'Korea University',
            location: 'Seoul, Korea',
            degree: 'BA',
            majors: ['Management Information Systems'],
            dates: '2011',
            url: 'https://www.korea.edu'
        },
        {
            name: 'Washington State University',
            location: 'Pullman, WA',
            degree: 'BA',
            majors: ['Digital Technology, emphasis in Management Information Systems'],
            dates: '2007-2011',
            url: 'https://wsu.edu'
        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            dates: '3-20-2017',
            url: 'https://www.udacity.com'
        },
        {
            title: 'Javascript The Weird Parts',
            school: 'Udemy',
            dates: '2016',
            url: 'https://www.udemy.com'
        },
        {
            title: 'Experience Design Patterns in Java',
            school: 'Udemy',
            dates: '2016',
            url: 'https://www.udemy.com'
        },
        {
            title: 'Data Structures and Algorithms',
            school: 'Coursera',
            dates: '2015',
            url: 'https://www.coursera.org'
        }
    ],
    display: () => {
        // school
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(school => {
            $(".education-entry").append(HTMLschoolName.replace(data, school.name))
                .append(HTMLschoolDegree.replace(data, school.degree))
                .append(HTMLschoolDates.replace(data, school.dates))
                .append(HTMLschoolLocation.replace(data, school.location));
            school.majors.forEach(major => {
                $(".education-entry").append(HTMLschoolMajor.replace(data, major));
            });
        });

        // online courses
        $("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
        education.onlineCourses.forEach(onlineCourse => {
            $(".education-entry:last").append(HTMLonlineTitle.replace(data, onlineCourse.title))
                .append(HTMLonlineSchool.replace(data, onlineCourse.school))
                .append(HTMLschoolDates.replace(data, onlineCourse.dates))
                .append(HTMLonlineURL.replace(data, onlineCourse.url))
        });
    }
};

// projects
let projects = {
    projects: [{
        title: 'Projects',
        dates: '2017',
        description: 'front end projects and other goodies',
        images: ['images/projectOne.jpg'],
    }],
    display: () => {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(project => {
            $(".project-entry").append(HTMLprojectTitle.replace(data, project.title))
                .append(HTMLprojectDates.replace(data, project.dates))
                .append(HTMLprojectDescription.replace(data, project.description));
            project.images.forEach(image => {
                $(".project-entry").append(HTMLprojectImage.replace(data, image));
            });
        });
    }
};

// map
let maps = {
    display: () => {
        $('#mapDiv').append(googleMap);
    }
};

// call display functions
bio.display();
education.display();
projects.display();
maps.display();