import Style from "./Demo.module.css";

export default function Demo() {
  return (
    <div className={Style.demo} id="demo">
      <div className={Style.text}>
        <p className={Style.small}>more then 100 financial planers.</p>
        <h2 className={Style.title}>one philosophy</h2>
        <p className={Style.paragraf}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          obcaecati voluptas voluptatibus natus ipsum corporis dignissimos
          cumque, cupiditate assumenda tenetur odit ipsa facere facilis, ratione
          a minima, libero fugit error? Minima, pariatur neque atque architecto
          dolorum rerum sunt consequatur veritatis.
        </p>
        <button className={Style.btn}>get your financial analysis</button>
      </div>
      <iframe
        className={Style.media}
        width="510"
        height="315"
        src="https://www.youtube.com/embed/Nf9hLULLyqk?si=XPq-t2mjA5DOyzS-"
        title="YouTube video player"
        //   frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //   allowfullscreen
      ></iframe>
    </div>
  );
}
