
import React from "react";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

const shots = [
  ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85","MEMBERS","Know every member."],
  ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=85","TRAINERS","Coach with context."],
  ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=85","WORKOUTS","Turn plans into progress."],
  ["https://images.unsplash.com/photo-1581009146145-b5ef050c2e1a?auto=format&fit=crop&w=1800&q=85","GROWTH","Run the business better."]
];

export default function VisualStory(){
  return <section className="visual-story" id="visual">
    <div className="visual-intro">
      <p className="section-label">06 — THE EXPERIENCE</p>
      <h2>Don't just manage.<br/><span>See it move.</span></h2>
      <p>Large visuals, focused messaging and cinematic transitions that reveal the product as you scroll.</p>
      <div className="scroll-cue"><ArrowDown size={14}/> Scroll to explore</div>
    </div>

    <div className="story-stack">
      {shots.map(([src,label,title],i)=><article className="story-shot" key={title}>
        <img src={src} alt={title} loading={i===0?"eager":"lazy"}/>
        <div className="story-overlay"/>
        <div className="story-copy"><small>{label}</small><h3>{title}</h3><span>Explore feature <ArrowRight size={15}/></span></div>
      </article>)}
    </div>

    <div className="cinematic">
      <video className="cinematic-video" muted loop autoPlay playsInline preload="metadata"
        poster="https://images.unsplash.com/photo-1583454110551-21f4fa2d?auto=format&fit=crop&w=2200&q=85">
        <source src="/videos/gym-film.mp4" type="video/mp4"/>
      </video>
      <div className="cinematic-fallback"/>
      <div className="cinematic-grain"/>
      <div className="cinematic-content">
        <button className="play-button" aria-label="Gym film"><Play fill="currentColor" size={20}/></button>
        <p className="section-label">FORGEFIT / THE FILM</p>
        <h2>Every check-in.<br/><span>Every rep. Every result.</span></h2>
        <p>Put your own licensed gym video at <code>public/videos/gym-film.mp4</code>. Until then, the cinematic poster keeps the section visually complete.</p>
      </div>
    </div>

    <div className="image-marquee">
      {[...shots,...shots].map(([src,,title],i)=><img key={i} src={src} alt={title} loading="lazy"/>)}
    </div>
  </section>
}
