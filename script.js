
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #eee;
    color: #fff;
    font-family: sans-serif;
  }
  .slide  {
    text-decoration: none;
    color: inherit;
  }
  .slide-btn {
    display: none;
  }
  .carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .carousel h1 {
    text-align: center;
    margin: 0 auto;
    line-height: 75vh;
    font-size: 10vmin;
  }
  .slide {
    float: left;
    height: 100%;
    width: 0;
    transition: width .3s linear;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .slide > * {
    transition: transform .15s linear;
    transform: scale(0);
  }
  .labels {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .labels label {
    display: inline-block;
    background-color: transparent;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin: .5vmin 2vmin;
    border: 3px solid white;
  }
  .carousel .one,
  .carousel .two,
  .carousel .three,
  .carousel .four,
  .carousel .five {
    background-position: center center;
    background-size: cover;
  }
  .carousel .one {
    background-image: url(hero1.jpeg);
  }
  .carousel .two {
    background-image: url(hero1.jpeg);
  }
  .carousel .three {
    background-image: url(hero1.jpeg);
  }
  .carousel .four {
    background-image: url(hero1.jpeg);
  }
  .carousel .five {
    background-image: url(hero1.jpeg);
  }
  #slide-btn-1:checked ~ .one,
  #slide-btn-2:checked ~ .two,
  #slide-btn-3:checked ~ .three,
  #slide-btn-4:checked ~ .four,
  #slide-btn-5:checked ~ .five {
    width: 100%;
  }
  #slide-btn-1:checked ~ .one > *,
  #slide-btn-2:checked ~ .two > *,
  #slide-btn-3:checked ~ .three > *,
  #slide-btn-4:checked ~ .four > *,
  #slide-btn-5:checked ~ .five > * {
    transform: scale(1);
  }
  #slide-btn-1:checked ~ .labels label[for="slide-btn-1"],
  #slide-btn-2:checked ~ .labels label[for="slide-btn-2"],
  #slide-btn-3:checked ~ .labels label[for="slide-btn-3"],
  #slide-btn-4:checked ~ .labels label[for="slide-btn-4"],
  #slide-btn-5:checked ~ .labels label[for="slide-btn-5"] {
    background-color: white;
  }
  .credit{
    text-align: center;
    color: #fff;
    margin-top: 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.credit a{
    text-decoration: none;
    color:#fff;
    font-weight: bold;
}  

