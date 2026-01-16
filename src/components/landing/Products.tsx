import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
    {
        id: 1,
        name: 'PDF MAGIC QR SOFT COPY',
        image: '/product-qr-soft.png',
        price: 248,
        originalPrice: 1999,
        discount: '88% OFF',
        description: 'Digital QR code solution for Google reviews',
    },
    {
        id: 2,
        name: 'MAGIC QR STANDEE (4X6...)',
        image: '/product-qr-standee.png',
        price: 398,
        originalPrice: 2999,
        discount: '87% OFF',
        description: 'Physical standee with QR code for reviews',
    },
];

export const Products = () => {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground px-4 pt-8">
                        Boost Your <span className="gradient-text">Google Reviews</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                        Get more 5-star reviews with our Magic QR solutions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-soft overflow-hidden hover-lift group"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        e.currentTarget.src = '/placeholder.svg';
                                    }}
                                />
                                {/* Discount Badge */}
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                    {product.discount}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {product.description}
                                </p>

                                {/* Pricing */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl font-bold text-foreground">
                                        ₹{product.price}
                                    </span>
                                    <span className="text-lg text-muted-foreground line-through">
                                        ₹{product.originalPrice}
                                    </span>
                                    <span className="text-sm font-semibold text-green-600">
                                        {product.discount}
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full group-hover:bg-soft-blue group-hover:text-white group-hover:border-soft-blue transition-all"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to cart
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Products Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button variant="link" size="lg" className="text-soft-blue" asChild>
                        <a href="/products">View All Products →</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
