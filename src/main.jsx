
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bell, CalendarCheck, ChevronRight, CreditCard, Dumbbell, FileText, Gauge, HeartPulse, LayoutDashboard, Menu, Plus, Search, Settings, ShieldCheck, Sparkles, UserRound, Users, X, Trash2, Edit3, Download, MessageCircle, Building2, Receipt, BarChart3, WalletCards } from "lucide-react";
import "./styles.css";
import VisualStory from "./VisualStory";
import AdvancedFeatures from "./AdvancedFeatures";
import ProductSpecification from "./ProductSpecification";
import V3Sellable from "./V3Sellable";
import { advancedFeatures } from "./advanced";

const modules = [
  {path:"dashboard", icon:Gauge, title:"Dashboard", text:"A live command center for members, revenue, attendance and renewals."},
  {path:"members", icon:Users, title:"Members", text:"Profiles, membership status, history, search and smart filters."},
  {path:"memberships", icon:CalendarCheck, title:"Memberships", text:"Plans, renewals, freezes, upgrades and expiry tracking."},
  {path:"payments", icon:CreditCard, title:"Payments", text:"UPI, cash, card, invoices, pending dues and payment history."},
  {path:"attendance", icon:CalendarCheck, title:"Attendance", text:"Fast check-ins, QR-ready workflows and attendance analytics."},
  {path:"trainers", icon:UserRound, title:"Trainers", text:"Trainer profiles, assigned members, sessions and performance."},
  {path:"workouts", icon:Dumbbell, title:"Workouts", text:"Exercise library, programs, sets, reps and workout history."},
  {path:"diet", icon:HeartPulse, title:"Diet", text:"Meal plans with calories, protein, carbs, fats and water targets."},
  {path:"progress", icon:BarChart3, title:"Progress", text:"Weight, body measurements, photos and visual progress charts."},
  {path:"notifications", icon:Bell, title:"Notifications", text:"Renewal, payment, workout and appointment reminders."},
  {path:"reports", icon:FileText, title:"Reports", text:"Revenue, attendance, membership and trainer reports for owners."}
];

const moduleDetails = {
dashboard:["Owner Dashboard","See total members, active memberships, today's attendance, monthly revenue, pending payments and renewals in one place."],
members:["Member Management","Manage member profiles, membership dates, status, emergency contacts and complete membership history."],
memberships:["Memberships & Plans","Create monthly, quarterly, half-yearly and yearly plans. Freeze, upgrade, downgrade and renew memberships."],
payments:["Payments & Billing","Record cash, UPI, card and bank payments. Track partial dues, refunds, invoices and renewal payments."],
attendance:["Attendance","Mark attendance, track check-in/out times, QR-ready check-ins, daily attendance and member attendance percentage."],
trainers:["Trainer Management","Manage trainer profiles, specialization, salary, assigned members, sessions and performance."],
workouts:["Workout Management","Create exercise libraries and workout programs with weekly schedules, sets, reps, weight and rest."],
diet:["Diet & Nutrition","Create meal plans with breakfast, lunch, snacks, dinner, calories, protein, carbs, fats and water targets."],
progress:["Member Progress","Track weight, BMI, body fat, chest, waist, arms, thighs and progress photos over time."],
notifications:["Notifications","Manage membership expiry, payment, workout, diet and appointment reminder workflows."],
reports:["Reports","Review revenue, attendance, membership and trainer reports with export-ready tables."]
};

const initialMembers = [
 {id:"FG-1001",name:"Rahul Sharma",phone:"9876543210",email:"rahul@example.com",plan:"Yearly",status:"Active",start:"2026-01-10",end:"2027-01-09",trainer:"Vikash Kumar"},
 {id:"FG-1002",name:"Priya Singh",phone:"9123456780",email:"priya@example.com",plan:"Quarterly",status:"Active",start:"2026-08-02",end:"2026-11-01",trainer:"Anjali Verma"},
 {id:"FG-1003",name:"Aman Kumar",phone:"9000011111",email:"aman@example.com",plan:"Monthly",status:"Expired",start:"2026-07-01",end:"2026-07-31",trainer:"Vikash Kumar"}
];

function App(){
 return <BrowserRouter><Shell/></BrowserRouter>
}

function Shell(){
 const [open,setOpen]=React.useState(false);
 const [light,setLight]=React.useState(()=>localStorage.getItem("forgefit-theme")==="light");
 const nav=useNavigate();
 React.useEffect(()=>{document.documentElement.dataset.theme=light?"light":"dark";localStorage.setItem("forgefit-theme",light?"light":"dark")},[light]);
 const go=(path)=>{setOpen(false);nav(path)};
 return <div className="app">
   <header className="nav">
    <Link className="brand" to="/"><span className="brand-mark">F</span>FORGE<span>FIT</span></Link>
    <nav className={open?"nav-links open":"nav-links"}>
      <a href="/#features" onClick={()=>setOpen(false)}>Features</a>
      <NavLink to="/dashboard" onClick={()=>setOpen(false)}>Dashboard</NavLink>
      <a href="/#workflow" onClick={()=>setOpen(false)}>Workflow</a>
      <Link to="/pro" onClick={()=>setOpen(false)}>Pro Features</Link>
      <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
    </nav>
    <div className="nav-actions"><button className="theme-toggle" onClick={()=>setLight(v=>!v)} aria-label="Toggle theme">{light?"☾":"☀"}</button><button className="nav-cta" onClick={()=>go("/demo")}>Book a Demo <ArrowRight size={15}/></button></div>
    <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </header>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="/pro" element={<ProCenter/>}/>
    <Route path="/demo" element={<Demo/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/:module" element={<ModulePage/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   <footer><Link className="brand" to="/"><span className="brand-mark">F</span>FORGE<span>FIT</span></Link><small>Gym management SaaS • MERN-ready architecture</small><Link to="/contact">Contact sales</Link></footer>
 </div>
}

function Home(){
 const [members,setMembers]=React.useState(initialMembers);
 const [showForm,setShowForm]=React.useState(false);
 const addMember=(m)=>setMembers(v=>[...v,{...m,id:`FG-${1001+v.length}`,status:m.status||"Active"}]);
 return <main id="top">
  <section className="hero">
   <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
   <motion.div className="hero-content" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
    <div className="eyebrow"><span/> GYM MANAGEMENT, REIMAGINED</div>
    <h1>Run your gym.<br/><em>Not your spreadsheets.</em></h1>
    <p>One beautifully designed system for members, trainers, payments, attendance and growth.</p>
    <div className="hero-actions">
      <Link className="primary" to="/dashboard">Explore the system <ArrowRight size={18}/></Link>
      <Link className="ghost" to="/demo">Book a free demo <span>→</span></Link>
    </div>
   </motion.div>
   <motion.div className="hero-card" initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}}>
    <div className="window-top"><span/><span/><span/><small>Owner Dashboard</small></div>
    <div className="mini-grid">{[["Members","450"],["Revenue","₹4.8L"],["Attendance","87%"],["Renewals","17"]].map(([a,b])=><div className="metric" key={a}><small>{a}</small><strong>{b}</strong><span>↗ 12.4%</span></div>)}</div>
    <div className="chart"><div className="chart-head"><b>Revenue overview</b><small>Last 30 days</small></div><div className="bars">{[35,52,42,68,55,82,74,92,70,98,84,100].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div>
   </motion.div>
  </section>

  <section className="statement" id="features">
   <p className="section-label">ONE PLATFORM. ELEVEN CORE SYSTEMS.</p>
   <h2>Everything your gym needs.<br/><span>Nothing you don't.</span></h2>
   <p className="lead">Designed around the daily workflow of gym owners, managers, trainers and members.</p>
  </section>

  <section className="feature-scene">
   <div className="feature-intro"><p className="section-label">THE SYSTEM</p><h2>Eleven modules.<br/><span>One operating system.</span></h2></div>
   <div className="feature-grid">
    {modules.map((m,i)=>{const Icon=m.icon;return <motion.article className="feature-card" key={m.path} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{delay:(i%3)*.04}}>
      <div className="feature-num">0{i+1}</div><Icon size={25}/><h3>{m.title}</h3><p>{m.text}</p>
      <Link className="module-link" to={`/${m.path}`}>Open module <ChevronRight size={15}/></Link>
    </motion.article>})}
   </div>
  </section>

  <section className="dashboard-showcase" id="workflow">
   <div className="showcase-copy"><p className="section-label">OWNER CONTROL</p><h2>See the health of your gym <span>at a glance.</span></h2><p>Revenue, attendance, active memberships and renewals are surfaced before they become problems.</p><ul><li>✓ Real-time business KPIs</li><li>✓ Expiry & payment alerts</li><li>✓ Revenue trend analysis</li></ul><Link className="primary" to="/dashboard">Open Dashboard <ArrowRight size={16}/></Link></div>
   <div className="big-dashboard"><div className="dash-sidebar"><b>FORGE</b>{["Overview","Members","Payments","Attendance","Trainers","Reports"].map((x,i)=><Link className={i===0?"active":""} to={i===0?"/dashboard":`/${x.toLowerCase()}`} key={x}>{x}</Link>)}</div><div className="dash-main"><div className="dash-title"><div><small>MONDAY, 30 SEPTEMBER</small><h3>Good morning, Alex.</h3></div><Link to="/members">+ Add Member</Link></div><div className="dash-cards">{[["Members","450"],["Active","382"],["Revenue","₹4.8L"],["Renewals","17"]].map(([l,n])=><div key={l}><small>{l}</small><strong>{n}</strong><span>↗ 12.4%</span></div>)}</div></div></div>
  </section>

  <section className="quick-member" id="member-demo">
    <div><p className="section-label">MEMBER WORKFLOW</p><h2>Proper gym forms.<br/><span>Not placeholder cards.</span></h2><p>Try the member management flow below. The same pattern can power trainers, plans, payments and attendance.</p><Link className="primary" to="/members">Manage members <ArrowRight size={16}/></Link></div>
    <MemberMiniTable members={members} onAdd={()=>setShowForm(true)}/>
  </section>

  <VisualStory />

  <AdvancedFeatures />

  <section className="cta" id="contact"><div className="cta-glow"/><p className="section-label">READY TO GO LIVE?</p><h2>Turn your gym into<br/><span>a modern business.</span></h2><p>Book a free product demo and discuss a custom setup.</p><Link className="primary" to="/demo">Book free demo <ArrowRight size={18}/></Link></section>
  {showForm && <MemberModal onClose={()=>setShowForm(false)} onSave={m=>{addMember(m);setShowForm(false)}}/>}
 </main>
}

function MemberMiniTable({members,onAdd}){
 return <div className="mini-members"><div className="mini-members-head"><b>Recent members</b><button onClick={onAdd}><Plus size={14}/> Add member</button></div>{members.slice(0,4).map(m=><div className="mini-member" key={m.id}><span className="avatar">{m.name[0]}</span><div><b>{m.name}</b><small>{m.plan} • {m.id}</small></div><em className={m.status.toLowerCase()}>{m.status}</em></div>)}</div>
}

function MemberModal({onClose,onSave,member}){
 const [form,setForm]=React.useState(member||{name:"",phone:"",email:"",plan:"Monthly",start:"",end:"",trainer:"",emergency:"",status:"Active"});
 const set=(k,v)=>setForm({...form,[k]:v});
 return <div className="modal-backdrop"><div className="modal"><button className="modal-x" onClick={onClose}><X/></button><p className="section-label">MEMBER PROFILE</p><h2>{member?"Edit member":"Add new member"}</h2><div className="form-grid">
 {[
 ["name","Full name","text"],["phone","Phone","tel"],["email","Email","email"],["emergency","Emergency contact","tel"],["start","Membership start","date"],["end","Membership end","date"],["trainer","Assigned trainer","text"]
 ].map(([k,l,t])=><label key={k}>{l}<input type={t} value={form[k]} onChange={e=>set(k,e.target.value)} placeholder={l}/></label>)}
 <label>Membership plan<select value={form.plan} onChange={e=>set("plan",e.target.value)}><option>Monthly</option><option>Quarterly</option><option>Half-Yearly</option><option>Yearly</option></select></label>
 <label>Status<select value={form.status} onChange={e=>set("status",e.target.value)}><option>Active</option><option>Expired</option><option>Suspended</option></select></label>
 </div><button className="primary form-submit" onClick={()=>form.name.trim()&&onSave(form)}>Save member <CheckIcon/></button></div></div>
}
function CheckIcon(){return <span>✓</span>}

function MembersPage(){
 const [members,setMembers]=React.useState(initialMembers),[query,setQuery]=React.useState(""),[status,setStatus]=React.useState("All"),[editing,setEditing]=React.useState(null),[adding,setAdding]=React.useState(false);
 const filtered=members.filter(m=>(m.name.toLowerCase().includes(query.toLowerCase())||m.id.toLowerCase().includes(query.toLowerCase())||m.phone.includes(query))&&(status==="All"||m.status===status));
 const save=(m)=>{if(editing)setMembers(v=>v.map(x=>x.id===editing.id?{...m,id:editing.id}:x));else setMembers(v=>[...v,{...m,id:`FG-${1001+v.length}`}]);setEditing(null);setAdding(false)};
 return <PageShell title="Members" subtitle="Manage profiles, memberships and member history.">
  <div className="toolbar"><div className="search"><Search size={16}/><input placeholder="Search name, ID or phone..." value={query} onChange={e=>setQuery(e.target.value)}/></div><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Active</option><option>Expired</option><option>Suspended</option></select><button className="primary" onClick={()=>setAdding(true)}><Plus size={16}/> Add member</button></div>
  <div className="table-card"><div className="table-scroll"><table><thead><tr><th>Member</th><th>Plan</th><th>Status</th><th>Start</th><th>End</th><th>Trainer</th><th>Actions</th></tr></thead><tbody>{filtered.map(m=><tr key={m.id}><td><div className="member-cell"><span className="avatar">{m.name[0]}</span><div><b>{m.name}</b><small>{m.id} • {m.phone}</small></div></div></td><td>{m.plan}</td><td><em className={"status "+m.status.toLowerCase()}>{m.status}</em></td><td>{m.start||"—"}</td><td>{m.end||"—"}</td><td>{m.trainer||"—"}</td><td><button className="icon-btn" onClick={()=>setEditing(m)}><Edit3 size={15}/></button><button className="icon-btn danger" onClick={()=>setMembers(v=>v.filter(x=>x.id!==m.id))}><Trash2 size={15}/></button></td></tr>)}</tbody></table></div>{filtered.length===0&&<div className="empty">No members found.</div>}</div>
  {(adding||editing)&&<MemberModal member={editing} onClose={()=>{setAdding(false);setEditing(null)}} onSave={save}/>}
 </PageShell>
}

function PageShell({title,subtitle,children}){
 return <main className="module-page"><div className="module-page-head"><Link to="/" className="back"><ArrowLeft size={15}/> Home</Link><p className="section-label">FORGEFIT / MANAGEMENT</p><h1>{title}</h1><p>{subtitle}</p></div>{children}</main>
}

function GenericModule({path}){
 const [title,desc]=moduleDetails[path]||["Module","Manage your gym operations."];
 return <PageShell title={title} subtitle={desc}>
   <div className="module-overview"><div className="overview-main"><div className="overview-icon"><Sparkles/></div><h2>{title}</h2><p>{desc}</p><div className="placeholder-grid">{(modules.find(m=>m.path===path)?modules.find(m=>m.path===path).text.split(", "):["Create records","Track activity","View history","Export reports"]).map((x,i)=><div key={i}><b>0{i+1}</b><span>{x}</span></div>)}</div></div><div className="side-panel"><b>Quick actions</b><Link to={path==="dashboard"?"/members":"/"+path}>Open management view <ArrowRight size={14}/></Link><button onClick={()=>alert("Demo action ready — connect this module to your backend API.")}>+ Create new</button><button onClick={()=>alert("Export endpoint ready for backend integration.")}><Download size={14}/> Export</button></div></div>
 </PageShell>
}

function Demo(){return <PageShell title="Book a Free Demo" subtitle="See how ForgeFit can be customized for your gym."><div className="contact-card"><h2>Let's build your gym system.</h2><p>Fill in your details and the demo workflow is ready to connect to email/CRM.</p><ContactForm button="Request free demo"/></div></PageShell>}
function Contact(){return <PageShell title="Contact Sales" subtitle="Tell us what your gym needs."><div className="contact-card"><h2>Build around your workflow.</h2><p>Use this form for custom features, pricing or deployment discussions.</p><ContactForm button="Send enquiry"/></div></PageShell>}
function ContactForm({button}){const [sent,setSent]=React.useState(false);const [f,setF]=React.useState({name:"",email:"",phone:"",gym:"",message:""});if(sent)return <div className="success"><ShieldCheck size={30}/><h2>Request received.</h2><p>Your form is working. Connect the backend/email provider to deliver it to your inbox.</p><Link className="primary" to="/">Back to home</Link></div>;return <div className="contact-form">{Object.entries({name:"Your name",email:"Email address",phone:"Phone number",gym:"Gym / business name"}).map(([k,l])=><label key={k}>{l}<input value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})} placeholder={l}/></label>)}<label>What do you need?<textarea rows="5" value={f.message} onChange={e=>setF({...f,message:e.target.value})} placeholder="Tell us about your gym..."/></label><button className="primary" onClick={()=>setSent(true)}>{button} <ArrowRight size={16}/></button></div>}
function DashboardPage(){
 const cards=[["Total Members","450","+12.4%"],["Active Members","382","+8.2%"],["Monthly Revenue","₹4.8L","+14.8%"],["Today Attendance","87%","+4.1%"],["Pending Payments","₹38,500","12 dues"],["Expiring Soon","17","next 7 days"]];
 return <PageShell title="Dashboard" subtitle="Owner command center for members, revenue, attendance and renewals.">
  <div className="dashboard-real-grid">{cards.map(([a,b,c])=><div className="real-metric" key={a}><small>{a}</small><strong>{b}</strong><span>{c}</span></div>)}</div>
  <div className="dashboard-panels"><div className="real-panel"><div className="panel-head"><b>Revenue overview</b><small>Last 30 days</small></div><div className="real-bars">{[38,52,44,61,58,72,66,81,74,92,78,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="real-panel"><div className="panel-head"><b>Renewals</b><Link to="/members">View members</Link></div>{[["Rahul Sharma","Yearly","3 days"],["Priya Singh","Quarterly","12 days"],["Aman Kumar","Monthly","Expired"]].map(x=><div className="renew-row" key={x[0]}><span><b>{x[0]}</b><small>{x[1]}</small></span><em>{x[2]}</em></div>)}</div></div>
 </PageShell>
}

function ProCenter(){
 const [expense,setExpense]=React.useState({name:"",amount:"",category:"Utilities"});
 const [expenses,setExpenses]=React.useState(()=>JSON.parse(localStorage.getItem("forgefit-expenses")||"[]"));
 const [toast,setToast]=React.useState("");
 const [checked,setChecked]=React.useState(false);
 const [coupon,setCoupon]=React.useState("");
 const [announcement,setAnnouncement]=React.useState("");
 const saveExpense=()=>{if(!expense.name||!expense.amount)return;const next=[...expenses,{...expense,id:Date.now()}];setExpenses(next);localStorage.setItem("forgefit-expenses",JSON.stringify(next));setExpense({name:"",amount:"",category:"Utilities"});setToast("Expense saved locally.")};
 const exportCSV=()=>{const rows=[["Feature","Status"],...advancedFeatures.map(([a,,b])=>[a,"UI ready / integration-ready"])];const csv=rows.map(r=>r.map(x=>`"${String(x).replaceAll('"','""')}"`).join(",")).join("\n");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="forgefit-pro-features.csv";a.click();URL.revokeObjectURL(a.href);setToast("CSV exported.")};
 const wa=()=>{window.open("https://wa.me/?text="+encodeURIComponent("ForgeFit gym renewal reminder: your membership is due for renewal."),"_blank","noopener,noreferrer")};
 return <PageShell title="Pro Features" subtitle="The sellable operations layer: branches, staff, finance, automation and reporting.">
  <div className="pro-feature-grid">{advancedFeatures.map(([title,text,badge])=><article className="pro-feature-card" key={title}><div><b>{badge}</b><span>{title}</span></div><p>{text}</p><button onClick={()=>{setToast(title+" workflow opened.")}}>Open workflow <ArrowRight size={14}/></button></article>)}</div>
  <div className="pro-tools">
   <section className="tool-card"><p className="section-label">QR ATTENDANCE</p><h2>Fast check-in</h2><p>Demo the member check-in state. A production build connects this to a QR scanner and attendance API.</p><button className="primary" onClick={()=>{setChecked(true);setToast("Rahul Sharma checked in.")}}>{checked?"Checked in ✓":"Scan / Check in"}</button></section>
   <section className="tool-card"><p className="section-label">EXPENSES</p><h2>Track costs</h2><div className="tool-form"><input placeholder="Expense name" value={expense.name} onChange={e=>setExpense({...expense,name:e.target.value})}/><input type="number" placeholder="Amount" value={expense.amount} onChange={e=>setExpense({...expense,amount:e.target.value})}/><select value={expense.category} onChange={e=>setExpense({...expense,category:e.target.value})}><option>Utilities</option><option>Rent</option><option>Salary</option><option>Equipment</option><option>Marketing</option></select><button onClick={saveExpense}>Add expense</button></div>{expenses.slice(-4).map(e=><div className="tool-row" key={e.id}><span>{e.name}<small>{e.category}</small></span><b>₹{e.amount}</b></div>)}</section>
   <section className="tool-card"><p className="section-label">COUPONS & REFERRALS</p><h2>Grow & retain</h2><div className="tool-form"><input placeholder="Coupon code" value={coupon} onChange={e=>setCoupon(e.target.value)}/><button onClick={()=>setToast(coupon?`Coupon ${coupon} created.`:"Enter a coupon code.")}>Create coupon</button><button onClick={()=>setToast("Referral reward created for demo member.")}>Add referral reward</button></div></section>
   <section className="tool-card"><p className="section-label">ANNOUNCEMENTS</p><h2>Reach members</h2><textarea rows="3" placeholder="Gym announcement..." value={announcement} onChange={e=>setAnnouncement(e.target.value)}/><div className="tool-actions"><button onClick={()=>setToast(announcement?"Announcement published locally.":"Write an announcement first.")}>Publish</button><button onClick={wa}>Open WhatsApp</button><a href="mailto:?subject=ForgeFit%20Gym%20Announcement">Email members</a></div></section>
   <section className="tool-card"><p className="section-label">BILLING & EXPORTS</p><h2>Invoices & data</h2><p>Print a browser invoice, export feature data, or open the payment flow placeholder.</p><div className="tool-actions"><button onClick={()=>window.print()}>Print / PDF invoice</button><button onClick={exportCSV}>Export CSV / Excel-ready</button><button onClick={()=>setToast("Razorpay integration point ready for backend key.")}>Online payment</button></div></section>
   <section className="tool-card"><p className="section-label">BRANCHES / STAFF / EQUIPMENT</p><h2>Multi-gym control</h2><div className="branch-demo">{[["Patna Central","₹2.42L","94%"],["Kankarbagh","₹1.71L","88%"],["Boring Road","₹68K","81%"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><em>{x[2]}</em></div>)}</div><p className="muted">Staff roles, trainer commission, equipment maintenance and audit logs are represented here and ready for API/database wiring.</p></section>
  </div>
  {toast&&<button className="toast" onClick={()=>setToast("")}>{toast} ×</button>}
 </PageShell>
}

function ModulePage(){const {module}=useParams();return module==="members"?<MembersPage/>:<GenericModule path={module}/>}
function NotFound(){return <PageShell title="404" subtitle="That module doesn't exist."><Link className="primary" to="/">Return home <ArrowRight size={16}/></Link></PageShell>}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
const rootElement = document.getElementById("root");
if (rootElement) rootElement.dataset.mounted = "true";
