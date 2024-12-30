import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu , setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular');
            setMenu(PopularItems)
        })
    },[])

    return (
        <div>
            <section className="mb-16">
                <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Menu"
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="mt-4 text-center">
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;