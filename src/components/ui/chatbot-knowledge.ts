// Knowledge base for the Mapzo AI AI Chatbot
export const chatbotKnowledge = {
    // Company Information
    company: {
        name: "Mapzo AI",
        description: "AI-powered Local SEO Manager that automatically optimizes your Google Business Profile, manages reviews, and improves local search rankings",
        location: "F-1, C-09, KLIC, Bhopal, Madhya Pradesh, 462023, India",
        contact: {
            email: "support@mapzoai.com",
            phone: "7771880677",
            whatsapp: "7771880677"
        }
    },

    // Pricing Plans
    pricing: {
        indiaBusinessOwner: {
            premium: {
                name: "Business Owner Premium",
                price: "₹10,000/GMB",
                model: "Done-For-You",
                referral: "20% / Special Models",
                bestFor: "Business owners who want full service"
            },
            standard: {
                name: "Business Owner",
                price: "₹6,000/GMB",
                model: "Self-Serve SaaS",
                referral: "20% / Special Models",
                bestFor: "Business owners who prefer self-service"
            }
        },
        globalBusinessOwner: {
            standard: {
                name: "Business Owner",
                price: "$199/GMB",
                model: "Done-For-You",
                referral: "20% / Special Models",
                bestFor: "Global business owners wanting full service"
            },
            premium: {
                name: "Premium Business Owner",
                price: "$129/GMB",
                model: "Self-Serve SaaS",
                referral: "20% / Special Models",
                bestFor: "Global business owners preferring self-service"
            }
        },
        agency: {
            starter: {
                name: "Agency Starter",
                accounts: "20 GMB",
                price: "₹24,000",
                referral: "Special Models",
                bestFor: "Small agencies starting out"
            },
            growth: {
                name: "Agency Growth",
                accounts: "50 GMB",
                price: "₹36,000",
                referral: "Flat 10%",
                bestFor: "Growing agencies"
            },
            scale: {
                name: "Agency Scale",
                accounts: "100 GMB",
                price: "₹60,000",
                referral: "Flat 10%",
                bestFor: "Large agencies"
            }
        },
        specialReferral: {
            nonCommitment: {
                model: "Non-Commitment",
                commitment: "₹0",
                commission: "20%"
            },
            commitment: {
                model: "Commitment",
                commitment: "₹1,00,000",
                commission: "35%"
            },
            highCommitment: {
                model: "High Commitment",
                commitment: "₹3,00,000",
                commission: "50%"
            }
        }
    },

    // Key Features
    features: {
        googleBusinessProfile: {
            name: "Google Business Profile Optimization",
            description: "Automatic profile updates, keyword optimization, photo management, hours & info updates",
            benefits: ["Higher local search visibility", "More profile views", "Better local rankings"]
        },
        reviewManagement: {
            name: "AI Review Management",
            description: "AI-generated authentic responses, review monitoring, sentiment analysis",
            benefits: ["40% increase in response rates", "Improved customer relationships", "Better online reputation"]
        },
        contentCreation: {
            name: "Content & Social Media",
            description: "Automated post scheduling, seasonal content creation, multi-platform publishing",
            benefits: ["Consistent online presence", "Higher engagement", "More customer touchpoints"]
        },
        seoAnalytics: {
            name: "SEO Analytics",
            description: "Real-time ranking tracking, traffic analysis, competitor insights, performance reports",
            benefits: ["Data-driven decisions", "Track ROI", "Competitive advantage"]
        }
    },

    // Results & Statistics
    results: {
        averageImprovements: {
            localVisibility: "67% increase in 90 days",
            profileViews: "45% more Google Business Profile views",
            reviewResponse: "89% review response rate",
            websiteTraffic: "34% increase in website traffic",
            phoneCalls: "52% more phone calls from search"
        },
        timeline: {
            week1: "Profile optimization complete",
            week2to4: "Review responses automated, first ranking improvements",
            month2: "Significant ranking improvements visible",
            month3: "Major traffic growth and lead generation"
        }
    },

    // Industries Served
    industries: [
        "Healthcare (Dental, Medical, Veterinary)",
        "Food & Beverage (Restaurants, Coffee shops, Bars)",
        "Professional Services (Law firms, Accounting, Real estate)",
        "Home Services (Plumbing, HVAC, Landscaping)",
        "Retail (Boutiques, Auto dealers, Fitness centers)"
    ],

    // Common Questions & Answers
    faq: {
        "How quickly will I see results?": "Most businesses see initial improvements within 2 weeks, with significant results by month 2. Our AI works 24/7 for continuous optimization.",
        "Do I need technical knowledge?": "Not at all! Mapzo AI is designed to be completely automated. Just connect your accounts and our AI handles everything.",
        "What makes Mapzo AI different?": "Unlike traditional SEO tools that just report data, our AI actually does the work - optimizing profiles, responding to reviews, creating content, and improving rankings automatically.",
        "Can I cancel anytime?": "Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime.",
        "Do you offer support?": "Yes! We offer 24/7 live chat, email support, and phone support for Professional & Enterprise plans.",
        "Is there a free trial?": "Yes, all plans come with a 14-day free trial. No credit card required to start."
    },

    // Integration Information
    integrations: [
        "Google Business Profile",
        "Facebook",
        "Instagram",
        "Twitter",
        "Yelp",
        "WordPress",
        "Shopify",
        "Squarespace"
    ],

    // Success Stories
    successStories: [
        {
            business: "Coffee Shop",
            result: "Went from page 3 to #1 for 'best coffee shop'",
            timeframe: "2 months"
        },
        {
            business: "Dental Clinic",
            result: "3x increase in appointment bookings",
            timeframe: "3 months"
        },
        {
            business: "Law Firm",
            result: "150% more qualified leads",
            timeframe: "90 days"
        }
    ]
};

// Helper function to get contextual responses
export const getContextualResponse = (topic: string, userMessage: string): string | null => {
    const message = userMessage.toLowerCase();

    switch (topic) {
        case 'pricing':
            if (message.includes('india') || message.includes('indian')) {
                return `**India Business Owner Plans:**\n\n• **Business Owner Premium** - ₹10,000/GMB (Done-For-You)\n  Perfect for business owners who want full service\n\n• **Business Owner** - ₹6,000/GMB (Self-Serve SaaS)\n  Great for business owners who prefer self-service\n\nBoth plans include 20% referral rewards. Which model interests you more?`;
            }
            if (message.includes('global') || message.includes('international')) {
                return `**Global Business Owner Plans:**\n\n• **Business Owner** - $199/GMB (Done-For-You)\n  Full service for global business owners\n\n• **Premium Business Owner** - $129/GMB (Self-Serve SaaS)\n  Self-service option for global markets\n\nBoth plans include 20% referral rewards. Ready to get started?`;
            }
            if (message.includes('agency') || message.includes('agencies')) {
                return `**Agency Plans (India):**\n\n• **Agency Starter** - ₹24,000 (20 GMB accounts)\n  Special referral models available\n\n• **Agency Growth** - ₹36,000 (50 GMB accounts)\n  Flat 10% referral\n\n• **Agency Scale** - ₹60,000 (100 GMB accounts)\n  Flat 10% referral\n\nWhich agency plan fits your needs?`;
            }
            if (message.includes('referral') || message.includes('commission')) {
                return `**Special Referral Models (Agency Starter only):**\n\n• **Non-Commitment** - ₹0 commitment, 20% commission\n• **Commitment** - ₹1,00,000 commitment, 35% commission\n• **High Commitment** - ₹3,00,000 commitment, 50% commission\n\nHigher commitment = Higher rewards! Which model interests you?`;
            }
            break;

        case 'results':
            return `Here are the average results our customers see:\n\n📈 **90-Day Improvements:**\n• ${chatbotKnowledge.results.averageImprovements.localVisibility}\n• ${chatbotKnowledge.results.averageImprovements.profileViews}\n• ${chatbotKnowledge.results.averageImprovements.reviewResponse}\n• ${chatbotKnowledge.results.averageImprovements.websiteTraffic}\n• ${chatbotKnowledge.results.averageImprovements.phoneCalls}\n\nWant to see what's possible for your business?`;

        case 'industries':
            return `Mapzo AI works great for many industries:\n\n${chatbotKnowledge.industries.map(industry => `• ${industry}`).join('\n')}\n\nWhat type of business do you have? I can share specific examples for your industry!`;

        default:
            return null;
    }
};