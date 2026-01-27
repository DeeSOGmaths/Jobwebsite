export const bio = {
    name: "Togun Oludolapo Ajisola",
    nickname: "DeeSOGmaths",
    role: "Software Engineer, Game Developer, Grpahics Designer, Video-Maker, Mathematics Enthusiast",
    email: "deeboytogun@gmail.com",
    location: "Lagos, Nigeria", // Inferring from context or generic placeholder
    skills: [
        "Python",
        "Django",
        "OOP technologies",
        "Pygame",
        "Learning",
        "Web Development",
        "Svelte",
        "OpenCV",
        "HTML5",
        "CSS3",
        "GIT/Github",
        "Leadership",
        "Public Speaking",
        "Graphic Design",
        "Tutoring",
        "Game Development",

    ],
    socials: {
        github: "https://github.com/DeeSOGmaths",
        youtube: "https://youtube.com/@SOGsolutions-Edu",
        xing: "https://www.xing.com/profile/Oludolapo_Togun",
        DailyDotDev: "https://app.daily.dev/deesogmaths",
        DevDotTo: "https://dev.to/deesogmaths",
        gamejolt: "https://gamejolt.com/@DeeSOGmaths",
        instagram: "https://www.instagram.com/deesogmaths?igsh=MnM0MmMyb2w3aHN6",



    },
    about: "I am the Founder of SOGsolutions and it's child firms(SOGSTUDIOS, Boat, SOGFacts), and also a Software Engineer, Game Developer, Graphics Designer, Video-Maker and Math Enthusiast with a passion for Python, Data Structures, OOP technologies, Artificial Intelligence and Learning. I have a right-on-time record of delivering successful web solutions.",
    experience: "My experience spans across a wide range of technologies, including - Game Development(Under SOGSTUDIOS - produced games like Santa's Mayhem), Web Development(I build web solutions and craft responsive web applications), Content-Creation(Utilizing the SOGsolutions youtube channel on youtube, i've created 10+ high quality educational videos), Graphics Design(Leveraging my skills as a designer, i use tools like gimp and inshot to create amazing thumbnails)",
    projects: "You can view my projects on the projects page. I work on games, web development, and educational tech."
};

export const keywords = {
    "who": bio.about,
    "name": `My name is ${bio.name}.`,
    "nickname": `My nickname is ${bio.nickname}.`,
    "skill": `My skills include ${bio.skills.join(", ")}.`,
    "stack": `My skills include ${bio.skills.join(", ")}.`,
    "email": `You can contact me at ${bio.email}.`,
    "contact": `You can contact me at ${bio.email}.`,
    "job": bio.role,
    "role": bio.role,
    "github": bio.socials.github,
    "youtube": bio.socials.youtube,
    "xing": bio.socials.xing,
    "daily.dev": bio.socials.DailyDotDev,
    "dev.to": bio.socials.DevDotTo,
    "gamejolt": bio.socials.gamejolt,
    "instagram": bio.socials.instagram,
    "experience": bio.experience,
    "project": bio.projects,
    "default": `Sorry, i don't have that info about DeeSOGmaths, try contacting him directly at any of the following, xing - ${bio.socials.xing}, github - ${bio.socials.github}, youtube - ${bio.socials.youtube}, daily.dev - ${bio.socials.DailyDotDev}, dev.to - ${bio.socials.DevDotTo}, gamejolt - ${bio.socials.gamejolt}, instagram - ${bio.socials.instagram}. Try asking about my skills, projects, or contact info.`
};
