import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"; // Import your CSS file

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main">
          <h1 className="nn">Weclome to Recipe Search</h1>
        <Slider {...settings}>
          <div>
            <img
              className="slide-image"
              src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="slide-image"
              src="https://b.zmtcdn.com/data/pictures/9/20575589/2ced954129d4f31f33f238f779394f37_o2_featured_v2.jpg?output-format=webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="slide-image"
              src="https://b.zmtcdn.com/data/pictures/7/20147797/338781aebc573be2d23a7ce2e6821114_o2_featured_v2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slide-image"
              src="https://b.zmtcdn.com/data/pictures/5/19744215/c71f59ce31710a85d03b0e3ba36c46ab_o2_featured_v2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slide-image"
              src="https://b.zmtcdn.com/data/pictures/chains/2/18939242/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp"
              alt=""
            />
          </div>
        </Slider>
      <div className="xx">
       <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/bg2.jpg" alt="" />
        <h1>Strawbery Cake</h1>
        <p>Simple Delicious</p>
        <button>See Recipe</button>
       </div>

       <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/bg3.jpg" alt="" />
        <h1>Chineese & Noodles</h1>
        <p>Simple Delicious</p>
        <button>See Recipe</button>
       </div>
      </div>
      <h1>The Best Recipe</h1>
      <div className="yy">
        <div>
          <img src="https://themewagon.github.io/delicious/img/bg-img/r1.jpg" alt="" />
          <p>Sushy Reciepy</p>
        </div>
        <div> <img src="https://themewagon.github.io/delicious/img/bg-img/r2.jpg" alt="" />
          <p>Homemade Burger</p></div>
        <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/r3.jpg" alt="" />
          <p>Vegan Smoothie</p>
        </div>
        <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/r4.jpg" alt="" />
          <p>Calabasa Soup</p>
        </div>
        <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/r5.jpg" alt="" />
          <p>Homemade Breakfast</p>
        </div>
        <div>
        <img src="https://themewagon.github.io/delicious/img/bg-img/r6.jpg" alt="" />
          <p>Healthy Fruit Desert</p>
        </div>
      </div >
      <div className="zz">
      <div className=".xh" >
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr1.jpg" alt="" />
          </div>
          <div className="text">
            <h1>January 04, 2018</h1>
            <h2>Homemade Italian Pasta</h2>
            <p>2 Comments</p>
          </div>
        
      </div>
      <div>
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr2.jpg" alt="" />
          </div>
          <div  class="text">
            <h1>January 04, 2018</h1>
            <h2>Baked Bread</h2>
            <p>2 Comments</p>
          
        </div>
      </div>
      <div>
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr3.jpg" alt="" />
          </div>
          <div  className="text">
            <h1>January 04, 2018</h1>
            <h2>Scalop on Salts</h2>
            <p>2 Comments</p>
          </div>
        
      </div>
      <div>
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr4.jpg" alt="" />
          </div>
          <div className="text">
            <h1>January 04, 2018</h1>
            <h2>Fruit On plate</h2>
            <p>2 Comments</p>
         
        </div>
      </div>
      <div>
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr5.jpg" alt="" />
          </div>
          <div className="text">
            <h1>January 04, 2018</h1>
            <h2>Macaroons</h2>
            <p>2 Comments</p>
          
        </div>
      </div>
      <div>
        <div className="text">
          <img src="https://themewagon.github.io/delicious/img/bg-img/sr6.jpg" alt="" />
          <div className="text">
            <h1>January 04, 2018</h1>
            <h2>Chocolate tarte</h2>
            <p>2 Comments</p>
          
        </div>
      </div>
     
      
      </div>
      
      </div>
      <div className="pp">
        <div>
<h1>Nothing is better than going home to family and eating good food and relaxing
</h1>
<p>John Smith</p>
        </div>
        <div>
          <img src="https://themewagon.github.io/delicious/img/bg-img/add.png" alt="" />
        </div>
      </div>
      <h1 className="xu">Follow us on Instagram</h1>
      <div className="xn">
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta1.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta2.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta3.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta4.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta5.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta5.jpg" alt="" />
        <img src="https://themewagon.github.io/delicious/img/bg-img/insta7.jpg" alt="" />
      </div>
     <img src="https://www.canva.com/design/DAFx0d4kqnU/gL84uP0fXO8-htKizxzm_Q/view?utm_content=DAFx0d4kqnU&utm_campaign=designshare&utm_medium=link&utm_source=editor" alt="" />
      </div>
    );
  }
}
