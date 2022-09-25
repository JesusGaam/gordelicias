import React from "react";
import "./ListosGordear.scss";
import ListoGordearImg from "img/listos-gordear.svg";
import ListoGordearNelaImg from "img/listos-gordear-nela.svg";
import YoutubePlayer from "@/components/molecules/youtubePlayer/YoutubePlayer";
import YoutubeCoverImg from "img/youtube-video-cover.jpg";

const ListosGordear = () => {
  return (
    <section className="container listo-gordear">
      <div>
        <div className="title">
          <ListoGordearImg />
        </div>
        <div className="nela">
          <ListoGordearNelaImg />
        </div>
        <div className="youtube-container">
          <YoutubePlayer
            src="https://www.youtube.com/embed/a4mIYfqvrgE?autoplay=1&rel=0&showinfo=0"
            img={YoutubeCoverImg}
          />
        </div>
      </div>
    </section>
  );
};

export default ListosGordear;
