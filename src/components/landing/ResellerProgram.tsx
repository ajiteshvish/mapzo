import React from 'react';
import { Rocket, Briefcase, Zap, IndianRupee, Package, CreditCard, Play, TrendingUp, AlertCircle, Quote } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const ResellerProgram = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-sm font-semibold mb-4 rounded-full">
            <Rocket className="w-4 h-4 inline-block mr-2" />
            Agency Reseller Program
          </Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Magic QR + GMB Automation
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Powered by Mapzo AI
          </p>
        </div>

        {/* What You Get Section */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute inset-0 bg-blue-500 rounded-[2.5rem] transform translate-y-4 translate-x-4 opacity-10"></div>
          <Card className="rounded-[2.5rem] border-0 shadow-xl bg-white overflow-hidden relative z-10">
            <CardHeader className="bg-slate-900 text-white p-8 md:p-10 border-b border-slate-800">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Briefcase className="text-blue-400" />
                What You Get
              </CardTitle>
              <CardDescription className="text-slate-300 text-base mt-2">
                We manage the backend technology. You focus on generating sales and building recurring revenue.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Resell Magic QR</h4>
                  <p className="text-slate-600">Provide cutting-edge offline-to-online lead generation to your clients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Build Recurring Revenue</h4>
                  <p className="text-slate-600">Offer GMB Automation services for monthly recurring income without tech handling.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Structure - Two Columns */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <IndianRupee className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-slate-900">Pricing Structure <span className="text-slate-500 font-medium text-2xl">(For Agencies)</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Magic QR Box */}
            <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow bg-blue-50/50">
              <CardHeader className="pb-4">
                <Badge variant="outline" className="w-fit mb-4 bg-white text-blue-700 border-blue-200">Base Product</Badge>
                <CardTitle className="text-2xl text-slate-900">Magic QR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                    <span className="text-slate-600 font-medium">Cost to Agency</span>
                    <span className="text-2xl font-black text-slate-900">₹250 <span className="text-sm font-normal text-slate-500">/ QR / Year</span></span>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <span className="text-slate-600 font-medium">Minimum Purchase</span>
                    <span className="font-bold text-slate-900">10 QR Codes (<span className="text-blue-600">₹2,500</span>)</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm mt-4">
                    <p className="font-bold text-blue-900 flex items-start gap-2">
                      <span className="text-xl">👉</span>
                      <span>You can resell at <span className="text-blue-600 text-lg">₹500 – ₹1000+</span> per client</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GMB Automation Box */}
            <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow bg-green-50/50">
              <CardHeader className="pb-4">
                <Badge variant="outline" className="w-fit mb-4 bg-white text-green-700 border-green-200">Recurring Add-on</Badge>
                <CardTitle className="text-2xl text-slate-900">GMB Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                    <span className="text-slate-600 font-medium">Cost to Agency</span>
                    <span className="text-2xl font-black text-slate-900">₹300 <span className="text-sm font-normal text-slate-500">/ GMB / Month</span></span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 block">Covers:</span>
                    <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Review Reply</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Post & Geo Tagging</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Profile Optimization</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Content Automation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm mt-4">
                    <p className="font-bold text-green-900 flex items-start gap-2">
                      <span className="text-xl">👉</span>
                      <span>You can resell at <span className="text-green-600 text-lg">₹800 – ₹2000/mo</span> per client</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bundle Model Callout */}
        <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Package className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-bold">Bundle Model <span className="text-amber-400 text-xl font-medium">(Recommended)</span></h3>
          </div>
          
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl">
            Sell this as a complete solution for maximum impact and retention:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-amber-400 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Magic QR
              </h4>
              <p className="text-indigo-200">Serves as the ultimate lead generation & review collection tool.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-amber-400 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                GMB Automation
              </h4>
              <p className="text-indigo-200">Converts those leads and boosts ranking continuously.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-white/5 py-4 rounded-xl border border-white/10 relative z-10 font-bold text-xl">
            💡 Upfront Revenue + Monthly Recurring Income
          </div>
        </div>

        {/* Terms and Activation */}
        <div className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CreditCard className="w-5 h-5 text-orange-500" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h5 className="font-bold text-slate-900 mb-2">For Magic QR</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>One-time payment (yearly)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>Minimum 10 QR mandatory</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h5 className="font-bold text-slate-900 mb-2">For GMB Automation</h5>
                <p className="text-sm font-medium text-slate-500 mb-3 block">Flexible billing advance options:</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700">Quarterly (3mo)</Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700">Half-Yearly (6mo)</Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700">Yearly (12mo)</Badge>
                </div>
                <p className="text-sm font-bold text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-100 flex items-center gap-2">
                  👉 No monthly billing (to ensure commitment)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Play className="w-5 h-5 text-purple-500" />
                Activation Models
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <Badge className="bg-purple-600 mb-3">Option 1: Phased Approach</Badge>
                <ul className="space-y-2 text-purple-900 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Buy Magic QR in bulk (min 10)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Add GMB automation anytime per client</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <Badge className="bg-slate-800 mb-3">Option 2: Direct Combo</Badge>
                <ul className="space-y-2 text-slate-700 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>₹250 (QR yearly) <span className="text-slate-400">+</span> ₹300/mo (Automation)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>Paid in quarterly / 6 month / yearly cycles</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profit Potential */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50 mb-4 px-4 py-1 text-sm uppercase tracking-widest font-bold">🎯 Agency Profit Potential</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Example Scenario: 20 Clients</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
              <h4 className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-4">Your Cost</h4>
              <div className="space-y-2">
                <div className="flex xl:justify-between justify-center gap-4 text-slate-700"><span>QR (Yearly):</span> <span className="font-bold">₹5,000</span></div>
                <div className="flex xl:justify-between justify-center gap-4 text-slate-700"><span>Automation (Monthly):</span> <span className="font-bold">₹6,000</span></div>
              </div>
            </div>
            
            <div className="bg-green-600 p-6 rounded-2xl shadow-lg border border-green-500 text-center text-white">
              <h4 className="text-green-100 font-bold uppercase tracking-wider text-sm mb-4">Your Selling</h4>
              <div className="space-y-2">
                <div className="flex xl:justify-between justify-center gap-4"><span>QR (Yearly):</span> <span className="font-black">₹20,000+</span></div>
                <div className="flex xl:justify-between justify-center gap-4"><span>Automation (Monthly):</span> <span className="font-black">₹20K – ₹40K</span></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-2xl p-6 text-center text-2xl font-black shadow-xl transform hover:scale-[1.02] transition-transform">
            🔥 Profit Margin: 2X – 5X Easily!
          </div>
        </div>

        {/* Footer Conditions & Quote */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-slate-100 border-dashed border-2 border-slate-300">
            <CardContent className="p-6">
              <h5 className="font-bold flex items-center gap-2 mb-4 text-slate-800">
                <AlertCircle className="w-5 h-5 text-slate-500" />
                Key Conditions
              </h5>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">🎯 Minimum 10 QR purchase required to start</span>
                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">⏳ Recurring plans must be prepaid (quarterly+)</span>
                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">🎨 White-label support available (optional upgrade)</span>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-slate-100 relative">
            <Quote className="w-16 h-16 absolute top-6 left-6 text-blue-100 rotate-180" />
            <div className="relative z-10 text-center">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-6 border border-orange-200">🔥 Positioning Line (Use in Sales)</Badge>
              <p className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">
                "We help businesses generate reviews using <span className="text-blue-600">Magic QR</span> and convert them into <span className="text-green-600">ranking + leads</span> using automated GMB management."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
