"use client"

import { useState, useEffect } from "react"
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  LineChart,
  ArrowUpRight,
  Sparkles,
  Target,
  Award,
  ChevronRight,
} from "lucide-react"

const Home = () => {
  const [counts, setCounts] = useState({
    trades: 0,
    profit: 0,
    users: 0,
    accuracy: 0,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Animated counter effect
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = {
      trades: 15420,
      profit: 98.7,
      users: 8500,
      accuracy: 94.2,
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        trades: Math.floor((targets.trades / steps) * step),
        profit: Number.parseFloat(((targets.profit / steps) * step).toFixed(1)),
        users: Math.floor((targets.users / steps) * step),
        accuracy: Number.parseFloat(((targets.accuracy / steps) * step).toFixed(1)),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const currencyPairs = [
    { pair: "EUR/USD", change: "+0.45%", positive: true },
    { pair: "GBP/USD", change: "+0.32%", positive: true },
    { pair: "USD/JPY", change: "-0.18%", positive: false },
    { pair: "AUD/USD", change: "+0.67%", positive: true },
    { pair: "USD/CAD", change: "-0.23%", positive: false },
    { pair: "NZD/USD", change: "+0.51%", positive: true },
  ]

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time market analysis powered by AI algorithms",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Trading",
      description: "Automated strategies that maximize your profits",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Signals",
      description: "High-accuracy trading signals delivered instantly",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Join thousands of successful traders worldwide",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <style>{`
        /* Pure CSS animations without third-party dependencies */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 40px rgba(217, 119, 6, 0.3), inset 0 0 40px rgba(217, 119, 6, 0.1); }
          50% { opacity: 0.4; box-shadow: 0 0 80px rgba(217, 119, 6, 0.5), inset 0 0 60px rgba(217, 119, 6, 0.2); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes glow-border {
          0%, 100% { box-shadow: 0 0 20px rgba(217, 119, 6, 0.3), inset 0 0 20px rgba(217, 119, 6, 0.1); }
          50% { box-shadow: 0 0 40px rgba(217, 119, 6, 0.6), inset 0 0 30px rgba(217, 119, 6, 0.2); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        /* Animation classes */
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .animate-ticker { animation: ticker 25s linear infinite; }
        .animate-glow-border { animation: glow-border 3s ease-in-out infinite; }
        .animate-scan-line { animation: scan-line 3s ease-in-out infinite; }
        
        /* Animation delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        /* Glassmorphism effect */
        .glass-effect {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(217, 119, 6, 0.2);
        }
        
        /* Premium gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #b45309 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Hover glow effect */
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(217, 119, 6, 0.4), inset 0 0 20px rgba(217, 119, 6, 0.1);
        }
      `}</style>

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse-glow delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-glow delay-400"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-700/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Currency Ticker */}
      <div className="relative z-10 glass-effect border-b border-amber-600/20 overflow-hidden sticky top-0">
        <div className="flex animate-ticker whitespace-nowrap py-3">
          {[...currencyPairs, ...currencyPairs, ...currencyPairs].map((item, index) => (
            <div key={index} className="inline-flex items-center mx-8 text-sm group cursor-pointer">
              <span className="text-amber-400 font-bold group-hover:text-yellow-300 transition-colors">
                {item.pair}
              </span>
              <span
                className={`ml-3 font-semibold transition-colors ${item.positive ? "text-emerald-400 group-hover:text-emerald-300" : "text-rose-400 group-hover:text-rose-300"}`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 md:mb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-8 animate-slide-up border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 group cursor-pointer">
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:animate-spin" />
            <span className="text-amber-300 text-sm font-semibold">Welcome to Elite Trading</span>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-slide-up delay-100 leading-tight">
            <span className="gradient-text block">Master the Markets</span>
            <span className="text-white block mt-2">Achieve Financial Freedom</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-slide-up delay-200 leading-relaxed">
            Join the elite community of traders who are transforming their financial future. With cutting-edge tools and
            proven strategies, your success story starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-300">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl font-bold text-black text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Start Trading Now
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-10 py-4 glass-effect rounded-xl font-bold text-amber-300 text-lg hover:border-amber-400/80 hover:bg-amber-600/10 transition-all duration-300 hover:scale-105 border border-amber-600/50 group">
              Learn More
              <ChevronRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {[
            { icon: LineChart, label: "Total Trades", value: "trades", suffix: "+" },
            { icon: TrendingUp, label: "Avg. Profit", value: "profit", suffix: "%" },
            { icon: DollarSign, label: "Active Users", value: "users", suffix: "+" },
            { icon: Target, label: "Accuracy", value: "accuracy", suffix: "%" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass-effect border border-amber-600/30 rounded-2xl p-8 backdrop-blur-xl hover-glow transition-all duration-500 hover:scale-105 hover:border-amber-400/60 group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 rounded-lg group-hover:from-amber-500/30 group-hover:to-yellow-600/20 transition-all">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                </div>
                <div className="text-4xl md:text-5xl font-black gradient-text">
                  {counts[stat.value].toLocaleString()}
                  <span className="text-amber-400">{stat.suffix}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Why Choose Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the power of professional trading tools designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect border border-amber-600/30 rounded-2xl p-8 backdrop-blur-xl hover-glow transition-all duration-500 hover:scale-105 hover:border-amber-400/60 animate-slide-up cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/10 group-hover:to-yellow-600/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative glass-effect border border-amber-600/40 rounded-3xl p-12 md:p-16 text-center overflow-hidden group hover-glow transition-all duration-500">
          <div className="absolute inset-0 animate-shimmer"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-500/5 via-yellow-600/5 to-amber-500/5"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="gradient-text">Ready to Transform Your Trading?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful traders who trust our platform. Start your journey to financial freedom
              today.
            </p>
            <button className="group/btn relative px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl font-bold text-black text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 active:scale-95 inline-flex items-center gap-3">
              <span className="relative z-10">Get Started Free</span>
              <Sparkles className="w-5 h-5 animate-float relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-amber-600/20 mt-20 md:mt-32">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 <span className="text-amber-400 font-bold">Elite Trading Platform</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
