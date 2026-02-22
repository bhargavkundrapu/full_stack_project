import { ShoppingCart, Search, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="bg-fk-blue text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex-shrink-0 flex flex-col items-center cursor-pointer">
                    <span className="font-bold text-xl italic tracking-wider">Flipkart</span>
                    <span className="text-[10px] italic flex items-center hover:underline">
                        Explore <span className="text-fk-yellow font-bold ml-1">Plus✦</span>
                    </span>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-2xl relative">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="w-full py-2 px-4 rounded-sm text-black outline-none shadow-sm"
                    />
                    <Search className="absolute right-3 top-2 text-fk-blue w-5 h-5 cursor-pointer" />
                </div>

                {/* Nav Items */}
                <div className="flex items-center gap-8 text-sm font-medium">
                    <button className="bg-white text-fk-blue px-8 py-1 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        Login
                    </button>

                    <div className="flex items-center gap-1 cursor-pointer hover:underline">
                        <User className="w-5 h-5" />
                        <span>More</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer font-bold hover:underline">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
