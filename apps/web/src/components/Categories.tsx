const CATEGORIES = [
    { name: 'Top Offers', image: 'https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
    { name: 'Mobiles', image: 'https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' },
    { name: 'Electronics', image: 'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
    { name: 'Appliances', image: 'https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
    { name: 'Fashion', image: 'https://rukminim2.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' },
    { name: 'Beauty', image: 'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    { name: 'Home', image: 'https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' },
];

export default function Categories() {
    return (
        <div className="bg-white shadow-sm mb-4">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center overflow-x-auto no-scrollbar">
                {CATEGORIES.map((cat, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group min-w-[80px]">
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-16 h-16 object-contain group-hover:scale-105 transition-transform"
                        />
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap group-hover:text-fk-blue">
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
