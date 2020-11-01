import React from "react";
import { ProfileCard } from "../components/userProfileCard/ProfileCard";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div>
      <ProfileCard />
    </div>
  ) : (
    <div className="desktop-body container">
      <div className="row">
        <div className="col-3">
          <ProfileCard />
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};

export default Home;
