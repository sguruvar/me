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
    { name: 'Distributed Systems', level: 95, icon: Server },
    { name: 'Kubernetes / EKS', level: 92, icon: Server },
    { name: 'Observability & OpenTelemetry', level: 92, icon: Code },
    { name: 'AI/ML Infrastructure', level: 88, icon: Database },
    { name: 'AWS Cloud', level: 95, icon: Cloud },
    { name: 'Python / Java / Go', level: 88, icon: Code }
  ]

  const experiences = [
    {
      company: 'Amazon Web Services',
      role: 'Senior Specialist Solutions Architect — Containers & Observability',
      period: '2021 – Present',
      description: 'Partnered with large enterprise customers to design and optimize Kubernetes, observability, and distributed platform architectures. Built end-to-end observability platform for multi-agent AI systems (LangGraph, CrewAI, AWS Strands) on Kubernetes — unified OTel traces, per-framework cost attribution via Bedrock token interception, Grafana Tempo tracing, and AMP metrics. Built GPU observability and chargeback platform using NVIDIA DCGM, AMP, Grafana, and OpenTelemetry. Contributed KEDA integration with Amazon Managed Prometheus (AMP) to the CNCF KEDA project. Developed EKS Event Watcher for Kubernetes control-plane event persistence. Contributed AI inference observability blueprint to the OpenTelemetry sig-end-user project.'
    },
    {
      company: 'Apple (via Cognizant)',
      role: 'Enterprise Architect / Lead Engineer',
      period: '2015 – 2021',
      description: 'Modernized large-scale enterprise platforms supporting distributed workloads across cloud and hybrid environments. Led platform modernization for Apple RightNotes royalty platform — improving operational efficiency and reducing annual infrastructure cost by ~$4M. Drove platform reliability for jobs.apple.com and RightNotes including incident postmortems, deployment automation, and replication lag monitoring across multi-region stateful workloads. Contributed to enterprise platform initiatives involving iCloud-related distributed infrastructure, Cassandra, and cloud operations at scale. Led Kubernetes, Terraform, and CI/CD adoption across engineering teams.'
    },
    {
      company: 'Oracle',
      role: 'Senior Member of Technical Staff',
      period: '2011 – 2015',
      description: 'Designed and developed distributed enterprise systems supporting high-scale transactional workloads. Built monitoring, automation, and operational tooling improving performance visibility and system reliability. Developed scalable backend services and platform components using Java and distributed systems patterns. Contributed to Oracle Enterprise Manager platform including monitoring plugins and diagnostic tooling.'
    },
    {
      company: 'E*TRADE (via Cognizant)',
      role: 'Senior Software Engineer',
      period: '2006 – 2011',
      description: 'Developed backend services and distributed systems supporting high-volume financial transaction workloads. Built scalable Java-based services improving transaction throughput and platform resiliency. Implemented automation and deployment tooling reducing operational overhead and improving release velocity.'
    }
  ]

  const publications = [
    {
      title: 'Book: Mastering AWS EKS (BPB Publications)',
      links: [{ label: 'Amazon', url: 'https://a.co/d/00pIRd0N' }]
    },
    {
      title: 'Book (upcoming): Generative AI Observability — Architecting Intelligent Monitoring Ecosystems',
      links: [{ label: 'Amazon', url: 'https://a.co/d/01xsLYR8' }]
    },
    {
      title: 'GPU Cost Attribution in Amazon EKS using Amazon Managed Service for Prometheus, Amazon Managed Grafana and OpenTelemetry',
      links: [
        { label: 'AWS Blog', url: 'https://aws.amazon.com/blogs/mt/gpu-cost-attribution-in-amazon-eks-using-amazon-managed-service-for-prometheus-amazon-managed-grafana-and-opentelemetry/' },
        { label: 'AWS Skill Builder', url: 'https://skillbuilder.aws/learn/JZVWZA95SC/gpu-cost-attribution-in-amazon-eks-using-amazon-managed-service-for-prometheus-amazon-managed-grafana-and-opentelemetry/HUPFSYZUKM' }
      ]
    },
    {
      title: 'OSS: NVIDIA DCGM Exporter — GPU observability contribution (NVIDIA/dcgm-exporter#674)',
      links: [{ label: 'GitHub PR', url: 'https://github.com/NVIDIA/dcgm-exporter/pull/674' }]
    },
    {
      title: 'Multi-Agent AI Systems Observability on Kubernetes (Medium, June 2026)',
      links: [{ label: 'Medium', url: 'https://medium.com/@sivagurunath/end-to-end-observability-for-multi-agent-ai-systems-on-kubernetes-e4133dd111d6' }]
    },
    {
      title: 'GPU Cost Attribution for Disaggregated LLM Inference with NVIDIA Dynamo (Medium, June 2026)',
      links: [{ label: 'Medium', url: 'https://medium.com/@sivagurunath/gpu-cost-attribution-for-disaggregated-llm-inference-with-nvidia-dynamo-34815fd55ea4' }]
    },
    {
      title: 'Per-Namespace GPU Cost Attribution on EKS with NVIDIA MIG (Medium)',
      links: [{ label: 'Medium', url: 'https://medium.com/@sivagurunath/per-namespace-gpu-cost-attribution-on-eks-with-nvidia-mig-9dde0f82b6e4' }]
    },
    {
      title: 'OSS: KEDA + Amazon Managed Prometheus (AMP) — CNCF merged (github.com/kedacore/keda/pull/5315)',
      links: [{ label: 'GitHub PR', url: 'https://github.com/kedacore/keda/pull/5315' }]
    },
    {
      title: 'Autoscaling Kubernetes Workloads with KEDA using Amazon Managed Service for Prometheus Metrics',
      links: [{ label: 'AWS Blog', url: 'https://aws.amazon.com/blogs/mt/autoscaling-kubernetes-workloads-with-keda-using-amazon-managed-service-for-prometheus-metrics/' }]
    },
    {
      title: 'OSS: EKS Event Watcher — Kubernetes control-plane event persistence (github.com/aws-samples/eks-event-watcher)',
      links: [
        { label: 'GitHub', url: 'https://github.com/aws-samples/eks-event-watcher' },
        { label: 'AWS Blog', url: 'https://aws.amazon.com/blogs/containers/managing-kubernetes-control-plane-events-in-amazon-eks/' }
      ]
    },
    {
      title: 'OSS: AI Inference Observability on EKS — full reference stack (github.com/sguruvar/ai-inference-observability-eks)',
      links: [{ label: 'GitHub', url: 'https://github.com/sguruvar/ai-inference-observability-eks' }]
    },
    {
      title: 'OTel Blueprint: AI Inference Platform Observability on Kubernetes (open-telemetry/sig-end-user#341)',
      links: [
        { label: 'SIG Issue', url: 'https://github.com/open-telemetry/sig-end-user/issues/341' },
        { label: 'opentelemetry.io PR', url: 'https://github.com/open-telemetry/opentelemetry.io/pull/10310' }
      ]
    }
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
            Principal Platform Engineer | Distributed Systems · Kubernetes · AI Infrastructure · OpenTelemetry
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto text-blue-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Principal-level engineer with 20+ years building large-scale distributed systems, cloud platforms, and AI infrastructure across AWS, Apple, and Oracle. Deep expertise in Kubernetes, OpenTelemetry, GPU observability, and multi-agent AI systems. CNCF contributor, OpenTelemetry blueprint author, and author of Mastering EKS. Experienced across software engineering, platform engineering, cloud architecture, and AI infrastructure.
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
                Principal-level engineer with 20+ years building large-scale distributed systems, cloud
                platforms, observability architectures, and Kubernetes-based infrastructure across AWS,
                Apple, Oracle, and enterprise environments. Experienced across software engineering,
                platform engineering, cloud architecture, and AI infrastructure — with a strong hands-on
                background in distributed systems, reliability, observability, and scalable infrastructure
                design. Recognized for solving complex infrastructure problems, simplifying operational
                systems, and driving scalable platform initiatives across cloud-native and multi-region
                environments.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
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
                      <h3 className="font-medium mb-2">{pub.title}</h3>
                      {pub.links.length > 0 && (
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {pub.links.map((link) => (
                            <Button
                              key={link.url}
                              asChild
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                {pub.links.length > 1 ? link.label : 'Read More'}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
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
          <p>&copy; 2026 Siva Guruvareddiar. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-80">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

