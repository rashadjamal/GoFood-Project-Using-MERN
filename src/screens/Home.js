import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
    const [search, setSearch] = useState('');
    const [foodcat, setFoodcat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            setFoodItem(response.sample);
            setFoodcat(response.foodcate);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner " id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        </div>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container'>
                {foodcat.length > 0 ? (
                    foodcat.map((cat) => (
                        <div key={cat._id} className='row'>
                            <div className='col'>
                                <h3>{cat.CategoryName}</h3>
                                <div className='row'>
                                    {foodItem.filter(item => (item.CategoryName === cat.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map((item) => (
                                            <div key={item._id} className='col-lg-4 col-md-6'>
                                                <Card
                                                   foodItem ={item}
                                                    options={item.options[0]}
                                               
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='row'>
                        <div className='col'>No categories found</div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
