import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Cloudpics = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "doh7njipk" } });

  const pic1 = cld.image(`TheVinylBirds/The.Gypsies-112-EDIT_1_lrzczj`);
  pic1.resize(fill(1000));
  return (
    <div className="App-body">
      <AdvancedImage cldImg={pic1} />
    </div>
  );
  z;
};

export default Cloudpics;
