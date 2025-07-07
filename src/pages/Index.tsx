
import React, { useEffect, useState } from 'react';
import { Search, Upload, Play, Star, ArrowRight, Check, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for revealing sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-reveal]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      title: "Skin Tone Analysis",
      description: "AI-powered analysis to find your perfect color palette",
      icon: "🎨",
      delay: 0.1,
      bg: "from-purple-900/20 to-black/30"
    },
    {
      title: "Body Shape Analysis", 
      description: "Personalized recommendations for your unique silhouette",
      icon: "📐",
      delay: 0.2,
      bg: "from-black/30 to-purple-900/20"
    },
    {
      title: "e-Wardrobe",
      description: "Digital closet management with smart outfit suggestions",
      icon: "👗",
      delay: 0.3,
      bg: "from-gray-900/20 to-purple-800/30"
    },
    {
      title: "Fashion Planner",
      description: "Plan outfits for any occasion with AI assistance",
      icon: "📅",
      delay: 0.4,
      bg: "from-purple-800/30 to-gray-900/20"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fashion Influencer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "This completely transformed how I approach styling. The AI recommendations are spot-on!"
    },
    {
      name: "Emma Rodriguez", 
      role: "Style Consultant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "The most intuitive fashion tool I've ever used. My clients love the personalized insights."
    },
    {
      name: "Maya Patel",
      role: "Fashion Blogger",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", 
      text: "Finally, a platform that understands personal style on a deeper level."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/70 to-purple-50/80"></div>
        
        {/* Morphing shapes */}
        <div className="morph-bg w-96 h-96 top-20 left-20 animate-morph"></div>
        <div className="morph-bg w-80 h-80 bottom-40 right-20 animate-morph" style={{animationDelay: '2s'}}></div>
        <div className="morph-bg w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-morph" style={{animationDelay: '4s'}}></div>
        
        {/* Drifting elements */}
        <div className="drift-bg w-64 h-64 top-1/4 right-1/4 animate-drift"></div>
        <div className="drift-bg w-48 h-48 bottom-1/4 left-1/4 animate-drift" style={{animationDelay: '3s'}}></div>
        
        {/* Black accent shapes */}
        <div className="absolute top-40 right-40 w-32 h-32 bg-black/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-60 left-60 w-24 h-24 bg-black/10 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Enhanced Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className={`glass-effect rounded-2xl px-6 py-3 shadow-2xl shadow-purple-500/10 animated-border transition-all duration-500 ${scrollY > 100 ? 'glass-effect-dark' : ''}`}>
          <div className="flex items-center justify-between">
            <div className={`text-xl font-bold transition-all duration-500 ${scrollY > 100 ? 'text-gradient-primary' : 'text-gradient-secondary'}`}>
              Company Name
            </div>
            
            <div className="hidden md:flex items-center space-x-2 glass-effect rounded-full px-4 py-2 border border-white/20">
              <Search className="w-4 h-4 text-purple-600" />
              <Input 
                placeholder="Search styles..." 
                className="border-0 bg-transparent placeholder-purple-400 text-purple-700 focus:ring-0 w-64"
              />
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-800 hover:glass-effect-dark rounded-full transition-all duration-300 floating-shadow">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-black via-purple-900 to-black hover:from-purple-900 hover:via-black hover:to-purple-900 text-white rounded-full px-6 floating-shadow-dark transition-all duration-300 hover:scale-105">
                Sign Up
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-20" data-reveal id="hero">
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-transparent to-black/10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`text-center lg:text-left space-y-8 ${visibleSections.has('hero') ? 'animate-reveal-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient-primary leading-tight animate-text-reveal">
                Unlock Your Fashion Aura
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-700 max-w-2xl ${visibleSections.has('hero') ? 'animate-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                Upload a photo or answer a few questions to find your perfect style palette
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${visibleSections.has('hero') ? 'animate-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="group glass-effect border border-white/30 text-gray-800 hover:glass-effect-dark rounded-full px-8 py-4 text-lg floating-shadow transition-all duration-500 hover:scale-105 animate-pulse animated-border"
              >
                <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Upload Image
              </Button>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-black via-purple-900 to-purple-600 hover:from-purple-900 hover:via-black hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg floating-shadow-dark transition-all duration-500 hover:scale-105 animate-pulse animated-border"
                style={{animationDelay: '1s'}}
              >
                Take Quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className={`relative ${visibleSections.has('hero') ? 'animate-reveal-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop"
                alt="Fashion Model"
                className="rounded-3xl shadow-2xl mx-auto max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-700 floating-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-purple-600/10 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-black/20 via-purple-400/30 to-black/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 relative" data-reveal id="features">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 text-gradient-primary ${visibleSections.has('features') ? 'animate-text-reveal' : 'opacity-0'}`}>
            Discover Your Style DNA
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group glass-effect border border-white/20 p-6 rounded-3xl hover:glass-effect-dark transition-all duration-500 hover:scale-105 floating-shadow cursor-pointer animated-border ${visibleSections.has('features') ? 'animate-scale-reveal' : 'opacity-0'}`}
                style={{
                  animationDelay: `${feature.delay}s`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gradient-primary transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bg} rounded-3xl blur-xl -z-10 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Try It Instantly Section */}
      <section className="py-20 px-4 relative" data-reveal id="try-it">
        <div className="max-w-4xl mx-auto">
          <Card className={`glass-effect-dark border border-white/10 p-8 lg:p-12 rounded-3xl floating-shadow-dark animated-border ${visibleSections.has('try-it') ? 'animate-scale-reveal' : 'opacity-0'}`}>
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary animate-text-reveal">
                Try It Instantly
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${visibleSections.has('try-it') ? 'animate-reveal-left' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                  <div className="glass-effect rounded-2xl p-6 border border-white/20 floating-shadow animate-reveal-up" style={{animationDelay: '0.5s'}}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Step 1: Upload Your Photo</h3>
                    <div className="bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 rounded-xl p-4 border-2 border-dashed border-purple-300 hover:border-black transition-colors cursor-pointer floating-shadow">
                      <Upload className="w-8 h-8 mx-auto text-purple-600 mb-2 animate-float" />
                      <p className="text-gray-800 text-center">Drag & drop or click to upload</p>
                    </div>
                  </div>
                  
                  <div className="glass-effect rounded-2xl p-6 border border-white/20 floating-shadow animate-reveal-up" style={{animationDelay: '0.7s'}}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Step 2: Get Your Results</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 animate-reveal-right" style={{animationDelay: '0.9s'}}>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Skin tone analysis</span>
                      </div>
                      <div className="flex items-center space-x-2 animate-reveal-right" style={{animationDelay: '1.1s'}}>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Color palette recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2 animate-reveal-right" style={{animationDelay: '1.3s'}}>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Style suggestions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`relative ${visibleSections.has('try-it') ? 'animate-reveal-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Demo face 1" className="rounded-2xl floating-shadow hover:scale-105 transition-transform duration-300 animate-scale-reveal" style={{animationDelay: '0.6s'}} />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Demo face 2" className="rounded-2xl floating-shadow hover:scale-105 transition-transform duration-300 animate-scale-reveal" style={{animationDelay: '0.8s'}} />
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" alt="Demo face 3" className="rounded-2xl floating-shadow hover:scale-105 transition-transform duration-300 animate-scale-reveal" style={{animationDelay: '1.0s'}} />
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face" alt="Demo face 4" className="rounded-2xl floating-shadow hover:scale-105 transition-transform duration-300 animate-scale-reveal" style={{animationDelay: '1.2s'}} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-purple-400/10 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Testimonials & Newsletter */}
      <section className="py-20 px-4 relative" data-reveal id="testimonials">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Enhanced Testimonials */}
          <div className={`${visibleSections.has('testimonials') ? 'animate-reveal-left' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-8 text-gradient-primary animate-text-reveal">
              What Our Users Say
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className={`glass-effect border border-white/20 p-6 rounded-2xl hover:glass-effect-dark transition-all duration-300 hover:scale-105 floating-shadow animated-border animate-reveal-up`} style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover floating-shadow animate-scale-reveal"
                      style={{animationDelay: `${0.4 + index * 0.1}s`}}
                    />
                    <div className="flex-1">
                      <p className="text-gray-700 mb-3 italic animate-text-reveal" style={{animationDelay: `${0.6 + index * 0.1}s`}}>"{testimonial.text}"</p>
                      <div className="animate-reveal-up" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-purple-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mt-4 animate-reveal-right" style={{animationDelay: `${1.0 + index * 0.1}s`}}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current animate-scale-reveal" style={{animationDelay: `${1.2 + index * 0.1 + i * 0.05}s`}} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Newsletter */}
          <div className={`${visibleSections.has('testimonials') ? 'animate-reveal-right' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <Card className="glass-effect-dark border border-white/10 p-8 rounded-3xl floating-shadow-dark hover:glass-effect transition-all duration-300 sticky top-24 animated-border">
              <h2 className="text-3xl font-bold mb-6 text-gradient-primary animate-text-reveal">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6 animate-reveal-up" style={{animationDelay: '0.5s'}}>
                Get the latest fashion insights and style tips delivered to your inbox.
              </p>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  className="glass-effect border-white/30 rounded-full px-6 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent animated-border animate-reveal-up"
                  style={{animationDelay: '0.7s'}}
                />
                <Button className="w-full bg-gradient-to-r from-black via-purple-900 to-purple-600 hover:from-purple-900 hover:via-black hover:to-purple-700 text-white rounded-full py-3 floating-shadow-dark transition-all duration-300 hover:scale-105 animate-reveal-up" style={{animationDelay: '0.9s'}}>
                  Subscribe Now
                </Button>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-black/20 via-purple-400/30 to-black/20 rounded-3xl blur-xl -z-10 opacity-50"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-white/20 glass-effect-dark" data-reveal id="footer">
        <div className={`max-w-6xl mx-auto text-center ${visibleSections.has('footer') ? 'animate-reveal-up' : 'opacity-0'}`}>
          <div className="text-2xl font-bold mb-4 text-gradient-primary animate-text-reveal">
            Company Name
          </div>
          <p className="text-gray-400 mb-6 animate-reveal-up" style={{animationDelay: '0.2s'}}>Discover your unique fashion DNA</p>
          <div className="flex justify-center space-x-6 text-gray-500">
            {['Privacy', 'Terms', 'Contact', 'About'].map((link, index) => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-purple-400 transition-colors animate-reveal-up animated-border" 
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
