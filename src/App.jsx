import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import {
  Cloud,
  Code,
  Database,
  Server,
  Award,
  BookOpen,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

import profileImage from './assets/siva.JPG'
import heroBackground from './assets/mTcekvHaSUDF.jpg'
import techBackground from './assets/Iwv6iAJTkK13.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const skills = [
    { name: 'AWS Cloud', level: 95, icon: Cloud },
    { name: 'Kubernetes', level: 90, icon: Server },
    { name: 'Microservices', level: 92, icon: Code },
    { name: 'Big Data', level: 88, icon: Database },
    { name: 'DevOps', level: 85, icon: Server },
    { name: 'Java/Spring', level: 90, icon: Code }
  ]

  const experiences = [
    {
      company: 'Amazon',
      role: 'Senior Specialist Architect',
      period: 'October 2021 – Present',
      description: 'Designed and implemented hybrid cloud architectures for Fortune 500 clients, integrating AWS and on-prem infrastructure, leading to a 30% reduction in infrastructure costs and 20% improvement in performance. Guided engineering teams in Kubernetes and observability best practices, helping them adopt OpenTelemetry and Prometheus-based monitoring, reducing operational toil by 40%. Led cloud-native transformation projects, modernizing legacy applications with EKS, Terraform, and serverless architectures, improving agility and reducing time-to-market by 35%. Mentored and trained 10+ solutions architects, fostering expertise in Kubernetes, hybrid cloud, and observability.'
    },
    {
      company: 'Apple',
      role: 'Enterprise Architect',
      period: 'April 2015 – September 2021',
      description: 'Architected secure and scalable cloud services, integrating Apple’s private cloud with AWS, ensuring compliance with Apple’s strict security and privacy policies. Led the hybrid cloud migration for Apple’s iTunes Music Reconciliation application, improving efficiency by 30% and reducing costs by 20% through resource optimization. Standardized cloud infrastructure practices across teams by defining best practices for Kubernetes, Terraform, and multi-region deployments. Designed containerized environments for Apple’s internal engineering services, improving deployment speed and consistency while enhancing security.'
    },
    {
      company: 'Oracle',
      role: 'Senior Member of Technical Staff',
      period: 'April 2011 – March 2015',
      description: 'Developed and deployed Oracle’s Cloud Management Portal, streamlining cloud operations and reducing response time by 25%. Created enterprise Java applications that improved system reliability by 20%. Led the development of the Oracle Enterprise Manager PeopleSoft plugin, enhancing monitoring and increasing performance by 30%.'
    },
    {
      company: 'E*Trade',
      role: 'Senior Engineer',
      period: 'August 2007 – March 2011',
      description: 'Enhanced E*TRADE’s online trading platform, improving performance by 15% and user engagement by 10%. Automated account management processes, reducing account opening time by 20% while improving security compliance by 25%.'
    },
    {
      company: 'Spike Source',
      role: 'SDE',
      period: 'June 2006 – July 2007',
      description: 'Led the development of Spike Asset Manager (SAM), reducing compliance risks by 15%. Designed and optimized the Core Stack, integrating 113 open-source components.'
    },
    {
      company: 'Indian Institute of Science (IISc)',
      role: 'Research Scientist',
      period: 'February 2005 – May 2006',
      description: 'Developed an Example-Based Machine Translation (EBMT) system for multilingual querying, achieving a BLEU score of 0.5949. Published research in NLP and information processing in leading technology journals.'
    }
  ]

  const publications = [
    'Book: Mastering AWS EKS (BPB publications)',
    'Managing Kubernetes Control Plane Events in Amazon EKS',
    'Autoscaling Kubernetes workloads with AWS Prometheus (CNCF contribution)',
    'Navigating the Cloudy Big-data highway in the age of Containers',
    'Multilingual Querying and Information Processing',
    'Synthetic transaction monitoring in the age of Microservices'
  ]

  const certifications = [
    'AWS Certified Solutions Architect – Professional & Associate',
    'AWS Certified ML Engineer',
    'AWS Big Data Specialty',
    'CNCF certified Kubernetes Security Specialist (CKS)',
    'CNCF certified Kubernetes Administrator (CKA)',
    'CNCF certified Kubernetes Application Developer (CKAD)',
    'CNCF Kubernetes and Cloud Native Associate (KCNA)',
    'CNCF certified Prometheus Associate (PCA)',
    'CNCF OpenTelemetry Certified Associate (OTCA)',
    'Hashicorp Terraform certified Associate (HcTA)',
    'Sun Certified Java Programmer (SCJP)'
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'publications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl font-bold text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Siva Guruvareddiar
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'publications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-background border-t"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'skills', 'publications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize w-full text-left hover:text-primary"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="floating-animation"
          >
            <img 
              src={profileImage} 
              alt="Siva Guruvareddiar" 
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Siva Guruvareddiar
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Senior Specialist | Cloud Architect | Innovation Champion
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto text-blue-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Results driven Senior Specialist Architect with years of experience in designing, implementing hybrid cloud (AWS and on-prem) architectures at scale. Expertise in cloud computing, Kubernetes, Observability and application modernization, with a strong programming background. Proven track record of guiding engineering teams, optimizing infrastructure for cost, security and agility and delivering scalable solutions at Apple and Amazon-scale. Passionate about privacy-first architectures, hybrid cloud adoption, and mentoring teams to adopt cloud native best practices.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={techBackground} 
                alt="Technology Background" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                Results driven Senior Specialist Architect with years of experience in designing, implementing
                hybrid cloud (AWS and on-prem) architectures at scale. Expertise in cloud computing,
                Kubernetes, Observability and application modernization, with a strong programming
                background. Proven track record of guiding engineering teams, optimizing infrastructure for
                cost, security and agility and delivering scalable solutions at Apple and Amazon-scale.
                Passionate about privacy-first architectures, hybrid cloud adoption, and mentoring teams to
                adopt cloud native best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 tech-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover">
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div 
                      className="skill-bar h-2 rounded-full"
                      style={{ '--width': `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{skill.level}% Proficiency</p>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 tech-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Publications</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover h-full">
                  <div className="flex items-start">
                    <BookOpen className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">{pub}</h3>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">[Removed for Privacy]</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Austin, TX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/sguruvar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/sguruvar
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Siva Guruvareddiar. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-80">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

