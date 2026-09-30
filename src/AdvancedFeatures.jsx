import React from "react";

import { advancedFeatures } from "./advanced";

export default function AdvancedFeatures(){
  return (
    <section className="advanced" id="advanced">
      <div className="advanced-head">
        <p className="section-label">03 — PRO OPERATIONS</p>
        <h2>From gym software<br/><span>to a real business OS.</span></h2>
        <p>These are the features that turn a portfolio project into something a gym owner can actually operate from.</p>
      </div>
      <div className="advanced-grid">
        {advancedFeatures.map(([title,text,badge],i)=>(
          <article className="advanced-card" key={title}>
            <div className="advanced-top"><b>{String(i+1).padStart(2,"0")}</b><span>{badge}</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="advanced-line"/>
          </article>
        ))}
      </div>
      <div className="ops-panel">
        <div>
          <small>BRANCH PERFORMANCE</small>
          <h3>One owner view.<br/>Every location.</h3>
        </div>
        <div className="branch-list">
          {[
            ["Patna Central","₹2.42L","94%"],
            ["Kankarbagh","₹1.71L","88%"],
            ["Boring Road","₹68K","81%"]
          ].map(([name,revenue,att])=>(
            <div className="branch-row" key={name}>
              <span>{name}</span><b>{revenue}</b><em>{att} attendance</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
