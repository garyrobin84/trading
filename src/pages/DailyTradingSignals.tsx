import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Clock, Target, Star, CheckCircle, Users, BarChart3, Signal, Bell, Download, Play } from 'lucide-react';
import Button from '../components/ui/Button';

const DailyTradingSignals = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  const signalPackages = [
    {
      id: 'basic',
      name: "Basic Signals",
      price: 97,
      period: "per month",
      description: "Essential trading signals for beginners",
      features: [
        "5-10 signals per week",
        "Forex signals only",
        "Basic entry/exit levels",
        "Email delivery",
        "Risk management guidelines",
        "Community access"
      ],
      benefits: [
        "Learn signal interpretation",
        "Build trading confidence",
        "Reduce analysis time",
        "Follow professional setups"
      ],
      popular: false
    },
    {
      id: 'premium',
      name: "Premium Signals",
      price: 197,
      period: "per month",
      description: "Comprehensive signals across all markets",
      features: [
        "15-20 signals per week",
        "Forex, Crypto & Indices",
        "Detailed analysis included",
        "SMS + Email + App alerts",
        "Live trade explanations",
        "Priority support",
        "Weekly market outlook",
        "Performance tracking"
      ],
      benefits: [
        "Multi-market opportunities",
        "Real-time notifications",
        "Educational value",
        "Professional analysis"
      ],
      popular: true
    },
    {
      id: 'vip',
      name: "VIP Signals",
      price: 397,
      period: "per month",
      description: "Exclusive signals with personal guidance",
      features: [
        "25-30 signals per week",
        "All markets + Futures",
        "Video analysis for each signal",
        "Instant push notifications",
        "Live trading room access",
        "Direct chat with Gary",
        "Custom risk parameters",
        "Monthly strategy call",
        "Trade copying service"
      ],
      benefits: [
        "Maximum opportunities",
        "Personal mentorship",
        "Advanced strategies",
        "Exclusive access"
      ],
      popular: false
    }
  ];

  const recentSignals = [
    {
      id: 1,
      pair: "EUR/USD",
      type: "BUY",
      entry: "1.0892",
      stopLoss: "1.0850",
      takeProfit: "1.0950",
      status: "Active",
      time: "2 hours ago",
      analysis: "Strong bullish momentum with ECB dovish stance supporting EUR strength",
      riskReward: "1:1.4",
      confidence: 85
    },
    {
      id: 2,
      pair: "GBP/JPY",
      type: "SELL",
      entry: "189.45",
      stopLoss: "190.20",
      takeProfit: "187.80",
      status: "Closed +120 pips",
      time: "6 hours ago",
      analysis: "Brexit concerns and BoJ intervention risks creating selling pressure",
      riskReward: "1:2.2",
      confidence: 78
    },
    {
      id: 3,
      pair: "BTC/USD",
      type: "BUY",
      entry: "42,150",
      stopLoss: "41,200",
      takeProfit: "44,500",
      status: "Active",
      time: "1 day ago",
      analysis: "Institutional buying and ETF approval optimism driving crypto higher",
      riskReward: "1:2.5",
      confidence: 92
    }
  ];

  const performanceStats = [
    {
      metric: "87%",
      description: "Win Rate (Last 30 days)",
      icon: <Target className="text-green-500" size={24} />
    },
    {
      metric: "1:2.3",
      description: "Average Risk:Reward",
      icon: <BarChart3 className="text-blue-500" size={24} />
    },
    {
      metric: "+2,450",
      description: "Total Pips This Month",
      icon: <TrendingUp className="text-purple-500" size={24} />
    },
    {
      metric: "156",
      description: "Signals Sent This Month",
      icon: <Signal className="text-yellow-500" size={24} />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      result: "+£12,450 in 3 months",
      quote: "Gary's signals have completely transformed my trading. The detailed analysis helps me understand the 'why' behind each trade.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Chen",
      result: "92% win rate following signals",
      quote: "The accuracy is incredible. I've learned so much just by following Gary's signals and reading his analysis.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Rodriguez",
      result: "Consistent profits for 6 months",
      quote: "Finally found a signal service that actually works. The risk management is excellent and the education is invaluable.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const handlePurchase = (packageName, price) => {
    alert(`Redirecting to Stripe checkout for ${packageName} - £${price}/month`);
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Daily Trading Signals - Gary Robinson Trading</title>
      <meta name="description" content="Professional daily trading signals with detailed analysis. High-accuracy forex, crypto, and futures signals from Gary Robinson with real-time alerts and educational content." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Daily Trading Signals
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional trading signals with detailed analysis, real-time alerts, and educational insights from Gary Robinson
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {performanceStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">{stat.metric}</div>
                <p className="text-gray-200 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Signals */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Recent Trading Signals
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              See examples of our recent signals with detailed analysis and performance results
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {recentSignals.map((signal) => (
              <div key={signal.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-blue-900 text-xl">{signal.pair}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        signal.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {signal.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{signal.time}</div>
                    <div className={`text-sm font-medium ${
                      signal.status.includes('Closed') ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {signal.status}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entry:</span>
                        <span className="font-medium">{signal.entry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stop Loss:</span>
                        <span className="font-medium text-red-600">{signal.stopLoss}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Take Profit:</span>
                        <span className="font-medium text-green-600">{signal.takeProfit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">R:R Ratio:</span>
                        <span className="font-medium">{signal.riskReward}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Confidence:</span>
                        <span className="font-medium">{signal.confidence}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${signal.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <p className="text-gray-700 text-sm italic">"{signal.analysis}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your Signal Package
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Select the perfect signal package for your trading needs and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {signalPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.popular ? 'ring-2 ring-yellow-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-900 mb-2">£{pkg.price}</div>
                  <div className="text-gray-600 mb-4">{pkg.period}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Star className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={pkg.popular ? "secondary" : "primary"}
                    fullWidth
                    size="lg"
                    onClick={() => handlePurchase(pkg.name, pkg.price)}
                  >
                    Start Receiving Signals - £{pkg.price}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Cancel anytime • 7-day free trial
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How Our Signals Work
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">1. Market Analysis</h3>
              <p className="text-gray-600 text-sm">Gary analyzes multiple markets using advanced technical and fundamental analysis to identify high-probability setups.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Signal className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">2. Signal Generation</h3>
              <p className="text-gray-600 text-sm">Qualified setups are converted into detailed signals with entry, stop loss, take profit, and comprehensive analysis.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">3. Instant Delivery</h3>
              <p className="text-gray-600 text-sm">Signals are delivered instantly via SMS, email, and mobile app notifications so you never miss an opportunity.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">4. Trade & Learn</h3>
              <p className="text-gray-600 text-sm">Execute the trades and learn from detailed explanations to improve your own trading skills over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              What Our Signal Subscribers Say
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500" size={16} fill="#EAB308" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Why Choose Our Trading Signals?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <TrendingUp className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">High Accuracy</h3>
              <p className="text-gray-700">87% win rate over the last 30 days with consistent performance across all market conditions.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Clock className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Real-Time Alerts</h3>
              <p className="text-gray-700">Instant notifications via SMS, email, and mobile app ensure you never miss a trading opportunity.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Educational Value</h3>
              <p className="text-gray-700">Learn while you trade with detailed analysis and explanations for every signal sent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Receiving Professional Trading Signals Today
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of successful traders who rely on Gary's signals for consistent profits and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start 7-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Play className="mr-2" size={16} />
                Watch Demo Video
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>No commitment • Cancel anytime • 7-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyTradingSignals;