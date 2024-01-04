import Style from "./Testimonial.module.css";
export default function Testimonial() {
  const array = [
    {
      id: 1,
      img: "/src/assets/user1.jpeg",
      name: "Johnson.m.j",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias, tempora minima tenetur ea iste sunt similique vel sed explicabo,porro praesentium perferendis deserunt asperiores!",
      title: 'Drictor of "Financial Times" ',
    },
    {
      id: 2,
      img: "/src/assets/user2.jpeg",
      name: "Carol Harper",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias, tempora minima tenetur ea iste sunt similique vel sed explicabo,porro praesentium perferendis deserunt asperiores!",
      title: "Drictor at Risktec Solutions Ltd ",
    },
    {
      id: 3,
      img: "/src/assets/user3.jpeg",
      name: "Show.J.R",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias, tempora minima tenetur ea iste sunt similique vel sed explicabo,porro praesentium perferendis deserunt asperiores!",
      title: "Managing Director of BPW Global ",
    },
  ];

  return (
    <div className={Style.testimonial} id="testimonial">
      <div className={Style.header}>
        <h2 className={Style.h2}>Testimonial</h2>
        <div className={Style.line}></div>
      </div>
      <div className={Style.cards}>
        {array.map((a) => (
          <div key={a.id} className={Style.card}>
            <img className={Style.img} src={a.img} alt="user testimonial" />
            <p className={Style.text}>{a.text}</p>
            <span className={Style.name}>{a.name}</span>
            <p className={Style.title}>{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
