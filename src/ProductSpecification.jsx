import React from "react";

const roleData = [
  ["Admin", "Everything", "Full system control, branches, staff, billing, reports and settings."],
  ["Manager", "Operations", "Members, payments, attendance, reports and day-to-day gym operations."],
  ["Trainer", "Coaching", "Assigned members, workouts, diet, progress and attendance."],
  ["Member", "Personal", "Own profile, membership, payments, attendance, workout, diet and progress."]
];

const productModules = [
  {
    no:"01", title:"Member Management",
    items:["Add / edit / delete members","Profile photo + contact details","Joining and membership dates","Active / expired / suspended status","Emergency contact","Search and smart filters","Auto-generated member ID","Complete membership history"]
  },
  {
    no:"02", title:"Membership & Plans",
    items:["Monthly / quarterly / half-yearly / yearly plans","Create, edit and delete plans","Duration and pricing","Plan benefits","Freeze membership","Upgrade / downgrade","Renew membership","Expiry tracking + automatic status"]
  },
  {
    no:"03", title:"Payments & Billing",
    items:["Payment recording + history","Pending and partial payments","Cash / UPI / card / bank transfer","Invoices and receipts","Paid / remaining amount","Refund records","Renewal payments","Razorpay-ready online payments"]
  },
  {
    no:"04", title:"Attendance",
    items:["Present / absent marking","Date-wise attendance","Member attendance history","Monthly reports","QR-code check-in","QR member ID","Check-in / check-out time","Today's attendance + currently inside","Attendance percentage"]
  },
  {
    no:"05", title:"Trainer Management",
    items:["Trainer profile + photo","Phone, email and specialization","Experience and joining date","Salary management","Assigned members","Trainer performance","Sessions and schedules","Commission-ready earnings"]
  },
  {
    no:"06", title:"Workout Management",
    items:["Exercise library","Workout plans","Assign plans to members","Weekly schedules","Sets and reps","Weight tracking","Rest time","Workout history","Progress tracking"]
  },
  {
    no:"07", title:"Diet & Nutrition",
    items:["Breakfast / lunch / snacks / dinner","Calories target","Protein target","Carbs target","Fat target","Water target","Assign diet plans","Member nutrition history"]
  },
  {
    no:"08", title:"Member Progress",
    items:["Weight and height","BMI","Body fat percentage","Chest / waist / arms / thighs","Progress photos","Measurement history","Trainer notes","Visual progress tracking"]
  },
  {
    no:"09", title:"Notifications",
    items:["Membership expiring","Membership expired","Payment pending","Payment received","Workout assigned","Diet assigned","Appointment reminders","Email / WhatsApp-ready notification flows"]
  },
  {
    no:"10", title:"Owner Dashboard",
    items:["Total members","Active members","Expired members","New members","Today's attendance","Monthly revenue","Pending payments","Expiring memberships","Active trainers"]
  },
  {
    no:"11", title:"Role-Based Access",
    items:["Admin: everything","Manager: members, payments, attendance, reports","Trainer: assigned members, workout, diet, progress, attendance","Member: own profile, membership, payments, attendance, workout, diet, progress","Permission-aware navigation","Protected routes"]
  }
];

export default function ProductSpecification(){
  return (
    <section className="product-spec" id="system">
      <div className="spec-heading">
        <p className="section-label">04 — COMPLETE PRODUCT SPEC</p>
        <h2>Every operation.<br/><span>Precisely mapped.</span></h2>
        <p>Not a feature checklist. Each module is designed around a real gym workflow and the people who use it.</p>
      </div>

      <div className="module-list">
        {productModules.map((m) => (
          <article className="module-row" key={m.no}>
            <div className="module-number">{m.no}</div>
            <div className="module-title"><h3>{m.title}</h3></div>
            <ul>{m.items.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul>
          </article>
        ))}
      </div>

      <div className="roles">
        <div className="roles-head">
          <p className="section-label">ACCESS MODEL</p>
          <h3>One system.<br/><span>Four experiences.</span></h3>
        </div>
        <div className="role-grid">
          {roleData.map(([role,scope,text]) => (
            <div className="role-card" key={role}>
              <span className="role-pill">{role}</span>
              <h4>{scope}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="plan-preview">
        <div>
          <small>EXAMPLE MEMBERSHIP CATALOG</small>
          <h3>Simple pricing.<br/>Flexible plans.</h3>
        </div>
        <div className="plan-cards">
          {[["Monthly","₹1,500"],["Quarterly","₹4,000"],["Half-Yearly","₹7,000"],["Yearly","₹12,000"]].map(([name,price]) => (
            <div key={name}><span>{name}</span><b>{price}</b><small>Membership plan</small></div>
          ))}
        </div>
      </div>
    </section>
  );
}
