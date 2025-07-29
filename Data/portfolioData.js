module.exports = {
  profileImage: "uploads/dp.jpg",        // ✅ from your Uploads folder
  coverImage: "uploads/cover.jpg",      
  name: "Muhammad Hasnain",
  email: "hasnainmuhammad8425@gmail.com",
  phone: "0312-1234567",
  role: "MERN Stack Developer",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  projects: [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React.",
      link: "https://github.com/Hasnainkhan21/intern_Portfolio.git",
      technologies: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      image: "uploads/portfolio.webp"     // ✅ add image
    },
     {
      title: "Moodesta",
      description: "A mood tracking app to log and analyze your emotions and recommend music , Movies and Books based on your mood.",
      link: "https://github.com/Hasnainkhan21/Mood_web.git",
      technologies: ["tailwind", "react", "node.js", "express", "mongodb", "Material UI", "Desi UI"],
      image: "uploads/music.jpeg"     // ✅ add image
    },
    {
      title: "E-Commerce App",
      description: "Full-stack shopping app using MERN.",
      link: "https://github.com/Hasnainkhan21/Ecommerce_website_React.git",
      technologies: ["React", "Tailwind", "Material UI"],
      image: "uploads/e_commerce.png"     // ✅ add image
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with user authentication.",
      link: "https://example.com/blog",
      technologies: ["Node.js", "MongoDB"],
      image: "uploads/blog.jpg"           // ✅ add your blog image to /Uploads
    }
  ]
};
