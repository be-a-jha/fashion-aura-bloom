
import React, { useEffect, useState } from 'react';
import { Search, Upload, Play, Star, ArrowRight, Check, Menu, X, User, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedSkinTone, setSelectedSkinTone] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('');

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
      { threshold: 0.1, rootMargin: '100px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-reveal]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const skinTones = [
    { color: '#FFF2D9', value: 'light' },
    { color: '#FFE4B5', value: 'fair' },
    { color: '#DEB887', value: 'medium' },
    { color: '#CD853F', value: 'tan' },
    { color: '#A0522D', value: 'deep' }
  ];

  const bodyTypes = [
    { name: 'Hourglass', value: 'hourglass' },
    { name: 'Pear', value: 'pear' },
    { name: 'Rectangle', value: 'rectangle' },
    { name: 'Apple', value: 'apple' }
  ];

  const features = [
    {
      title: "Skin Tone Analysis",
      description: "AI-powered analysis to find your perfect color palette",
      icon: "🎨",
      delay: 0.2,
    },
    {
      title: "Body Shape Analysis", 
      description: "Personalized recommendations for your unique silhouette",
      icon: "📐",
      delay: 0.4,
    },
    {
      title: "e-Wardrobe",
      description: "Digital closet management with smart outfit suggestions",
      icon: "👗",
      delay: 0.6,
    },
    {
      title: "Fashion Planner",
      description: "Plan outfits for any occasion with AI assistance",
      icon: "📅",
      delay: 0.8,
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$0",
      period: "/month",
      badge: "Free Forever",
      description: "Perfect for trying out personal styling",
      features: [
        "Basic color analysis",
        "5 outfit recommendations daily",
        "Limited wardrobe storage",
        "No advanced body shape analysis"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Pro",
      price: "1rs",
      period: "/month",
      badge: "Popular",
      description: "For serious style enthusiasts",
      features: [
        "Advanced color analysis",
        "Unlimited outfit recommendations",
        "Full wardrobe storage",
        "Body shape analysis"
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Premium",
      price: "2rs",
      period: "/month",
      badge: "",
      description: "For the ultimate fashion experience",
      features: [
        "All Pro features",
        "Personal style consultant (1/month)",
        "Priority support",
        "Exclusive trend reports"
      ],
      buttonText: "Go Premium",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/80 to-purple-50/90"></div>
        
        {/* Gentle morphing shapes */}
        <div className="morph-bg w-96 h-96 top-20 left-20 animate-gentle-morph"></div>
        <div className="morph-bg w-80 h-80 bottom-40 right-20 animate-gentle-morph" style={{animationDelay: '3s'}}></div>
        <div className="morph-bg w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-gentle-morph" style={{animationDelay: '6s'}}></div>
        
        {/* Gentle drifting elements */}
        <div className="drift-bg w-64 h-64 top-1/4 right-1/4 animate-gentle-drift"></div>
        <div className="drift-bg w-48 h-48 bottom-1/4 left-1/4 animate-gentle-drift" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Enhanced Navbar inspired by Cerope */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="navbar-glass rounded-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Cerope</span>
            </div>
            
            {/* Center Search Bar */}
            <div className="hidden md:flex items-center space-x-2 glass-effect rounded-full px-4 py-2 border border-white/20 flex-1 max-w-md mx-8">
              <Search className="w-4 h-4 text-gray-500" />
              <Input 
                placeholder="Search styles, colors..." 
                className="border-0 bg-transparent placeholder-gray-500 text-gray-700 focus:ring-0 flex-1"
              />
            </div>

            {/* Right Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Consult</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Shop</a>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-gray-500" />
                <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingBag className="w-4 h-4 text-gray-500" />
                <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </div>
              <Button variant="ghost" className="text-gray-700 hover:bg-purple-50 rounded-full">
                Login
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-24" data-reveal id="hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`text-center lg:text-left space-y-8 ${visibleSections.has('hero') ? 'animate-smooth-reveal-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient-primary leading-tight animate-smooth-text-reveal">
                Unlock Your Fashion Aura
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-700 max-w-2xl ${visibleSections.has('hero') ? 'animate-smooth-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
                Upload a photo or answer a few questions to find your perfect style palette
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${visibleSections.has('hero') ? 'animate-smooth-reveal-up' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
              <Button 
                size="lg" 
                className="group glass-effect border border-white/30 text-gray-800 hover:glass-effect-dark rounded-full px-8 py-4 text-lg floating-shadow transition-all duration-700 hover:scale-105 animate-gentle-pulse"
              >
                <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                Upload Image
              </Button>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-black via-purple-900 to-purple-600 hover:from-purple-900 hover:via-black hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg floating-shadow transition-all duration-700 hover:scale-105 animate-gentle-pulse"
                style={{animationDelay: '2s'}}
              >
                Take Quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </div>
          </div>

          <div className={`relative ${visibleSections.has('hero') ? 'animate-smooth-reveal-right' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop"
                alt="Fashion Model"
                className="rounded-3xl shadow-2xl mx-auto max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-1000 floating-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-purple-600/5 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-black/10 via-purple-400/20 to-black/10 rounded-3xl blur-xl -z-10 animate-subtle-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Personalized Fashion Section */}
      <section className="py-20 px-4 relative" data-reveal id="experience">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary ${visibleSections.has('experience') ? 'animate-smooth-text-reveal' : 'opacity-0'}`}>
            Experience Personalized Fashion
          </h2>
          <p className={`text-xl text-gray-600 mb-16 max-w-3xl mx-auto ${visibleSections.has('experience') ? 'animate-smooth-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            Our advanced algorithms analyze your unique features to create the perfect style recommendations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group glass-effect border border-white/20 p-8 rounded-3xl hover:glass-effect-dark transition-all duration-700 hover:scale-105 floating-shadow cursor-pointer ${visibleSections.has('experience') ? 'animate-smooth-scale-reveal' : 'opacity-0'}`}
                style={{
                  animationDelay: `${feature.delay}s`
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gradient-primary transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Perfect Colors Section */}
      <section className="py-20 px-4 relative" data-reveal id="colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${visibleSections.has('colors') ? 'animate-smooth-reveal-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Find Your Perfect Colors</h2>
              <p className="text-lg text-gray-600 mb-8">
                Select your skin tone to see which colors will make you shine.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Skin Tone</h3>
                  <div className="flex space-x-4">
                    {skinTones.map((tone, index) => (
                      <div
                        key={tone.value}
                        className={`color-circle ${selectedSkinTone === tone.value ? 'ring-4 ring-purple-500' : ''}`}
                        style={{ backgroundColor: tone.color }}
                        onClick={() => setSelectedSkinTone(tone.value)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Body Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {bodyTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`body-type-option p-4 border-2 border-gray-200 rounded-xl text-center ${selectedBodyType === type.value ? 'selected' : ''}`}
                        onClick={() => setSelectedBodyType(type.value)}
                      >
                        <span className="font-medium text-gray-900">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3 text-lg floating-shadow transition-all duration-500 hover:scale-105">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Your Photo for Analysis
                </Button>
              </div>
            </div>

            <div className={`${visibleSections.has('colors') ? 'animate-smooth-reveal-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <Card className="glass-effect border border-white/20 p-8 rounded-3xl floating-shadow">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Try with sample faces</h3>
                <div className="grid grid-cols-5 gap-4 mb-8">
                  {[
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
                  ].map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`Sample face ${index + 1}`} 
                      className="w-16 h-16 rounded-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300 floating-shadow"
                    />
                  ))}
                </div>
                
                <h4 className="text-lg font-medium mb-4 text-purple-600">Your Recommended Colors</h4>
                <div className="flex space-x-3">
                  {['#A7F3D0', '#60A5FA', '#A78BFA', '#F472B6', '#FBBF24', '#34D399'].map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative" data-reveal id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary ${visibleSections.has('pricing') ? 'animate-smooth-text-reveal' : 'opacity-0'}`}>
              Simple, Transparent Pricing
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${visibleSections.has('pricing') ? 'animate-smooth-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              Choose the plan that fits your style journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''} glass-effect border border-white/20 p-8 rounded-3xl floating-shadow relative ${visibleSections.has('pricing') ? 'animate-smooth-scale-reveal' : 'opacity-0'}`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${plan.popular ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'}`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className={`w-4 h-4 ${feature.includes('No') ? 'text-gray-400' : 'text-green-500'}`} />
                      <span className={`${feature.includes('No') ? 'text-gray-400' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant as any}
                  className={`w-full rounded-full py-3 text-lg transition-all duration-500 hover:scale-105 ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative" data-reveal id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary ${visibleSections.has('faq') ? 'animate-smooth-text-reveal' : 'opacity-0'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-xl text-gray-600 mb-12 ${visibleSections.has('faq') ? 'animate-smooth-reveal-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            Everything you need to know about Company Name.
          </p>
          
          <Card className={`glass-effect border border-white/20 p-8 rounded-3xl floating-shadow text-left ${visibleSections.has('faq') ? 'animate-smooth-scale-reveal' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
            <div className="space-y-6">
              <div className="cursor-pointer hover:bg-purple-50 p-4 rounded-xl transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the color analysis work?</h3>
                <p className="text-gray-600">Our AI analyzes your skin tone, eye color, and hair color to determine which colors complement you best.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20 glass-effect-dark" data-reveal id="footer">
        <div className={`max-w-6xl mx-auto text-center ${visibleSections.has('footer') ? 'animate-smooth-reveal-up' : 'opacity-0'}`}>
          <div className="text-2xl font-bold mb-4 text-gradient-primary animate-smooth-text-reveal">
            Company Name
          </div>
          <p className="text-gray-400 mb-6 animate-smooth-reveal-up" style={{animationDelay: '0.2s'}}>Discover your unique fashion DNA</p>
          <div className="flex justify-center space-x-6 text-gray-500">
            {['Privacy', 'Terms', 'Contact', 'About'].map((link, index) => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-purple-400 transition-colors animate-smooth-reveal-up" 
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
