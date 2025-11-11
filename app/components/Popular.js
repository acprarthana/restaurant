export default function Popular() {
    const burger = [
        {
        name : "Classic Chicken",
        label : "Must Try",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F16.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Ricotta / goat cheese / beetroot",
        price : "$35"
        },
        {
        name : "Cheese Burger",
        label : "",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F17.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Atlantic / chips / salad / tartare",
        price : "$42"
        },
        {
        name : "Grilled Chicken",
        label : "Must Try",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F18.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Truffle mash / pepper sauce",
        price : "$28"
        },
    ];
        const pizza = [
            {
            name : "Margherita Pizza",
        label : "",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F13.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Ricotta / goat cheese / beetroot",
        price : "$15"
            },
             {
        name : "Pepperoni Pizza",
        label : "Must Try",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F14.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Atlantic / chips / salad / tartare",
        price : "$29"
        },
             {
        name : "BBQ Chicken Pizza",
        label : "",
        img : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F15.png&w=640&q=75",
        desc :"Ricotta / goat cheese / beetroot",
        desc2 :"Truffle mash / pepper sauce",
        price : "$29"
        },
        ]
        const sections = [
            { title:"Burgers" , items:burger },
                 { title:"Pizzas" , items:pizza },
        ];
return (
    <div className = "py-16 bg-white dark:bg-zinc-800 text-black text-center">
        <h3 className = "text-red-600 text-xl mb-3">------ Popular Menu ------</h3>
        <h2 className = "text-5xl dark:text-white font-bold mb-10">Latest Food Items</h2>
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
         {sections.map((section, index) => ( 
            <div key={index} className="rounded-3xl border border-gray-300 p-6 space-y-6">
                {section.items.map((item,i) => (
                    <div key = {i} className = "flex justify-between items-center border-b last:border-none pb-4">
                        <div className = "flex items-center gap-4 text-left">
                            <img src ={item.img} alt={item.name} className = "w-16 h-16 object-contain" />
                            <div>
        <div className = "flex items-center gap-2">
            <h3 className = "font-semibold text-lg dark:text-white">{item.name}</h3>
            {item.label && ( <span className = "bg-red-600 text-white text-xs px-2 py-1 rounded">{item.label}</span>)}
            </div>
            <p className = "text-gray-500 dark:text-gray-300 text-sm">{item.desc}</p>
            {item.desc2 && (<p className = "text-gray-400 dark:text-gray-300 text-sm">{item.desc2}</p>)}

        </div>
        </div>
        <div className = "font-bold text-xl dark:text-white">{item.price}
            </div>
        </div>
                ))}
                </div>
         ))}
    </div>
    </div>
);

}