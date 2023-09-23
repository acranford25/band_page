import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Cloudpic1 = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "doh7njipk" } });

  const pic1 = cld.image(`TheVinylBirds/The.Gypsies-112-EDIT_1_lrzczj`);

  return (
    <div className="App-body">
      <AdvancedImage cldImg={pic1} />
    </div>
  );
};

export default Cloudpic1;
