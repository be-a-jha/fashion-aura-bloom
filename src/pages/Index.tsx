
import React, { useEffect, useState } from 'react';
import { Search, Upload, Play, Star, ArrowRight, Check, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Skin Tone Analysis",
      description: "AI-powered analysis to find your perfect color palette",
      icon: "🎨",
      delay: 0.1
    },
    {
      title: "Body Shape Analysis", 
      description: "Personalized recommendations for your unique silhouette",
      icon: "📐",
      delay: 0.2
    },
    {
      title: "e-Wardrobe",
      description: "Digital closet management with smart outfit suggestions",
      icon: "👗",
      delay: 0.3
    },
    {
      title: "Fashion Planner",
      description: "Plan outfits for any occasion with AI assistance",
      icon: "📅",
      delay: 0.4
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
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-purple-50/60 to-purple-100/80"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', transform: 'translate(-50%, -50%)'}}></div>
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-3 shadow-2xl shadow-purple-500/20">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Company Name
            </div>
            
            <div className="hidden md:flex items-center space-x-2 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/40">
              <Search className="w-4 h-4 text-purple-600" />
              <Input 
                placeholder="Search styles..." 
                className="border-0 bg-transparent placeholder-purple-400 text-purple-700 focus:ring-0 w-64"
              />
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-purple-700 hover:bg-white/30 rounded-full transition-all duration-300 hover:shadow-lg">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent leading-tight">
                Unlock Your Fashion Aura
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
                Upload a photo or answer a few questions to find your perfect style palette
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-white/30 backdrop-blur-xl border border-white/40 text-purple-700 hover:bg-white/40 rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-pulse"
              >
                <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Upload Image
              </Button>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-pulse"
                style={{animationDelay: '1s'}}
              >
                Take Quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop"
                alt="Fashion Model"
                className="rounded-3xl shadow-2xl mx-auto max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Discover Your Style DNA
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl cursor-pointer"
                style={{
                  transform: scrollY > 500 ? 'translateY(0)' : 'translateY(50px)',
                  opacity: scrollY > 500 ? 1 : 0,
                  transitionDelay: `${feature.delay}s`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl -z-10 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Instantly Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Try It Instantly
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                    <h3 className="text-xl font-semibold mb-4 text-purple-800">Step 1: Upload Your Photo</h3>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 border-2 border-dashed border-purple-300 hover:border-purple-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                      <p className="text-purple-700 text-center">Drag & drop or click to upload</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                    <h3 className="text-xl font-semibold mb-4 text-purple-800">Step 2: Get Your Results</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Skin tone analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Color palette recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Style suggestions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Demo face 1" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Demo face 2" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" alt="Demo face 3" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face" alt="Demo face 4" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials & Newsletter */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-purple-800">{testimonial.name}</p>
                        <p className="text-sm text-purple-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <Card className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-2xl hover:bg-white/30 transition-all duration-300 sticky top-24">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest fashion insights and style tips delivered to your inbox.
              </p>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/50 backdrop-blur-sm border-white/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Subscribe Now
                </Button>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl blur-xl -z-10 opacity-50"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20 bg-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Company Name
          </div>
          <p className="text-gray-600 mb-6">Discover your unique fashion DNA</p>
          <div className="flex justify-center space-x-6 text-gray-500">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
