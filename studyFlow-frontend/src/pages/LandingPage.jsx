import { useState } from "react";

const features = [
  {
    icon: "📋",
    title: "Task Management",
    desc: "Create, edit, delete and track your daily tasks with priorities and deadlines.",
    color: "blue",
  },
  {
    icon: "📅",
    title: "Smart Study Planner",
    desc: "Get personalized study plans based on your goals and schedule.",
    color: "purple",
  },
  {
    icon: "🧠",
    title: "AI Assistant",
    desc: "Ask questions, get concept explanations and generate study plans using AI.",
    color: "pink",
  },
  {
    icon: "☁️",
    title: "File Uploads",
    desc: "Upload study materials, images or PDFs for easy access.",
    color: "cyan",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Visualize your learning journey with charts and statistics.",
    color: "orange",
  },
  {
    icon: "🛡️",
    title: "Secure Authentication",
    desc: "Secure login and password hashing for maximum security.",
    color: "green",
  },
];

const plans = [
  {
    name: "Free",
    subtitle: "Perfect for getting started",
    price: "0",
    features: [
      "Basic task management",
      "Take notes (limited)",
      "1GB cloud storage",
    ],
  },
  {
    name: "Pro",
    subtitle: "Best for serious learners",
    price: "9.99",
    popular: true,
    features: [
      "All Free features",
      "AI assistant (50 queries/month)",
      "Unlimited notes & storage",
      "Advanced analytics",
    ],
  },
  {
    name: "Premium",
    subtitle: "For teams & power users",
    price: "19.99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Priority support",
      "Custom integrations",
    ],
  },
];

const faqs = [
  {
    q: "Is StudyFlow AI free to use?",
    a: "Yes! You can start with our Free plan, which includes basic task management, notes and study organization.",
  },
  {
    q: "Can I upgrade later?",
    a: "Absolutely. You can upgrade your plan whenever you need additional features.",
  },
  {
    q: "Is my data secure?",
    a: "Your study data should be protected using secure authentication, appropriate access controls and safe storage practices.",
  },
  {
    q: "Do I need technical skills to use StudyFlow AI?",
    a: "No. StudyFlow AI is designed to be simple and intuitive for students of all skill levels.",
  },
];

function DashboardPreview() {
  const tasks = [
    ["Complete React fundamentals", "Today", "yellow"],
    ["Read Chapter 5", "Tomorrow", "green"],
    ["Finish project setup", "Today", "purple"],
    ["Review database concepts", "Oct 18", "green"],
  ];

  return (
    <div className="sf-dashboard">
      <aside className="sf-dash-sidebar">
        <div className="sf-dash-brand">
          <span className="sf-brand-icon">✦</span> StudyFlow AI
        </div>

        {[
          ["▦", "Dashboard"],
          ["✓", "Tasks"],
          ["▤", "Study Planner"],
          ["▧", "Notes"],
          ["✳", "AI Assistant"],
          ["▱", "Files"],
          ["▥", "Analytics"],
          ["⚙", "Settings"],
        ].map(([icon, label], index) => (
          <div
            className={`sf-side-item ${index === 0 ? "active" : ""}`}
            key={label}
          >
            <span>{icon}</span> {label}
          </div>
        ))}
      </aside>

      <div className="sf-dash-main">
        <div className="sf-dash-top">
          <span>⌕ &nbsp; Search anything...</span>
          <span>♧ &nbsp; ♢ &nbsp; 👤</span>
        </div>

        <div className="sf-welcome">
          <div>
            <h3>Good Morning, Alex! 👋</h3>
            <p>Keep going! You're doing great.</p>
          </div>
          <span className="sf-date">Monday, October 12</span>
        </div>

        <div className="sf-stats">
          <div className="sf-stat stat-blue">
            <strong>12</strong>
            <span>Total Tasks</span>
          </div>
          <div className="sf-stat stat-green">
            <strong>8</strong>
            <span>Completed</span>
          </div>
          <div className="sf-stat stat-orange">
            <strong>4</strong>
            <span>In Progress</span>
          </div>
          <div className="sf-stat stat-purple">
            <strong>85%</strong>
            <span>Progress</span>
          </div>
        </div>

        <div className="sf-task-heading">
          <strong>Today's Tasks</strong>
          <span>View all →</span>
        </div>

        <div className="sf-task-list">
          {tasks.map(([task, date, color]) => (
            <div className="sf-task-row" key={task}>
              <span className="sf-checkbox" />
              <span className="sf-task-name">{task}</span>
              <span className={`sf-task-tag ${color}`}>{date}</span>
            </div>
          ))}
        </div>

        <div className="sf-progress-panel">
          <div>
            <strong>Study Progress</strong>
            <p>Your learning is on track.</p>
          </div>
          <div className="sf-progress-circle">
            <span>85%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenu(false);
  };

  const startApp = () => {
    // Replace this with your login/register route when it is ready.
    scrollTo("pricing");
  };

  return (
    <div className="sf-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .sf-page {
          --sf-purple: #6956e8;
          --sf-dark: #171b3b;
          --sf-muted: #777e99;
          --sf-border: #e9eaf3;
          color: var(--sf-dark);
          background: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          overflow: hidden;
        }
        .sf-page * { box-sizing: border-box; }
        .sf-page h1, .sf-page h2, .sf-page h3, .sf-page h4 {
          font-family: 'Manrope', sans-serif;
          letter-spacing: -0.7px;
        }
        .sf-page a { color: inherit; text-decoration: none; }
        .sf-page button { font: inherit; cursor: pointer; }
        .sf-container { width: min(1160px, calc(100% - 48px)); margin: auto; }
        .sf-nav {
          height: 76px; display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          border-bottom: 1px solid #f3f3fa; background: rgba(255,255,255,.96);
          position: sticky; top: 0; z-index: 10;
          padding: 0 max(24px, calc((100% - 1160px) / 2));
        }
        .sf-logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 19px; white-space: nowrap; }
        .sf-logo-mark { display: grid; place-items: center; width: 35px; height: 35px; color: white; background: linear-gradient(135deg,#8b7aff,#5842d6); border-radius: 11px; box-shadow: 0 5px 12px #6956e833; }
        .sf-nav-links { display: flex; align-items: center; gap: 29px; color: #666d85; font-size: 13px; }
        .sf-nav-links a:hover { color: var(--sf-purple); }
        .sf-nav-actions { display: flex; align-items: center; gap: 12px; }
        .sf-btn { border: 1px solid transparent; padding: 12px 19px; border-radius: 9px; font-weight: 700; transition: .2s; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
        .sf-btn-primary { background: linear-gradient(110deg,#8264f3,#5846db); color: white; box-shadow: 0 5px 14px #6956e82a; }
        .sf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px #6956e844; }
        .sf-btn-outline { background: white; border-color: #e4e4f0; color: var(--sf-dark); }
        .sf-btn-outline:hover { border-color: var(--sf-purple); color: var(--sf-purple); }
        .sf-menu-btn { display: none; border: 0; background: #f4f2ff; padding: 9px 12px; border-radius: 8px; color: var(--sf-dark); }
        .sf-hero { display: grid; grid-template-columns: .88fr 1.12fr; align-items: center; gap: 42px; padding-top: 82px; padding-bottom: 58px; }
        .sf-eyebrow { display: inline-flex; align-items: center; gap: 7px; padding: 8px 12px; border-radius: 30px; background: #f1edff; color: #6853d9; font-size: 12px; font-weight: 700; }
        .sf-hero h1 { font-size: clamp(38px, 4.2vw, 58px); line-height: 1.12; margin: 20px 0; font-weight: 800; }
        .sf-gradient-text { color: #6d55e8; }
        .sf-hero-copy { color: var(--sf-muted); line-height: 1.9; max-width: 450px; font-size: 15px; }
        .sf-hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
        .sf-trust-row { display: flex; gap: 21px; flex-wrap: wrap; margin-top: 32px; color: #737990; font-size: 11px; }
        .sf-trust-row span { display: flex; align-items: center; gap: 7px; }
        .sf-trust-row b { font-size: 16px; color: #6c59e5; }
        .sf-hero-visual { min-width: 0; position: relative; }
        .sf-hero-visual:before { content: ''; position: absolute; inset: 9% 0 0 7%; background: #f0edff; filter: blur(42px); border-radius: 50%; z-index: 0; }
        .sf-dashboard { position: relative; z-index: 1; display: grid; grid-template-columns: 145px minmax(0,1fr); border: 1px solid #e7e7f2; border-radius: 16px; overflow: hidden; background: white; box-shadow: 0 25px 70px #25205219; min-height: 360px; }
        .sf-dash-sidebar { background: #191a42; padding: 20px 10px; color: #a9adcf; }
        .sf-dash-brand { font-size: 11px; color: white; font-weight: 800; margin: 0 0 24px 5px; white-space: nowrap; }
        .sf-brand-icon { color: #a99aff; font-size: 16px; }
        .sf-side-item { display: flex; align-items: center; gap: 9px; padding: 11px 9px; border-radius: 7px; font-size: 10px; margin-bottom: 5px; white-space: nowrap; }
        .sf-side-item.active { background: #6651df; color: white; }
        .sf-dash-main { padding: 18px; min-width: 0; }
        .sf-dash-top { display: flex; justify-content: space-between; gap: 8px; color: #858ba2; font-size: 10px; padding-bottom: 21px; border-bottom: 1px solid #f0f0f7; }
        .sf-welcome { display: flex; justify-content: space-between; gap: 10px; align-items: center; margin: 19px 0; }
        .sf-welcome h3 { font-size: 14px; margin: 0 0 5px; }
        .sf-welcome p, .sf-progress-panel p { margin: 0; color: #8a8fa5; font-size: 10px; }
        .sf-date { font-size: 9px; color: #8a8fa5; }
        .sf-stats { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; }
        .sf-stat { border-radius: 8px; padding: 12px 7px; display: flex; flex-direction: column; gap: 7px; min-width: 0; }
        .sf-stat strong { font-size: 21px; }
        .sf-stat span { font-size: 9px; color: #777e99; white-space: nowrap; }
        .stat-blue { background: #eef4ff; color: #5484e9; }
        .stat-green { background: #eafaf2; color: #30a77a; }
        .stat-orange { background: #fff3e8; color: #e99b48; }
        .stat-purple { background: #f3edff; color: #8b65df; }
        .sf-task-heading { display: flex; justify-content: space-between; margin: 22px 0 10px; font-size: 11px; }
        .sf-task-heading span { color: #7562e5; }
        .sf-task-row { display: flex; align-items: center; gap: 8px; padding: 10px 0; border-bottom: 1px solid #f1f1f7; font-size: 9px; }
        .sf-checkbox { width: 12px; height: 12px; border: 1px solid #cfd2e1; border-radius: 3px; flex-shrink: 0; }
        .sf-task-name { flex: 1; color: #535a75; min-width: 0; }
        .sf-task-tag { font-size: 8px; padding: 4px 6px; border-radius: 4px; white-space: nowrap; }
        .sf-task-tag.yellow { background: #fff3dc; color: #c18b25; }
        .sf-task-tag.green { background: #e5f8ef; color: #23996a; }
        .sf-task-tag.purple { background: #f0eaff; color: #7c61d7; }
        .sf-progress-panel { display: flex; justify-content: space-between; align-items: center; padding-top: 18px; }
        .sf-progress-panel strong { font-size: 11px; }
        .sf-progress-panel p { margin-top: 5px; }
        .sf-progress-circle { width: 55px; height: 55px; border-radius: 50%; border: 5px solid #e8e3ff; border-top-color: #7159e8; border-right-color: #7159e8; display: grid; place-items: center; color: #5b4ac7; font-size: 11px; font-weight: 800; }
        .sf-trust-strip { padding: 23px 0 53px; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; border-bottom: 1px solid #f3f3fa; color: #737990; font-size: 12px; }
        .sf-trust-strip span { display: flex; align-items: center; gap: 9px; }
        .sf-trust-strip b { color: #6856dc; font-size: 19px; }
        .sf-section { padding: 78px 0; scroll-margin-top: 75px; }
        .sf-section-soft { background: #fbfaff; }
        .sf-section-heading { text-align: center; max-width: 620px; margin: 0 auto 42px; }
        .sf-kicker { color: #7662e8; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .sf-section-heading h2 { font-size: clamp(27px,3vw,36px); line-height: 1.25; margin: 13px 0; }
        .sf-section-heading p { color: var(--sf-muted); line-height: 1.8; margin: 0; }
        .sf-steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 35px; }
        .sf-step { text-align: center; padding: 10px 20px; }
        .sf-step-art { width: 90px; height: 90px; display: grid; place-items: center; margin: 0 auto 20px; border-radius: 50%; background: #f1edff; font-size: 36px; position: relative; }
        .sf-step-number { position: absolute; top: -2px; left: -4px; display: grid; place-items: center; width: 27px; height: 27px; background: #6c58e8; color: white; border-radius: 50%; font-size: 12px; font-weight: 800; }
        .sf-step h3 { font-size: 17px; margin: 0 0 9px; }
        .sf-step p { color: var(--sf-muted); line-height: 1.8; font-size: 13px; margin: 0; }
        .sf-feature-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; }
        .sf-feature { border: 1px solid var(--sf-border); border-radius: 14px; padding: 25px; background: white; transition: .2s; }
        .sf-feature:hover { transform: translateY(-4px); box-shadow: 0 12px 30px #2520520b; border-color: #d7d0ff; }
        .sf-feature-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 12px; background: #f0edff; font-size: 23px; margin-bottom: 19px; }
        .sf-feature h3 { font-size: 16px; margin: 0 0 9px; }
        .sf-feature p { color: var(--sf-muted); line-height: 1.8; font-size: 13px; margin: 0; }
        .sf-product { display: grid; grid-template-columns: .8fr 1.2fr; gap: 40px; align-items: center; background: linear-gradient(120deg,#f3f0ff,#f9faff); padding: 38px; border-radius: 22px; }
        .sf-product h2 { font-size: 30px; line-height: 1.25; margin: 15px 0; }
        .sf-product p { color: var(--sf-muted); line-height: 1.8; }
        .sf-check-list { list-style: none; padding: 0; margin: 23px 0; display: grid; gap: 12px; color: #59617d; font-size: 13px; }
        .sf-check-list li:before { content: '✓'; color: #25ad7c; font-weight: 800; margin-right: 9px; }
        .sf-product .sf-dashboard { min-height: 300px; }
        .sf-testimonials { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; }
        .sf-quote { padding: 25px; border: 1px solid var(--sf-border); border-radius: 14px; background: white; }
        .sf-stars { color: #f3b83c; letter-spacing: 3px; margin: 17px 0; }
        .sf-quote blockquote { color: #68708a; line-height: 1.8; margin: 0; font-size: 13px; }
        .sf-person { display: flex; align-items: center; gap: 12px; margin-top: 22px; }
        .sf-avatar { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #eeeaff; font-size: 20px; }
        .sf-person strong { display: block; font-size: 12px; }
        .sf-person small { display: block; color: #858ba0; margin-top: 4px; font-size: 11px; }
        .sf-pricing-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; align-items: stretch; }
        .sf-plan { position: relative; padding: 30px 25px; border: 1px solid var(--sf-border); border-radius: 16px; background: white; display: flex; flex-direction: column; }
        .sf-plan.popular { border: 2px solid #8874f1; box-shadow: 0 12px 40px #6956e815; }
        .sf-popular-label { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: #7058e5; color: white; padding: 6px 14px; border-radius: 20px; font-size: 10px; font-weight: 800; white-space: nowrap; }
        .sf-plan h3 { font-size: 19px; margin: 0 0 8px; }
        .sf-plan-subtitle { color: var(--sf-muted); font-size: 12px; }
        .sf-price { margin: 25px 0; font-size: 14px; }
        .sf-price strong { font-family: 'Manrope',sans-serif; font-size: 37px; letter-spacing: -1.5px; }
        .sf-plan ul { list-style: none; padding: 0; margin: 0 0 28px; display: grid; gap: 14px; color: #646b84; font-size: 12px; flex: 1; }
        .sf-plan li:before { content: '✓'; color: #25aa7a; font-weight: 800; margin-right: 9px; }
        .sf-plan .sf-btn { width: 100%; }
        .sf-faq-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 45px; align-items: start; }
        .sf-faq-layout h2 { font-size: 31px; line-height: 1.3; margin: 12px 0; }
        .sf-faq-layout p { color: var(--sf-muted); line-height: 1.8; }
        .sf-faq-item { border-bottom: 1px solid var(--sf-border); }
        .sf-faq-question { width: 100%; border: 0; background: transparent; text-align: left; display: flex; justify-content: space-between; align-items: center; gap: 15px; padding: 20px 0; font-weight: 700; color: #272c4a; }
        .sf-faq-question span:last-child { color: #6e59e8; font-size: 20px; }
        .sf-faq-answer { color: var(--sf-muted); line-height: 1.8; padding: 0 25px 20px 0; font-size: 13px; }
        .sf-cta { display: flex; justify-content: space-between; align-items: center; gap: 25px; padding: 36px 40px; border-radius: 18px; color: white; background: linear-gradient(110deg,#7358e7,#292c77); }
        .sf-cta h2 { font-size: 25px; margin: 0 0 8px; }
        .sf-cta p { margin: 0; color: #e1dfff; line-height: 1.7; }
        .sf-cta .sf-btn { background: white; color: #4f42bd; flex-shrink: 0; }
        .sf-footer { padding: 55px 0 25px; }
        .sf-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1.3fr; gap: 30px; }
        .sf-footer-about p { color: var(--sf-muted); line-height: 1.8; font-size: 12px; max-width: 230px; }
        .sf-footer h4 { font-size: 13px; margin: 8px 0 20px; }
        .sf-footer-links { display: grid; gap: 13px; color: var(--sf-muted); font-size: 12px; }
        .sf-footer-links a:hover { color: var(--sf-purple); }
        .sf-newsletter { display: flex; gap: 6px; margin-top: 12px; }
        .sf-newsletter input { min-width: 0; width: 100%; padding: 11px; border: 1px solid var(--sf-border); border-radius: 7px; outline-color: #9c8df5; }
        .sf-newsletter button { border: 0; background: var(--sf-purple); color: white; padding: 0 12px; border-radius: 7px; }
        .sf-footer-bottom { display: flex; justify-content: space-between; gap: 20px; border-top: 1px solid #eeeef5; margin-top: 42px; padding-top: 22px; color: #858ba0; font-size: 11px; }
        .sf-footer-legal { display: flex; gap: 20px; }
        @media (max-width: 1000px) {
          .sf-nav { padding-left: 24px; padding-right: 24px; }
          .sf-nav-links { gap: 15px; }
          .sf-hero { gap: 25px; padding-top: 55px; }
          .sf-dashboard { grid-template-columns: 115px minmax(0,1fr); }
          .sf-dash-main { padding: 12px; }
          .sf-dash-sidebar { padding: 15px 7px; }
          .sf-side-item { font-size: 9px; gap: 6px; padding: 10px 6px; }
          .sf-feature { padding: 20px; }
          .sf-product { padding: 25px; gap: 25px; }
          .sf-footer-grid { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 760px) {
          .sf-container { width: min(100% - 32px, 560px); }
          .sf-nav { height: 66px; padding: 0 16px; }
          .sf-logo { font-size: 16px; }
          .sf-nav-actions .sf-btn-outline { display: none; }
          .sf-nav-actions .sf-btn { padding: 10px 12px; font-size: 12px; }
          .sf-menu-btn { display: block; }
          .sf-nav-links { display: none; position: absolute; top: 65px; left: 0; right: 0; background: white; padding: 18px 22px 23px; border-bottom: 1px solid var(--sf-border); box-shadow: 0 12px 20px #2020400c; }
          .sf-nav-links.open { display: grid; gap: 0; }
          .sf-nav-links a { padding: 12px 0; }
          .sf-hero { grid-template-columns: 1fr; padding-top: 48px; gap: 35px; }
          .sf-hero h1 { font-size: clamp(37px,9vw,51px); }
          .sf-hero-copy { font-size: 14px; }
          .sf-trust-row { gap: 13px; }
          .sf-hero-visual { max-width: 550px; width: 100%; margin: auto; }
          .sf-dashboard { grid-template-columns: 105px minmax(0,1fr); }
          .sf-stats { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sf-date { display: none; }
          .sf-trust-strip { padding-bottom: 35px; justify-content: flex-start; }
          .sf-section { padding: 60px 0; }
          .sf-section-heading { margin-bottom: 30px; }
          .sf-steps { gap: 20px; }
          .sf-step { padding: 5px; }
          .sf-step-art { width: 70px; height: 70px; font-size: 29px; }
          .sf-step h3 { font-size: 14px; }
          .sf-step p { font-size: 12px; }
          .sf-feature-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
          .sf-feature { padding: 18px; }
          .sf-feature h3 { font-size: 14px; }
          .sf-feature p { font-size: 12px; }
          .sf-product { grid-template-columns: 1fr; padding: 23px; }
          .sf-product h2 { font-size: 27px; }
          .sf-testimonials { grid-template-columns: 1fr; }
          .sf-quote { padding: 22px; }
          .sf-pricing-grid { grid-template-columns: 1fr; gap: 25px; }
          .sf-plan { padding: 27px; }
          .sf-faq-layout { grid-template-columns: 1fr; gap: 18px; }
          .sf-cta { padding: 28px 24px; align-items: flex-start; flex-direction: column; }
          .sf-footer-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 20px; }
          .sf-footer-about { grid-column: 1 / -1; }
          .sf-footer-bottom { flex-direction: column; }
        }
        @media (max-width: 420px) {
          .sf-container { width: calc(100% - 28px); }
          .sf-logo { font-size: 14px; gap: 7px; }
          .sf-logo-mark { width: 30px; height: 30px; }
          .sf-nav-actions { gap: 7px; }
          .sf-nav-actions .sf-btn { padding: 9px; }
          .sf-hero h1 { font-size: 36px; }
          .sf-hero-buttons .sf-btn { padding: 11px 12px; font-size: 12px; }
          .sf-dashboard { grid-template-columns: 82px minmax(0,1fr); }
          .sf-dash-brand { font-size: 9px; margin-left: 2px; }
          .sf-side-item { font-size: 8px; gap: 4px; padding: 9px 4px; }
          .sf-dash-main { padding: 10px 8px; }
          .sf-dash-top { font-size: 8px; }
          .sf-welcome h3 { font-size: 11px; }
          .sf-welcome p { font-size: 9px; }
          .sf-stat strong { font-size: 18px; }
          .sf-stat span { font-size: 8px; }
          .sf-task-row { gap: 5px; font-size: 8px; }
          .sf-task-tag { font-size: 7px; padding: 3px; }
          .sf-feature-grid { grid-template-columns: 1fr; }
          .sf-steps { grid-template-columns: 1fr; gap: 28px; }
          .sf-step { max-width: 280px; margin: auto; }
          .sf-footer-grid { grid-template-columns: 1fr 1fr; }
          .sf-footer-legal { gap: 12px; flex-wrap: wrap; }
        }
      `}</style>

      {/* Navigation */}
      <header className="sf-nav">
        <a className="sf-logo" href="#home" aria-label="StudyFlow AI home">
          <span className="sf-logo-mark">✦</span>
          <span>StudyFlow AI</span>
        </a>

        <nav className={`sf-nav-links ${mobileMenu ? "open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#features" onClick={() => setMobileMenu(false)}>Features</a>
          <a href="#pricing" onClick={() => setMobileMenu(false)}>Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenu(false)}>Blog</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
        </nav>

        <div className="sf-nav-actions">
          <button
            className="sf-btn sf-btn-outline"
            onClick={() => scrollTo("pricing")}
          >
            Log in
          </button>
          <button className="sf-btn sf-btn-primary" onClick={startApp}>
            Get Started <span>→</span>
          </button>
          <button
            className="sf-menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="sf-container sf-hero" id="home">
          <div>
            <span className="sf-eyebrow">✦ AI-Powered Study Companion</span>
            <h1>
              Study Smarter,
              <br />
              Achieve Faster with
              <br />
              <span className="sf-gradient-text">StudyFlow AI</span>
            </h1>
            <p className="sf-hero-copy">
              Plan your studies, manage tasks, take smart notes, and get
              AI-powered assistance — all in one place. Your personal study
              companion for a better, smarter future.
            </p>
            <div className="sf-hero-buttons">
              <button className="sf-btn sf-btn-primary" onClick={startApp}>
                Start for Free <span>→</span>
              </button>
              <button
                className="sf-btn sf-btn-outline"
                onClick={() => scrollTo("product")}
              >
                <span>▷</span> Watch Demo
              </button>
            </div>
            <div className="sf-trust-row">
              <span><b>✦</b> AI Powered</span>
              <span><b>♧</b> Secure</span>
              <span><b>⚡</b> Fast & Modern</span>
            </div>
          </div>

          <div className="sf-hero-visual">
            <DashboardPreview />
          </div>
        </section>

        <div className="sf-container sf-trust-strip">
          <span><b>✦</b> AI Powered <small>Smart suggestions</small></span>
          <span><b>♧</b> Secure <small>Your data is safe</small></span>
          <span><b>⚡</b> Fast & Modern <small>Built for learners</small></span>
          <span><b>♡</b> Loved by learners <small>Made for students</small></span>
        </div>

        {/* How it works */}
        <section className="sf-section" id="about">
          <div className="sf-container">
            <div className="sf-section-heading">
              <span className="sf-kicker">— How it works —</span>
              <h2>Get Started in 3 Simple Steps</h2>
              <p>
                Begin your journey toward better learning in just a few clicks.
              </p>
            </div>

            <div className="sf-steps">
              <article className="sf-step">
                <div className="sf-step-art">
                  <span className="sf-step-number">1</span> ♙
                </div>
                <h3>Create Your Account</h3>
                <p>Sign up quickly and get access to your personal dashboard.</p>
              </article>
              <article className="sf-step">
                <div className="sf-step-art">
                  <span className="sf-step-number">2</span> 📋
                </div>
                <h3>Manage Your Tasks</h3>
                <p>Add, edit and track your daily tasks and study goals.</p>
              </article>
              <article className="sf-step">
                <div className="sf-step-art">
                  <span className="sf-step-number">3</span> 🧠
                </div>
                <h3>Get AI Assistance</h3>
                <p>Use AI to create study plans, summarize notes and learn better.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="sf-section sf-section-soft" id="features">
          <div className="sf-container">
            <div className="sf-section-heading">
              <span className="sf-kicker">— Features —</span>
              <h2>Everything You Need to Learn Better</h2>
              <p>
                Powerful tools designed for modern learners, all in one place.
              </p>
            </div>

            <div className="sf-feature-grid">
              {features.map((feature) => (
                <article className="sf-feature" key={feature.title}>
                  <div className="sf-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product preview */}
        <section className="sf-section" id="product">
          <div className="sf-container sf-product">
            <div>
              <span className="sf-eyebrow">✦ Product Preview</span>
              <h2>A Smarter Interface for Better Learning</h2>
              <p>
                Explore a clean, modern and intuitive dashboard designed to
                help you stay organized and productive.
              </p>
              <ul className="sf-check-list">
                <li>Clean & modern UI</li>
                <li>Real-time progress tracking</li>
                <li>Fully responsive design</li>
              </ul>
              <button
                className="sf-btn sf-btn-primary"
                onClick={() => scrollTo("features")}
              >
                Explore Features →
              </button>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* Testimonials */}
        <section className="sf-section sf-section-soft" id="testimonials">
          <div className="sf-container">
            <div className="sf-section-heading">
              <span className="sf-kicker">— Testimonials —</span>
              <h2>What Our Users Say</h2>
              <p>Join learners building better study habits with StudyFlow AI.</p>
            </div>

            <div className="sf-testimonials">
              {[
                {
                  avatar: "👩🏻‍🎓",
                  quote: "StudyFlow AI has completely changed the way I plan my studies. The AI features are amazing!",
                  name: "Priya Sharma",
                  role: "Computer Science Student",
                },
                {
                  avatar: "👨🏻‍🎓",
                  quote: "Super easy to use and very helpful for my daily tasks and study goals. Highly recommended!",
                  name: "Rohan Gupta",
                  role: "Engineering Student",
                },
                {
                  avatar: "👩🏽‍💻",
                  quote: "The study planner and notes management are game changers. Loving it!",
                  name: "Sneha Karki",
                  role: "IT Student",
                },
              ].map((person) => (
                <article className="sf-quote" key={person.name}>
                  <span style={{ color: "#aaa" }}>“</span>
                  <blockquote>{person.quote}</blockquote>
                  <div className="sf-stars">★★★★★</div>
                  <div className="sf-person">
                    <div className="sf-avatar">{person.avatar}</div>
                    <div>
                      <strong>{person.name}</strong>
                      <small>{person.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="sf-section" id="pricing">
          <div className="sf-container">
            <div className="sf-section-heading">
              <span className="sf-kicker">— Pricing —</span>
              <h2>Simple and Transparent Pricing</h2>
              <p>Choose the plan that fits your learning journey.</p>
            </div>

            <div className="sf-pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`sf-plan ${plan.popular ? "popular" : ""}`}
                  key={plan.name}
                >
                  {plan.popular && (
                    <span className="sf-popular-label">Most Popular</span>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="sf-plan-subtitle">{plan.subtitle}</p>
                  <div className="sf-price">
                    <strong>${plan.price}</strong> / month
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className={`sf-btn ${plan.popular ? "sf-btn-primary" : "sf-btn-outline"}`}
                    onClick={startApp}
                  >
                    {plan.name === "Free"
                      ? "Get Started →"
                      : `Choose ${plan.name} →`}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sf-section sf-section-soft" id="faq">
          <div className="sf-container sf-faq-layout">
            <div>
              <span className="sf-kicker">— FAQ —</span>
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about StudyFlow AI.</p>
              <button
                className="sf-btn sf-btn-outline"
                onClick={() => setOpenFaq(openFaq === -1 ? 0 : -1)}
              >
                {openFaq === -1 ? "Show FAQs ↑" : "View All FAQs →"}
              </button>
            </div>

            <div>
              {faqs.map((faq, index) => (
                <div className="sf-faq-item" key={faq.q}>
                  <button
                    className="sf-faq-question"
                    aria-expanded={openFaq === index}
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                  >
                    <span>{faq.q}</span>
                    <span>{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <div className="sf-faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="sf-container" style={{ paddingBottom: 35 }}>
          <div className="sf-cta">
            <div>
              <h2>Ready to Level Up Your Learning?</h2>
              <p>
                Join StudyFlow AI today and take the first step toward a
                smarter, more organized you.
              </p>
            </div>
            <button className="sf-btn" onClick={startApp}>
              Get Started Now <span>→</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sf-footer" id="contact">
        <div className="sf-container">
          <div className="sf-footer-grid">
            <div className="sf-footer-about">
              <a className="sf-logo" href="#home">
                <span className="sf-logo-mark">✦</span>
                <span>StudyFlow AI</span>
              </a>
              <p>Plan smarter. Learn better. Achieve more with your personal AI study companion.</p>
            </div>

            <div>
              <h4>Product</h4>
              <div className="sf-footer-links">
                <a href="#features">Features</a>
                <a href="#product">Product</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">FAQ</a>
              </div>
            </div>

            <div>
              <h4>Company</h4>
              <div className="sf-footer-links">
                <a href="#about">About</a>
                <a href="#testimonials">Blog</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <h4>Follow Us</h4>
              <div className="sf-footer-links">
                <a href="#contact">Instagram</a>
                <a href="#contact">LinkedIn</a>
                <a href="#contact">GitHub</a>
              </div>
            </div>

            <div>
              <h4>Stay Updated</h4>
              <p style={{ color: "var(--sf-muted)", fontSize: 12, lineHeight: 1.7 }}>
                Get the latest updates and features.
              </p>
              <form
                className="sf-newsletter"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Thanks for subscribing!");
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">→</button>
              </form>
            </div>
          </div>

          <div className="sf-footer-bottom">
            <span>© {new Date().getFullYear()} StudyFlow AI. All rights reserved.</span>
            <div className="sf-footer-legal">
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
