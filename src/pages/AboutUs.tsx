import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { FileText, Shield, CreditCard, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Helmet>
                <title>About Mapzo AI - AI Local SEO Automation Experts</title>
                <meta name="description" content="Learn about Mapzo AI, the team behind the #1 AI Local SEO Software. We help businesses rank higher on Google Maps automatically." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Mapzo AI",
                            "description": "AI-powered Local SEO and Google Business Profile management platform",
                            "url": "https://mapzoai.com",
                            "logo": "https://mapzoai.com/logo.png",
                            "foundingDate": "2024",
                            "sameAs": [
                                "https://twitter.com/mapzoai",
                                "https://linkedin.com/company/mapzoai"
                            ]
                        }
                    })}
                </script>
            </Helmet>
            <Header />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 mb-24 relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>

                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6"
                        >
                            Our Story
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 font-heading tracking-tight"
                        >
                            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Mapzo AI</span>?
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 space-y-6 leading-relaxed text-left max-w-3xl mx-auto"
                        >
                            <p>
                                Mapzo AI is an AI-powered Local SEO and Google Business Profile management platform built to help businesses rank higher on Google — <span className="font-semibold text-gray-900">automatically.</span>
                            </p>
                            <p>
                                Local businesses struggle with incomplete profiles, inconsistent posting, unmanaged reviews, and expensive websites. Mapzo AI solves all of this from one intelligent dashboard.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 my-8">
                                <p className="italic text-gray-800 font-medium">
                                    "Our AI agent understands your business, location, and services, identifies high-impact local search keywords, and continuously optimizes your Google Business Profile, reviews, posts, and website — without manual work or agencies."
                                </p>
                            </div>
                            <p>
                                From AI-powered audits and one-click optimizations to automated review management, post scheduling, and dynamic website creation, Mapzo AI acts as a 24/7 Local SEO Manager for your business.
                            </p>
                            <p>
                                Whether you run a single local store or manage multiple locations, Mapzo AI helps you build a strong digital presence, improve local rankings, and drive more calls, visits, and conversions — effortlessly.
                            </p>
                            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center text-2xl pt-4">
                                Mapzo AI doesn’t just automate Local SEO. <br />It understands your business and grows it.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="container mx-auto px-4 lg:px-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 bg-gray-900">
                            <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] h-0">
                                <iframe
                                    src="https://www.youtube.com/embed/zn9pbnmFAE4"
                                    title="Mapzo AI Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Legal Sections */}
                <section className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal & Policies</h2>
                        <p className="text-gray-500">Everything you need to know about us.</p>
                    </div>

                    <div className="space-y-8">

                        {/* Terms & Conditions */}
                        <div id="terms" className="scroll-mt-32 bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
                                    <p className="text-sm text-gray-500">Effective Date: [Add Date]</p>
                                </div>
                            </div>

                            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-6">
                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">1. Introduction</h3>
                                    <p>Welcome to Mapzo AI (“Mapzo AI”, “we”, “our”, “us”). Mapzo AI is an AI-powered Local SEO and Google Business Profile (GBP/GMB) management platform designed to help businesses improve their local digital presence. By accessing or using our website, platform, or services, you agree to be bound by these Terms & Conditions.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-base mb-2">2. Eligibility</h3>
                                        <p>You must be at least 18 years old to use Mapzo AI. By using our services, you confirm that you are legally capable of entering into a binding agreement.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-base mb-2">3. Services Provided</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Google Business Profile optimization</li>
                                            <li>Local SEO audits and scoring</li>
                                            <li>Review generation and replies</li>
                                            <li>AI post creation and scheduling</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">4. Use of Google Services</h3>
                                    <p>Mapzo AI integrates with Google Business Profile APIs. You acknowledge that Google’s terms applies independently and we are not affiliated with Google.</p>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">9. Limitation of Liability</h3>
                                    <p>Mapzo AI shall not be liable for loss of rankings, traffic, business losses, or Google profile suspensions. Use of the platform is at your own risk.</p>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">12. Contact</h3>
                                    <p>For any questions, contact: <a href="mailto:support@mapzoai.com" className="text-blue-600 hover:underline">support@mapzoai.com</a></p>
                                </div>
                                <div className="text-xs text-gray-400 mt-4 p-4 bg-gray-50 rounded-lg">
                                    * Full terms available upon request or registration.
                                </div>
                            </div>
                        </div>

                        {/* Privacy Policy */}
                        <div id="privacy" className="scroll-mt-32 bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                                    <p className="text-sm text-gray-500">Effective Date: [Add Date]</p>
                                </div>
                            </div>

                            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-base mb-2">1. Information We Collect</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Name, email, phone number</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Business details and location</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Google Business Profile data</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-base mb-2">2. How We Use It</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> Provide and improve services</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> Optimize standard Google Profile</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> Generate AI-powered content</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">3. Google API Usage</h3>
                                    <p>Mapzo AI accesses Google Business Profile data strictly through official Google APIs and complies with Google API Services User Data Policy. We do not sell or misuse Google user data.</p>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">9. Contact</h3>
                                    <p><a href="mailto:privacy@mapzoai.com" className="text-blue-600 hover:underline">privacy@mapzoai.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Refund Policy */}
                        <div id="refund" className="scroll-mt-32 bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Refund & Cancellation Policy</h2>
                                    <p className="text-sm text-gray-500">Effective Date: [Add Date]</p>
                                </div>
                            </div>

                            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-6">
                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">1. Subscription Cancellation</h3>
                                    <p>You may cancel your subscription at any time from your dashboard. Cancellation stops future billing, but access remains active until the end of the billing cycle.</p>
                                </div>

                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="text-red-800 font-bold text-base mb-2">2. Refund Policy</h3>
                                    <p className="mb-2">Due to the nature of digital and AI-based services:</p>
                                    <p className="font-bold text-red-600">❌ No refunds are provided once a subscription period has started.</p>
                                    <p className="mt-2 text-xs">This includes Monthly plans, Annual plans, and Promotional plans.</p>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">3. Exceptional Cases</h3>
                                    <p className="mb-2">Refunds may be considered only if:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>A technical issue prevents service usage</li>
                                        <li>The issue is reported within 7 days of payment</li>
                                        <li>The issue is verified by our support team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
