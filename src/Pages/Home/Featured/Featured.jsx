import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading='Check It Out'
            heading='Featured Item'
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60  pb-20 pt-12 px-36">
                <div>
                    <img src={FImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus, dolores cupiditate nulla sunt quisquam consequuntur cumque aut deserunt modi officia amet? Unde velit eos sunt fugiat natus vel sit tempore suscipit, aliquam nemo assumenda, doloribus est nobis voluptatem fuga?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;