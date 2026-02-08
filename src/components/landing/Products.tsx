import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Link, useNavigate } from 'react-router-dom';



const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        navigate(`/product/${product.id}`);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer"
        >
            <Link to={`/product/${product.id}`}>
                {/* Product Image */}
                <div className="relative aspect-square p-2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.src = '/placeholder.svg';
                        }}
                    />
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-gray-900 mb-3 leading-tight min-h-[32px] px-1">
                    {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                        ₹{product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-green-500">
                        {product.discount}
                    </span>
                </div>
            </div>

            {/* Add to Cart / Quantity */}
            <div className="px-1 pb-3">
                {quantity === 0 ? (
                    <Button
                        variant="outline"
                        className="w-full rounded-full border-purple-600 text-purple-700 hover:bg-purple-50 hover:text-purple-800 transition-all font-semibold py-1 h-9"
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
                ) : (
                    <div className="flex items-center justify-between border border-purple-600 rounded-full px-3 py-1 w-full text-purple-700 bg-purple-50 transition-colors cursor-pointer select-none h-9">
                        <Minus
                            className="w-4 h-4 cursor-pointer hover:text-purple-900 transition-colors"
                            onClick={handleDecrement}
                        />
                        <span className="text-base font-bold">{quantity}</span>
                        <Plus
                            className="w-4 h-4 cursor-pointer hover:text-purple-900 transition-colors"
                            onClick={handleIncrement}
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

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
                        Magic QR
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
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

                </motion.div>
            </div>
        </section>
    );
};
