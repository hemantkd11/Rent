import React from "react";
import "./Home.css";
import { Button, Grid } from "@mui/material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-banner-wrapper">
          <div className="home-text-and-btn">
            <div className="home-text-head">
              Get a 360-view of your sales & operations data
            </div>
            <div className="home-text">
              let our solutions help you to reach the goals you have
            </div>
            <div className="home-dashboard-btn">
              <button>Dashboard</button>
            </div>
          </div>
        </div>
      </div>
      {/* intodunction */}
      <div className="into-container">
        <Introduction />
      </div>
      {/* seervices */}
      <div className="service-container">
        <Seervices />
      </div>
      {/* latestnew */}
      <div className="latestnews-container">
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;

export const Introduction = () => {
  return (
    <div className="Into-continer-wrapper">
      <div className="intro-main-wrapper">
        <div className="Into-heading">
          <h3>CUISINE CAPTAIN</h3>
        </div>
        <div className="intro-main-body-container">
          {/* image */}
          <div className="intro-img-box">
            <img src="./intro.png" />
          </div>

          {/* text-intro */}
          <div className="intro-text-box">
            {/* heading */}
            <div className="intro-text-heading">
              How we are Helping F&B Businesses
            </div>
            {/* text-body */}
            <div className="inntro-text-body">
              Welcome to Cuisine Captain, the ultimate restaurant management
              solution. Our application is designed to streamline the day-to-day
              operations of restaurants, from Advanced reporting and Business
              management to menu creation and analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Seervices = () => {
  return (
    <div className="service-container-wrapper">
      <div className="service-main-wrapper">
        {/* body heading */}
        <div className="services-header">
          <h2>Services we Provides</h2>
        </div>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xs={6} padding={1}>
            <div className="service-detail-box gap">
              <div className="main_container">
                <div className="intro-logo-box">
                  <div className="logo-box">
                    {/* <img src="./logo3.png" /> */}
                    <MiscellaneousServicesIcon />
                  </div>
                </div>
                <div className="contained">
                  <div className="service-deatil-box-heading">
                    On Point Data Analytics
                  </div>
                  <div className="text-comp">
                    Our solution provides businesses with deep insights into
                    their operations. It allows them to track sales data,
                    monitor inventory, analyze customer behavior, and more
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="service-detail-box gap">
              <div className="main_container">
                <div className="intro-logo-box">
                  <div className="logo-box">
                    {/* <img src="./logo3.png" /> */}
                    <MiscellaneousServicesIcon />
                  </div>
                </div>

                <div className="contained">
                  <div className="service-deatil-box-heading">
                    Advanced Dashboards
                  </div>
                  <div className="text-comp">
                    With our intuitive and user-friendly interface, you can
                    focus on what you do best - serving your customers delicious
                    food and creating memorable dining experiences
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="service-detail-box gap">
              <div className="main_container">
                <div className="intro-logo-box">
                  <div className="logo-box">
                    {/* <img src="./logo3.png" /> */}
                    <MiscellaneousServicesIcon />
                  </div>
                </div>
                <div className="contained">
                  <div className="service-deatil-box-heading">
                    Data Driven Insights
                  </div>
                  <div className="text-comp">
                    We also offer real-time analytics and reporting, allowing
                    restaurant owners and managers to monitor their business
                    performance on the go and make quick, informed decisions.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="service-detail-box gap">
              <div className="main_container">
                <div className="intro-logo-box">
                  <div className="logo-box">
                    {/* <img src="./logo3.png" /> */}
                    <MiscellaneousServicesIcon />
                  </div>
                </div>
                <div className="contained">
                  <div className="service-deatil-box-heading">Integrations</div>
                  <div className="text-comp">
                    Our solutions goes beyond just providing basic features for
                    restaurant management. With our deep analytical capabilities
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export const LatestNews = () => {
  return (
    <div className="latest-news-wrapper">
      <div className="latest-news-main-container">
        <div className="slider-box">
        <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nZBZXEWyxmubB9FaugsGhFy3KtVlXcij0w&usqp=CAU" />
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU"/>
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU" />
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU" />
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU" />
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU" />
          </div>
          <div className="latest-news-img-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwqHWvKj56FB4HcZjJ8Dg3GZMG0xqh4Y0UA&usqp=CAU" />
          </div>
        </div>
      </div>
    </div>
  );
};
