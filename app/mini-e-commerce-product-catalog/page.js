"use client";

import { useState } from "react";

export default function MiniECommerceProductCatalog() {
 
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Msi Titan GT77",
            price: "5000",
            category: "Electronics"
            
        },
        {
            id:2,
            name: "ROG Matrix Platinum GeForce RTX™ 5090",
            price: "6000",
            category: "Graphics Card"
        },
        {
            id:3,
            name: "Samsung S26 Ultra",
            price: "1300",
            category: "Phones",
        },
        {
            id:4,
            name: "SteelSeries Arctis Nova Pro Wireless",
            price: "500",
            category: "Gaming HeadPhones",            
        },
        {
            id: 5,
            name: "Shure SM7B",
            price: "700",
            category: "Mics",
        },
        {
            id: 6,
            name: "Cooler Master HAF 700 EVO",
            price: "600",
            category: "Cases"
        }


   

    ]
 
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
       (selectedCategory === "All" || product.category === selectedCategory)  
    );

 
 
    return(
        <div>
            <h1>Mini E-Commerce Product Catalog</h1>
            <input
            type="text"
            placeholder="Search for a Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
           <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
>
    <option value="All">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Graphics Card">Graphics Card</option>
    <option value="Phones">Phones</option>
    <option value="Gaming HeadPhones">Gaming HeadPhones</option>
    <option value="Mics">Mics</option>
    <option value="Cases">Cases</option>
</select>
            <ul>
                {filteredProducts.map((product, id) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}$</p>
                        <p>{product.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}