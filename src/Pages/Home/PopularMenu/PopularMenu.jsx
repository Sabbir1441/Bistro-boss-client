import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = UseMenu();

    const popular = menu.filter(item => item.category === 'popular');


    return (
        <div>
            <section className="mb-16 px-6">
                <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Menu"
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item => <MenuItem
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