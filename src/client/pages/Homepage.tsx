import { image } from "@cloudinary/url-gen/qualifiers/source";
import Cloudpic1 from "../assets/Cloudpics";
import { Background } from "@cloudinary/url-gen/qualifiers";
import { url } from "inspector";
import NavBar from "../components/NavBar";

export default function Homepage() {
  return (
    <div className="homepage">
      <NavBar />
    </div>
  );
}
