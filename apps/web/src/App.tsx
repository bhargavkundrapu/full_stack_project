import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';

const FEATURED_PRODUCTS = [
    {
        id: 1,
        title: "APPLE iPhone 14 (Blue, 128 GB)",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmacmvdsq.jpeg?q=70",
        price: "56,999",
        originalPrice: "69,900",
        discount: "18%",
        rating: "4.6",
        reviews: 219083
    },
    {
        id: 2,
        title: "SAMSUNG Galaxy S23 5G (Green, 256 GB)",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgavm.jpeg?q=70",
        price: "64,999",
        originalPrice: "89,999",
        discount: "27%",
        rating: "4.5",
        reviews: 12450
    },
    {
        id: 3,
        title: "Sony PS5 Console",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/gamingconsole/y/r/q/5-cfi-2008a01x-sony-original-imagy4zztu4puzzt.jpeg?q=70",
        price: "44,990",
        originalPrice: "54,990",
        discount: "18%",
        rating: "4.8",
        reviews: 5802
    },
    {
        id: 4,
        title: "Noise Halo Plus Smartwatch",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/7/g/-original-imagxp8tyaw2sntp.jpeg?q=70",
        price: "2,499",
        originalPrice: "8,999",
        discount: "72%",
        rating: "4.1",
        reviews: 43210
    }
];

function App() {
    return (
        <div className="min-h-screen bg-fk-light-gray flex flex-col">
            <Navbar />
            <Categories />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-4">
                {/* Banner Section */}
                <div className="bg-white rounded shadow-sm overflow-hidden mb-6 h-64 md:h-80 cursor-pointer relative group">
                    <img
                        src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3d6be896fba1cd03.jpg?q=20"
                        alt="Promo Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Best of Electronics */}
                <div className="bg-white rounded shadow-sm p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-medium text-black">Best of Electronics</h2>
                        <button className="bg-fk-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl shadow-md cursor-pointer hover:bg-blue-600 transition-colors">
                            &gt;
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FEATURED_PRODUCTS.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                rating={product.rating}
                                reviews={product.reviews}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#172337] text-white py-10 mt-8">
                <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-gray-400 text-xs mb-4 uppercase">About</h4>
                        <ul className="text-xs space-y-2">
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                            <li className="hover:underline cursor-pointer">About Us</li>
                            <li className="hover:underline cursor-pointer">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 text-xs mb-4 uppercase">Help</h4>
                        <ul className="text-xs space-y-2">
                            <li className="hover:underline cursor-pointer">Payments</li>
                            <li className="hover:underline cursor-pointer">Shipping</li>
                            <li className="hover:underline cursor-pointer">Cancellation & Returns</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 border-l border-gray-600 pl-8">
                        <h4 className="text-gray-400 text-xs mb-4 uppercase">Registered Office Address:</h4>
                        <p className="text-xs leading-relaxed text-gray-300">
                            Flipkart Internet Private Limited, <br />
                            Buildings Alyssa, Begonia & <br />
                            Clove Embassy Tech Village, <br />
                            Outer Ring Road, Devarabeesanahalli Village, <br />
                            Bengaluru, 560103, <br />
                            Karnataka, India <br />
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
