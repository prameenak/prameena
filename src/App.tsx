import React from 'react';
import { 
  User, 
  Code, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  Shield,
  Terminal,
  Database,
  Network,
  Search,
  Globe,
  Briefcase,
  Calendar
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'Java', level: 85, icon: Code },
    { name: 'Python', level: 80, icon: Code },
    { name: 'C/C++', level: 75, icon: Code },
    { name: 'SQL', level: 70, icon: Database },
    { name: 'Penetration Testing', level: 75, icon: Shield },
    { name: 'Kali Linux', level: 80, icon: Terminal },
    { name: 'NMAP', level: 70, icon: Search },
    { name: 'Networking', level: 65, icon: Network }
  ];

  const certifications = [
    {
      title: 'Ethical Hacking',
      provider: 'Udemy',
      icon: Shield,
      color: 'text-red-500'
    },
    {
      title: 'AI Powered Tech Development',
      provider: 'Ilife Academy at Sastra University',
      icon: Code,
      color: 'text-blue-500'
    },
    {
      title: 'Networking Basics',
      provider: 'Cisco',
      icon: Network,
      color: 'text-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700 animate-slide-down">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent animate-pulse-glow">
              𝒫𝓇𝒶𝓂𝑒𝑒𝓃𝒶 𝒦
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Skills</a>
              <a href="#education" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Education</a>
              <a href="#experience" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Experience</a>
              <a href="#certifications" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-particle-float opacity-30"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-particle-float animation-delay-1000 opacity-40"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-particle-float animation-delay-2000 opacity-50"></div>
          <div className="absolute top-60 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-particle-float animation-delay-500 opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400 rounded-full animate-particle-float animation-delay-1500 opacity-35"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up relative z-10">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center animate-morphing shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 transform-gpu perspective-1000 animate-rotate-3d">
                <User size={64} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-name-glow">
                𝒫𝓇𝒶𝓂𝑒𝑒𝓃𝒶 𝒦
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-up animation-delay-300">
                IT Security Enthusiast
              </p>
              <p className="text-lg md:text-xl text-slate-400 mb-6 animate-fade-in-up animation-delay-500">
                Final Year Bachelor of Information Technology Student
              </p>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
                Passionate cybersecurity enthusiast specializing in penetration testing, network security, 
                and ethical hacking. Currently pursuing my final year in Information Technology at 
                Bon Secours College for Women, with hands-on experience in various programming languages 
                and security tools.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-1000">
              <span className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300">
                <Globe className="mr-2" size={20} />
                Tamil, English
              </span>
              <span className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300">
                <MapPin className="mr-2" size={20} />
                Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-800/50 relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 animate-background-shift"></div>
        {/* 3D floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full animate-card-float animation-delay-500"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-card-float animation-delay-1000"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white animate-text-glow perspective-1000 animate-rotate-3d">Technical Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              A comprehensive toolkit spanning programming, cybersecurity, and system administration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up animate-card-float group perspective-1000 preserve-3d"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-blue-400 mr-3 group-hover:animate-icon-spin-3d transition-all duration-500" size={24} />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 animate-skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-slate-400 text-sm">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 animate-background-shift"></div>
        {/* 3D floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg animate-rotate-3d animation-delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-morphing animation-delay-500"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white animate-text-glow perspective-1000 animate-rotate-3d">Education</h2>
            <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Academic journey in Information Technology with focus on cybersecurity
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            {/* Bachelor's Degree */}
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up animate-card-float perspective-1000 preserve-3d">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-3 mr-6 flex-shrink-0 animate-morphing shadow-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor of Information Technology
                  </h3>
                  <p className="text-blue-400 text-lg mb-3">
                    Bon Secours College for Women
                  </p>
                  <div className="flex items-center mb-4">
                    <Calendar className="text-slate-400 mr-2" size={16} />
                    <p className="text-slate-300">
                      2023 - 2026 • Final Year Student • 86% Average
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-300">
                      <strong className="text-white">Specialization:</strong> Cybersecurity, Network Security, and Software Development
                    </p>
                    <p className="text-slate-300 mt-2">
                      <strong className="text-white">Research Focus:</strong> Penetration Testing, Vulnerability Assessment, and Ethical Hacking
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Higher Secondary */}
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 animate-fade-in-up animation-delay-300 animate-card-float perspective-1000 preserve-3d">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-6 flex-shrink-0 animate-morphing animation-delay-1000 shadow-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Higher Secondary Education
                  </h3>
                  <p className="text-green-400 text-lg mb-3">
                    St. Gabriel's Girls Higher Secondary School
                  </p>
                  <div className="flex items-center mb-4">
                    <Calendar className="text-slate-400 mr-2" size={16} />
                    <p className="text-slate-300">
                      2020 - 2023 • 81% Score
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-300">
                      <strong className="text-white">Achievement:</strong> Strong academic foundation with excellent performance
                    </p>
                    <p className="text-slate-300 mt-2">
                      <strong className="text-white">Focus:</strong> Science and Mathematics preparation for technology career
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-slate-800/50 relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-l from-teal-500/5 via-cyan-500/5 to-blue-500/5 animate-background-shift"></div>
        {/* 3D floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-1/3 w-20 h-20 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg animate-rotate-3d animation-delay-700"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-card-float animation-delay-1200"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white animate-text-glow perspective-1000 animate-rotate-3d">Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Practical learning and hands-on experience in web technology
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 perspective-1000">
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-teal-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 animate-fade-in-up animate-card-float preserve-3d">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-3 mr-6 flex-shrink-0 animate-morphing animation-delay-500 shadow-lg">
                  <Briefcase size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Software Training Programme Intern
                  </h3>
                  <p className="text-teal-400 text-lg mb-3">
                    Periyar Maniammai University
                  </p>
                  <div className="flex items-center mb-4">
                    <Calendar className="text-slate-400 mr-2" size={16} />
                    <p className="text-slate-300">
                      Web Technology Training • Offline Mode
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-300">
                      <strong className="text-white">Focus:</strong> Web Technology Development and Implementation
                    </p>
                    <p className="text-slate-300 mt-2">
                      <strong className="text-white">Skills Gained:</strong> Practical web development experience, software training methodologies
                    </p>
                    <p className="text-slate-300 mt-2">
                      <strong className="text-white">Mode:</strong> Intensive offline training program with hands-on projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 animate-background-shift"></div>
        {/* 3D floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-24 left-16 w-18 h-18 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg animate-rotate-3d animation-delay-300"></div>
          <div className="absolute bottom-28 right-24 w-12 h-12 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full animate-morphing animation-delay-800"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white animate-text-glow perspective-1000 animate-rotate-3d">Certifications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Professional credentials demonstrating expertise in cybersecurity and technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:rotateY-6 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up animate-card-float group perspective-1000 preserve-3d"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-slate-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-icon-spin-3d shadow-lg animate-morphing">
                    <cert.icon className={`${cert.color} group-hover:scale-110 transition-transform duration-500`} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{cert.title}</h3>
                  <p className="text-slate-400 mb-4">{cert.provider}</p>
                  <div className="bg-slate-800 rounded-lg p-3 group-hover:bg-slate-700 transition-colors">
                    <Award className="text-yellow-400 mx-auto group-hover:animate-pulse" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800/50 relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 animate-background-shift"></div>
        {/* 3D floating contact elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-12 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-card-float animation-delay-600"></div>
          <div className="absolute bottom-24 right-16 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-lg animate-rotate-3d animation-delay-900"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white animate-text-glow perspective-1000 animate-rotate-3d">Get In Touch</h2>
            <p className="text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Ready to discuss opportunities in cybersecurity and technology
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 text-center hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up animate-card-float animate-cyberpunk-3d group perspective-1000 preserve-3d">
                <Mail className="text-blue-400 mx-auto mb-4 group-hover:animate-icon-spin-3d transition-all duration-500" size={32} />
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">Email</h3>
                <p className="text-slate-400 break-all">prameenaa36@gmail.com</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 text-center hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 animate-fade-in-up animation-delay-300 animate-card-float animate-wave-3d group perspective-1000 preserve-3d">
                <Phone className="text-green-400 mx-auto mb-4 group-hover:animate-icon-spin-3d transition-all duration-500" size={32} />
                <h3 className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors">Phone</h3>
                <p className="text-slate-400">+91 86374 59736</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 text-center hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 animate-fade-in-up animation-delay-500 animate-card-float animate-hologram group perspective-1000 preserve-3d">
                <MapPin className="text-red-400 mx-auto mb-4 group-hover:animate-icon-spin-3d transition-all duration-500" size={32} />
                <h3 className="text-white font-semibold mb-2 group-hover:text-red-300 transition-colors">Location</h3>
                <p className="text-slate-400">Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-700">
              <a href="https://github.com/prameenak" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-500 border border-slate-600 hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group perspective-1000 preserve-3d animate-card-float">
                <Github className="text-white group-hover:text-blue-400 transition-colors group-hover:animate-icon-spin-3d" size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prameena-k-a1764331b" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-500 border border-slate-600 hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group perspective-1000 preserve-3d animate-card-float animation-delay-300">
                <Linkedin className="text-white group-hover:text-blue-400 transition-colors group-hover:animate-icon-spin-3d" size={24} />
              </a>
              <a href="mailto:prameenaa36@gmail.com" className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-500 border border-slate-600 hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group perspective-1000 preserve-3d animate-card-float animation-delay-500">
                <Mail className="text-white group-hover:text-blue-400 transition-colors group-hover:animate-icon-spin-3d" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700 animate-fade-in-up relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 animate-background-shift"></div>
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 relative z-10">
            © 2025 𝒫𝓇𝒶𝓂𝑒𝑒𝓃𝒶 𝒦. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;