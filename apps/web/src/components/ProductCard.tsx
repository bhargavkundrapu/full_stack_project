interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    rating?: string;
    reviews?: number;
}

export default function ProductCard({ image, title, price, originalPrice, discount, rating, reviews }: ProductCardProps) {
    return (
        <div className="bg-white p-4 rounded hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full border border-gray-100">
            <div className="relative h-48 mb-4 flex-shrink-0">
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-fk-blue transition-colors mb-2">
                    {title}
                </h3>

                {rating && reviews && (
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                            {rating} ★
                        </div>
                        <span className="text-gray-500 text-xs">({reviews})</span>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/images/fk-cp-zion/img/fa_62673a.png" alt="f-assured" className="h-4 ml-2" />
                    </div>
                )}

                <div className="mt-auto">
                    <div className="flex items-end gap-2 mb-1">
                        <span className="text-xl font-bold text-gray-900">₹{price}</span>
                        {originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
                        )}
                        {discount && (
                            <span className="text-sm font-medium text-green-600">{discount} off</span>
                        )}
                    </div>
                    <p className="text-xs text-gray-500">Free delivery</p>
                </div>
            </div>
        </div>
    );
}
