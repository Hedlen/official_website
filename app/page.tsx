import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ContactBand, Footer, Header } from "./site-shell";
import { collaborations, metrics, services } from "./site-data";

export default function Home() {
  return <main>
    <section className="hero"><Header /><div className="wrap hero-content"><div className="eyebrow"><span /> AI 产业生态运营 · 项目落地 · 资源链接</div><h1>让 AI 项目更好落地，<br /><em>让产业资源高效连接。</em></h1><p>成都蓉程智惠科技有限公司，汇聚技术、人才、社区与产业资源，为企业、政府、高校和创新团队提供从需求判断到项目落地的综合服务。</p><div className="hero-actions"><Link className="button primary" href="/services">探索业务服务 <ChevronRight size={18} /></Link><Link className="text-link" href="/about">了解我们 <ArrowUpRight size={17} /></Link></div></div><div className="hero-bottom wrap"><span>AI ECOSYSTEM & DELIVERY</span><div className="hero-stat"><b>100+</b><span>累计组织<br />AI 行业活动</span></div></div></section>

    <section className="intro wrap"><p className="section-kicker">OUR POSITIONING</p><div className="intro-grid"><h2>以落地为起点，<br />连接<span>技术与产业</span>。</h2><div><p>我们专注于 AI 产业生态运营、项目落地与资源链接。团队长期深耕人工智能产业，在技术架构、商业化、社区运营和产业资源整合方面具备持续实践经验。</p><Link className="text-link dark" href="/about">查看公司介绍 <ArrowUpRight size={17} /></Link></div></div></section>

    <section className="services"><div className="wrap"><div className="section-head"><div><p className="section-kicker">OUR SERVICES</p><h2>七类能力，服务<br />AI 项目全生命周期</h2></div><p>从技术、培训与开发，到人才、资本与生态，<br />围绕真实需求组织适配资源。</p></div><div className="service-grid home-services">{services.slice(0,6).map(({ icon: Icon, title, summary, no, slug }) => <article className="service-card" key={no}><div className="card-top"><span>{no}</span><Icon size={25} strokeWidth={1.5} /></div><h3>{title}</h3><p>{summary}</p><Link href={"/services#" + slug} aria-label={"了解" + title}><ArrowUpRight size={21} /></Link></article>)}</div><Link className="section-more" href="/services">查看全部业务服务 <ArrowUpRight size={18} /></Link></div></section>

    <section className="metrics-section"><div className="wrap"><div className="section-head ink"><div><p className="section-kicker">RESOURCE NETWORK</p><h2>持续积累的产业触达<br />与生态运营能力</h2></div><Link className="text-link dark" href="/ecosystem">进入资源生态 <ArrowUpRight size={17} /></Link></div><div className="metrics-grid">{metrics.map(m => <article className="metric-card" key={m.label}><strong>{m.value}</strong><h3>{m.label}</h3><p>{m.note}</p></article>)}</div><div className="partner-line"><span>长期链接</span><b>火山引擎</b><b>AWS</b><b>Workbuddy</b><b>TGO</b><b>WaytoAGI</b></div></div></section>

    <section className="collab-preview wrap"><div className="section-head ink"><div><p className="section-kicker">WORK WITH US</p><h2>以明确需求为起点，<br />共建长期价值。</h2></div><p>面向客户、生态伙伴、政府、高校、投资机构<br />及 AI 社区开放多元合作。</p></div><div className="collab-grid">{collaborations.slice(0,6).map(([title,text],i)=><Link className="collab-card" href="/contact" key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20}/></Link>)}</div></section>

    <ContactBand /><Footer />
  </main>;
}
