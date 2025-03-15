import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import about_img_1 from "../../assets/about-img-1.jpg";
import about_img_2 from "../../assets/about-img-2.jpg";
import story from "../../assets/story.jpg";
import chef_1 from "../../assets/chef-1.jpg";
import chef_2 from "../../assets/chef-2.jpg";
import chef_3 from "../../assets/chef-3.jpg";
import chef_4 from "../../assets/chef-4.jpg";
import blog_1 from "../../assets/blog-1.jpg";
import blog_2 from "../../assets/blog-2.jpg";
import blog_3 from "../../assets/blog-3.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="text-part">
          <span>CoffeeStore</span>
          <h1>Coffee beans from anywhere in the world</h1>
          <div className="parah">
            <p>
              Roasted beans are ground and then brewed with near-boiling water
              to produce the beverage known as coffee.
            </p>
            <Link to="#" className="menu-btn">
              <i className="ri-drinks-line"></i> View Menu
            </Link>
            <Link to="#" className="video-btn">
              <i className="ri-play-circle-line"></i> Play Video
            </Link>
          </div>
        </div>

        <div className="img-part"></div>
      </div>

      <div className="about">
        <div className="about-txt">
          <div className="about-wrapper">
            <span>- Intro About</span>
            <h2>27 YEARS OF EXPERIENCE</h2>
            <p>
              The coffee shop was a popular place to hang out and meet up with
              friends. It was a typical coffee shop with wood paneled walls, and
              tables set up in the middle of the room. The smell of coffee hung
              in the air, enticing the customers to come in.
              <br />
              <br />
              There is a place called the coffee shop I used to go to all the
              time. They have a lot of different types of coffees and they also
              have pastries, donuts, and muffins. I always go for a muffin and a
              latte. The coffee shop is always crowded because it is a very
              popular place.
            </p>
            <Link to="#" className="">
              <i className="ri-drinks-fill"></i> Buy Now
            </Link>
          </div>
        </div>
        <div className="about-img">
          <div className="about-img-1">
            <img src={about_img_1} alt="" data-scroll data-scroll-speed="1" />
          </div>
          <div className="about-img-2">
            <img src={about_img_2} alt="" data-scroll data-scroll-speed="1" />
          </div>
        </div>
      </div>

      <div className="menu">
        <div>
          <div className="menu-heading">
            <span>EXPLORE THE TASTE</span>
            <h3>Our Flavor Menus</h3>
          </div>

          <div className="menu-list">
            <div className="menu-list-text">
              <h2>Coffee</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Medium</th>
                    <th>Large</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      Espresso
                      <p>Espresso, where passion meets perfection.</p>
                    </th>
                    <th>1.75</th>
                    <th>2.20</th>
                  </tr>
                  <tr>
                    <th>
                      Mocchiato
                      <p>The perfect harmony of espresso and sweetness</p>
                    </th>
                    <th>2.75</th>
                    <th>3.20</th>
                  </tr>
                  <tr>
                    <th>
                      Mocha latte
                      <p>The perfect blend of chocolate and espresso.</p>
                    </th>
                    <th>2.75</th>
                    <th>4.80</th>
                  </tr>
                  <tr>
                    <th>
                      Mocha latte
                      <p>The perfect blend of chocolate and espresso.</p>
                    </th>
                    <th>2.75</th>
                    <th>4.80</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="line"></div>

            <div className="menu-list-text">
              <h2>bakery</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Medium</th>
                    <th>Large</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>
                      Espresso
                      <p>Espresso, where passion meets perfection.</p>
                    </th>
                    <th>1.75</th>
                    <th>2.20</th>
                  </tr>
                  <tr>
                    <th>
                      Mocchiato
                      <p>The perfect harmony of espresso and sweetness</p>
                    </th>
                    <th>2.75</th>
                    <th>3.20</th>
                  </tr>
                  <tr>
                    <th>
                      Mocha latte
                      <p>The perfect blend of chocolate and espresso.</p>
                    </th>
                    <th>2.75</th>
                    <th>4.80</th>
                  </tr>
                  <tr>
                    <th>
                      Mocha latte
                      <p>The perfect blend of chocolate and espresso.</p>
                    </th>
                    <th>2.75</th>
                    <th>4.80</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="menu-ubb">
            <Link to="#" className="menu-btn">
              <i className="ri-arrow-right-long-line"></i> See all menu
            </Link>
          </div>
        </div>
      </div>

      <div className="story">
        <div className="story-img">
          <img src={story} alt="" />
        </div>
        <div className="story-text">
          <span>OUR STORY</span>
          <h2>How We Made Coffee</h2>
          <div className="story-steps">
            <div className="steps-logo">
              <img src="./images/coffee-beans-icon.png" alt="" />
            </div>
            <div className="steps-text">
              <h3>Organic coffee seed</h3>
              <p>
                Lectus vestibulum mattis ullamcorperen velit sed ullam corper
                morbi. Felis imperdiet proin fermentum leo.
              </p>
            </div>
          </div>
          <div className="story-steps">
            <div className="steps-logo">
              <img src="./images/coffee-machine-icon.png" alt="" />
            </div>
            <div className="steps-text">
              <h3>Italy modern machine</h3>
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expet endis in mei.
              </p>
            </div>
          </div>
          <div className="story-steps">
            <div className="steps-logo">
              <img src="./images/coffee-cup-icon.png" alt="" />
            </div>
            <div className="steps-text">
              <h3>Best traditional flavors</h3>
              <p>
                A charming neighbourhood restaurant and bar, located in the
                heart of the city; a true gateway to gourmet
              </p>
            </div>
          </div>
          <div className="story-btn">
            <Link to="#">
              <i className="ri-arrow-right-long-line"></i> Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="chefs">
        <div className="chefs-wrap">
          <div className="chef-heading">
            <span>Meet Our</span>
            <h2>Our Chefs</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="chef-img">
                <img src={chef_1} alt="" />
              </div>
              <div className="chef-name">
                <h4>Fynley Wilkinson</h4>
              </div>
            </div>
            <div className="card">
              <div className="chef-img">
                <img src={chef_2} alt="" />
              </div>
              <div className="chef-name">
                <h4>Myra Welsh</h4>
              </div>
            </div>
            <div className="card">
              <div className="chef-img">
                <img src={chef_3} alt="" />
              </div>
              <div className="chef-name">
                <h4>Robyn Peel</h4>
              </div>
            </div>
            <div className="card">
              <div className="chef-img">
                <img src={chef_4} alt="" />
              </div>
              <div className="chef-name">
                <h4>Fynley Shepard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="blog-wrap">
          <div className="blog-heading">
            <span>Update Infors</span>
            <h2>Our Lastest Articles</h2>
          </div>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="card-banner">
                <img className="banner-img" src={blog_1} alt="" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag">#food #breakfast</p>
                <h2 className="blog-title">
                  The Ultimate Guide To Coffee Shop Marketing Strategies
                </h2>
                <small>4 July 2024</small>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-banner">
                <img className="banner-img" src={blog_2} alt="" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag">#breakfast #lunch</p>
                <h2 className="blog-title">
                  From Farm To Mug: Ethical Sourcing Practices For Your
                </h2>
                <small>4 July 2024</small>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-banner">
                <img className="banner-img" src={blog_3} alt="" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag">#dinner #breakfast</p>
                <h2 className="blog-title">
                  What is the future of front end development?
                </h2>
                <small>4 July 2024</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
