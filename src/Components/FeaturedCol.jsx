import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import featuered1 from '../Images/featuered-1.jpg'
import featuered2 from '../Images/featuered-2.jpg'
import featuered3 from '../Images/featuered-3.jpg'
import featuered4 from '../Images/featuered-4.jpg'
import featuered5 from '../Images/featuered-5.jpg'
import featuered6 from '../Images/featuered-6.jpg'

export const FeaturedCol = () => {
    return (
        <div className = "FeaturedCol">
            <h2>Featured Collection</h2>
            <div className="featuredCol-cards">
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered1} alt=""/></a>                    
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 1</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered2} alt=""/></a>
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 2</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered3} alt=""/></a>
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 3</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered4} alt=""/></a>
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 3</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered5} alt=""/></a>
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 3</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-card-image">
                        <a href=""><img src={featuered6} alt=""/></a>
                    </div>
                    <div className="featured-card-title">
                        <h4>Item 3</h4>
                    </div>
                    <div className="featured-card-price">
                        <h4> $250.00</h4>
                    </div>
                    <div className="featured-card-router-button">
                        <div className="view">
                            <a href="">VIEW</a>
                        </div>
                        <div className="add-to-cart">
                            <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
