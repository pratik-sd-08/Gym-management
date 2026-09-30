import React from "react";

const v3 = [
  ["Multi-Gym / Tenancy", "GYM", "Separate gyms, isolated data, owners and subscription-ready tenancy."],
  ["Multiple Branches", "BR", "Create branches, assign managers and compare branch performance."],
  ["Staff Roles", "RBAC", "Admin, owner, manager, trainer, receptionist and custom permissions."],
  ["Expenses", "EXP", "Rent, salaries, utilities, equipment and miscellaneous operating costs."],
  ["Analytics", "BI", "Revenue, expenses, profit, retention, attendance and growth analytics."],
  ["WhatsApp Automation", "WA", "Renewal, payment, attendance and announcement message workflows."]
];

export default function V3Sellable(){
  return <section className="v3" id="sellable">
    <div className="v3-head">
      <p className="section-label">05 — V3 / SELLABLE GYM OS</p>
      <h2>Built for one gym.<br/><span>Ready for a network.</span></h2>
      <p>A commercial architecture for owners who want to operate multiple locations without losing control of members, money or staff.</p>
    </div>

    <div className="v3-grid">
      {v3.map(([title,badge,text],i)=><article className="v3-card" key={title}>
        <div className="v3-card-top"><b>0{i+1}</b><span>{badge}</span></div>
        <h3>{title}</h3><p>{text}</p>
        <div className="v3-status"><i/> Production-ready architecture</div>
      </article>)}
    </div>

    <div className="tenant-demo">
      <div className="tenant-side">
        <small>OWNER CONTROL CENTER</small>
        <h3>Every gym.<br/>One command center.</h3>
        <p>Switch between organizations and branches while preserving strict data boundaries.</p>
        <button>Switch organization <span>⌄</span></button>
      </div>
      <div className="tenant-main">
        <div className="org-bar"><b>ForgeFit Group</b><span>3 gyms · 7 branches</span><strong>OWNER</strong></div>
        <div className="org-stats">
          <div><small>MRR</small><b>₹8.42L</b><em>↗ 18.6%</em></div>
          <div><small>MEMBERS</small><b>1,284</b><em>↗ 9.2%</em></div>
          <div><small>ATTENDANCE</small><b>89.4%</b><em>↗ 4.1%</em></div>
          <div><small>NET PROFIT</small><b>₹3.18L</b><em>↗ 14.8%</em></div>
        </div>
        <div className="analytics-box">
          <div className="analytics-title"><b>Revenue vs expenses</b><small>Last 6 months</small></div>
          <div className="analytics-bars">{[44,61,54,72,68,92,76,100,83,95,88,108].map((h,i)=><i style={{height:h+"%"}} key={i}/>)}</div>
        </div>
        <div className="branch-table">
          <div><b>Branch</b><b>Revenue</b><b>Expenses</b><b>Profit</b></div>
          <div><span>Patna Central</span><span>₹2.42L</span><span>₹92K</span><strong>₹1.50L</strong></div>
          <div><span>Kankarbagh</span><span>₹1.71L</span><span>₹71K</span><strong>₹1.00L</strong></div>
          <div><span>Boring Road</span><span>₹1.29L</span><span>₹54K</span><strong>₹75K</strong></div>
        </div>
      </div>
    </div>

    <div className="automation-flow">
      <div><small>WHATSAPP AUTOMATION</small><h3>Trigger once.<br/><span>Follow up automatically.</span></h3></div>
      <div className="flow-items">
        {[
          ["Membership expires in 7 days","Renewal reminder"],
          ["Payment received","Receipt confirmation"],
          ["Member misses 5 days","Re-engagement message"],
          ["New announcement","Branch broadcast"]
        ].map(([trigger,action],i)=><div key={trigger}><b>0{i+1}</b><span>{trigger}</span><i>→</i><strong>{action}</strong></div>)}
      </div>
    </div>
  </section>
}
