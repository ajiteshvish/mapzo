
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
    Star,
    ShieldCheck,
    Award,
    Share2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '@/components/landing/Header';
import { Helmet } from 'react-helmet-async';

import { toast } from 'sonner';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);

    // Share Functionality
    const handleShare = async () => {
        const shareData = {
            title: `${product?.name} | Mapzo AI`,
            text: `Check out ${product?.name} on Mapzo AI!`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                toast.success('Shared successfully!');
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
            // Don't show error if user cancelled
            if ((err as Error).name !== 'AbortError') {
                toast.error('Failed to share');
            }
        }
    };
    const [timeLeft, setTimeLeft] = useState(() => ({
        days: 0,
        hours: 0,
        minutes: Math.floor(Math.random() * 45) + 15,
        seconds: Math.floor(Math.random() * 60)
    }));

    // Countdown Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev; // Stop at 0
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                    <Button onClick={() => navigate('/')}>Return Home</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-24">
            {product && (
                <Helmet>
                    <title>{`${product.name} | Mapzo AI Shop`}</title>
                    <meta name="description" content={`Buy ${product.name} - ${product.description.substring(0, 100)}... Official Mapzo AI Store.`} />
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": product.name,
                            "image": [`https://mapzoai.com${product.image}`],
                            "description": product.description,
                            "sku": `SKU-${product.id}`,
                            "brand": {
                                "@type": "Brand",
                                "name": "Mapzo AI"
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": `https://mapzoai.com/product/${product.id}`,
                                "priceCurrency": "INR",
                                "price": product.price,
                                "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                                "availability": "https://schema.org/InStock",
                                "itemCondition": "https://schema.org/NewCondition"
                            }
                        })}
                    </script>
                </Helmet>
            )}
            {/* Header */}
            <Header />

            <main className="container-custom py-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Column - Gallery */}
                        <div className="p-8 bg-gray-50 flex flex-col gap-6">
                            <div className="relative aspect-square bg-white rounded-2xl shadow-sm p-8 flex items-center justify-center group overflow-hidden">
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    src={product.image}
                                    alt={product.name}
                                />
                                <button
                                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-400 hover:text-purple-600 transition-all"
                                    onClick={handleShare}
                                    title="Share product"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-2">
                                <Button
                                    size="lg"
                                    className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg font-bold rounded-full shadow-lg shadow-purple-200"
                                    onClick={() => product.paymentLink && window.location.assign(product.paymentLink)}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - Info */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                                <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                                <span className="text-lg font-bold text-green-600">({product.discount})</span>
                            </div>

                            <div className="text-red-500 font-medium mb-8 text-sm bg-red-50 inline-block px-3 py-1 rounded-full self-start">
                                You save ₹{product.originalPrice - product.price}
                            </div>

                            {/* Timer */}
                            <div className="bg-gray-900 text-white rounded-xl p-6 mb-8 relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-red-400 font-bold mb-4 text-sm uppercase tracking-wider">Special deal ends in</p>
                                    <div className="flex gap-4 text-center">
                                        {[
                                            { label: 'Hours', value: timeLeft.hours },
                                            { label: 'Minutes', value: timeLeft.minutes },
                                            { label: 'Seconds', value: timeLeft.seconds }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-gray-800 rounded-lg p-3 min-w-[70px] border border-gray-700">
                                                <div className="text-2xl font-bold font-mono text-white mb-1">
                                                    {String(item.value).padStart(2, '0')}
                                                </div>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-widest">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            </div>

                            <div className="h-px bg-gray-100 mb-8"></div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { icon: ShieldCheck, label: 'Satisfaction Guaranteed' },
                                    { icon: Award, label: 'Premium Quality' },
                                    { icon: Star, label: 'Top Rated Service' }
                                ].map((badge, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                            <badge.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-600">{badge.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Details */}
                            {/* Details */}
                            <div className="space-y-6">
                                <div className="prose prose-purple max-w-none">
                                    <div className="whitespace-pre-wrap text-gray-600 leading-relaxed font-sans text-base">
                                        {product.description}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                <h4 className="font-bold text-yellow-800 mb-1 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    Compliance-Safe Note
                                </h4>
                                <p className="text-sm text-yellow-700">
                                    Magic QR does not delete existing Google reviews and works within Google’s review policies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
