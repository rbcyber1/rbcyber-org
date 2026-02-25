import { useState } from "react";
import "../styles/Pages.css";
export default function Goals(){
  const slides = [
    {
      title: "Title Slide",
      image: "cybersecurity-intro-slide.png"
    },
    {
      title: "Our Mission",
      image: "cybersecurity-slide-two.png"
    },
    {
      title: "Our Plan",
      image: "cybersecurity-slide-three.png"
    },
    {
      title: "Benefits to the Community",
      image: "cybersecurity-slide-four.png"
    },
        {
      title: "Conclusion",
      image: "cybersecurity-slide-final.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Our Club's Goals</h1>
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        style={{ width: "600px", borderRadius: "10px" }}/>
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
}
