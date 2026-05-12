import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Krish Aryan — Resume",
};

export default function ResumePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', sans-serif;
          background: #f4f4f5;
          color: #18181b;
          font-size: 13px;
          line-height: 1.5;
        }

        .page {
          max-width: 800px;
          margin: 32px auto;
          background: #ffffff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          border-radius: 8px;
          overflow: hidden;
        }

        /* ── Header ── */
        .header {
          background: #18181b;
          color: #fff;
          padding: 36px 40px 28px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .header-left h1 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .header-left .title {
          color: #c9a84c;
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-end;
          font-size: 12px;
          color: #a1a1aa;
        }

        .header-right a {
          color: #c9a84c;
          text-decoration: none;
        }

        /* ── Body ── */
        .body {
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* ── Section ── */
        .section-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #c9a84c;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e4e4e7;
        }

        /* ── Summary ── */
        .summary p {
          color: #3f3f46;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ── Experience / Education ── */
        .entries { display: flex; flex-direction: column; gap: 16px; }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .entry-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #18181b;
        }

        .entry-date {
          font-size: 11.5px;
          color: #71717a;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .entry-sub {
          font-size: 12px;
          color: #c9a84c;
          font-weight: 500;
          margin-top: 1px;
        }

        .entry-desc {
          font-size: 12.5px;
          color: #52525b;
          margin-top: 5px;
          line-height: 1.6;
        }

        /* ── Skills ── */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 32px;
        }

        .skill-row { display: flex; flex-direction: column; gap: 4px; }

        .skill-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #3f3f46;
        }

        .skill-label span:last-child { color: #c9a84c; font-weight: 600; }

        .skill-bar {
          height: 5px;
          background: #e4e4e7;
          border-radius: 99px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: #c9a84c;
          border-radius: 99px;
        }

        /* ── Projects ── */
        .projects { display: flex; flex-direction: column; gap: 14px; }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .project-name {
          font-size: 13.5px;
          font-weight: 600;
          color: #18181b;
        }

        .project-links { display: flex; gap: 10px; }

        .project-links a {
          font-size: 11px;
          color: #c9a84c;
          text-decoration: none;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 5px;
        }

        .tag {
          font-size: 10.5px;
          padding: 2px 8px;
          background: #fef9ec;
          color: #92400e;
          border: 1px solid #fde68a;
          border-radius: 99px;
          font-weight: 500;
        }

        .project-desc {
          font-size: 12.5px;
          color: #52525b;
          margin-top: 4px;
          line-height: 1.6;
        }

        /* ── Print button ── */
        .print-bar {
          max-width: 800px;
          margin: 0 auto 12px;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 0 4px;
        }

        .print-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: #c9a84c;
          color: #18181b;
          font-size: 13px;
          font-weight: 600;
          border: none;
          border-radius: 99px;
          cursor: pointer;
          font-family: inherit;
        }

        .print-btn:hover { background: #b8952f; }

        @media print {
          body { background: #fff; font-size: 12px; }
          .page {
            margin: 0;
            box-shadow: none;
            border-radius: 0;
            max-width: 100%;
          }
          .print-bar { display: none; }
          .header { padding: 28px 32px 22px; }
          .body { padding: 24px 32px; gap: 22px; }
        }
      `}</style>

      <PrintButton />

      <div className="page">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <h1>Krish Aryan</h1>
            <div className="title">Full Stack Developer</div>
          </div>
          <div className="header-right">
            <span>📧 portfolio-fullstack-lovat.vercel.app@gmail.com</span>
            <span>📞 +91 9031350700</span>
            <span>📍 India · Remote</span>
            <a href="https://portfolio-fullstack-lovat.vercel.app" target="_blank">portfolio-fullstack-lovat.vercel.app</a>
            <a href="https://github.com/Krish-AryanDev" target="_blank">github.com/Krish-AryanDev</a>
            <a href="https://www.linkedin.com/in/krish-aryan-868890370/" target="_blank">linkedin.com/in/krish-aryan</a>
          </div>
        </div>

        <div className="body">
          {/* Summary */}
          <div className="summary">
            <div className="section-title">Summary</div>
            <p>
              Passionate Full Stack Developer and B.Tech CSE student at Manipal University Jaipur.
              Experienced in building real-world products — from client websites to SaaS platforms —
              using React, Next.js, Node.js, and Supabase. Founder of WarmStay.in, a live hostel booking platform.
              Active hackathon participant with a finalist placement at IEEE Snatch 2.0.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="section-title">Experience</div>
            <div className="entries">
              <div>
                <div className="entry-header">
                  <span className="entry-title">Founder &amp; Full Stack Developer</span>
                  <span className="entry-date">2025 – Present</span>
                </div>
                <div className="entry-sub">WarmStay · Remote</div>
                <div className="entry-desc">
                  Building WarmStay.in — a hostel booking platform from the ground up. Handling everything from product design to development and deployment using Next.js, Supabase, and Tailwind CSS.
                </div>
              </div>

              <div>
                <div className="entry-header">
                  <span className="entry-title">Freelance Web Developer</span>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">Shehnai Resort · Freelance</div>
                <div className="entry-desc">
                  Designed and developed the official website for Shehnai Resort (shehnairesort.in), a live hospitality business. Built with React, Next.js, and Tailwind CSS.
                </div>
              </div>

              <div>
                <div className="entry-header">
                  <span className="entry-title">Finalist – Snatch 2.0 DSA Hackathon</span>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">IEEE · MUJ</div>
                <div className="entry-desc">
                  Competed in a competitive Data Structures &amp; Algorithms contest organized by IEEE. Reached the finals against participants from across the university.
                </div>
              </div>

              <div>
                <div className="entry-header">
                  <span className="entry-title">Hackathon Participant – The Fest 3.0</span>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">Randomize · MUJ</div>
                <div className="entry-desc">
                  Built Athena AI, an educational learning platform, during The Fest 3.0 hackathon. Designed and developed the full product within the hackathon timeline.
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="section-title">Education</div>
            <div className="entries">
              <div>
                <div className="entry-header">
                  <span className="entry-title">B.Tech Computer Science Engineering</span>
                  <span className="entry-date">2025 – 2029</span>
                </div>
                <div className="entry-sub">Manipal University Jaipur</div>
                <div className="entry-desc">
                  Currently pursuing B.Tech in CSE. Completed first year with a strong foundation in programming, data structures, and computer science fundamentals.
                </div>
              </div>

              <div>
                <div className="entry-header">
                  <span className="entry-title">Full Stack Web Development Bootcamp</span>
                  <span className="entry-date">2025 – 2026</span>
                </div>
                <div className="entry-sub">100xDevs</div>
                <div className="entry-desc">
                  Intensive bootcamp covering the complete full stack — React, Next.js, Node.js, databases, and deployment. Built real-world projects from scratch.
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="section-title">Skills</div>
            <div className="project-tags">
              {["React", "Next.js", "Tailwind CSS"].map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="section-title">Projects</div>
            <div className="projects">
              <div>
                <div className="project-header">
                  <span className="project-name">WarmStay</span>
                  <div className="project-links">
                    <a href="https://warmstay.in" target="_blank">warmstay.in ↗</a>
                    <a href="https://github.com/Krish-AryanDev/WarmStay" target="_blank">GitHub ↗</a>
                  </div>
                </div>
                <div className="project-tags">
                  {["Next.js", "Supabase", "Tailwind CSS"].map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-desc">A hostel booking platform that lets travelers discover and book hostels with ease. Built with Next.js API routes and Supabase for real-time data.</div>
              </div>

              <div>
                <div className="project-header">
                  <span className="project-name">Shehnai Resort</span>
                  <div className="project-links">
                    <a href="https://shehnairesort.in" target="_blank">shehnairesort.in ↗</a>
                    <a href="https://github.com/Krish-AryanDev/Sehnai-Resort" target="_blank">GitHub ↗</a>
                  </div>
                </div>
                <div className="project-tags">
                  {["React", "Next.js", "Tailwind CSS"].map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-desc">A professional website built for a live hospitality business to showcase their marriage hall, restaurant, and hotel services with online booking.</div>
              </div>

              <div>
                <div className="project-header">
                  <span className="project-name">MUJ Freelance</span>
                  <div className="project-links">
                    <a href="https://github.com/Krish-AryanDev/MUJ-Freelance" target="_blank">GitHub ↗</a>
                  </div>
                </div>
                <div className="project-tags">
                  {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-desc">A freelance marketplace platform connecting clients with skilled freelancers. Full MERN stack with job listings, proposals, and user profiles.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
