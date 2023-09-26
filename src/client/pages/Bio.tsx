import Cloudpic1 from "../assets/Cloudpics";
import NavBar from "../components/NavBar";

export default function Bio() {
  return (
    <div className="flex flex-col" id="bio">
      <NavBar />
      <div className=" pt-80">
        <p className="pt-80"></p>
        <div className="pt-10 h-screen flex flex-col bg-white">
          <h1 className="underline underline-offset-8 decoration-2">Bio</h1>
          <p className="pt-10 px-10 flex-grow">
            {" "}
            We are The Vinyl Birds, a blues rock duo from Newnan, Georgia. While
            we would mainly be considered "blues rock", we write and play
            anything we feel matches our aesthetic. This "umbrella" stretches
            from hill country/delta blues, early punk, 60's soul, all the way to
            softer folky acoustic ballads. It doesn't matter what we play, as
            long as it sounds like us.
          </p>
        </div>
      </div>
    </div>
  );
}
