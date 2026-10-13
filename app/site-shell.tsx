import Link from "next/link";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { services } from "./site-data";

export function Brand() {
  return <Link className="brand" href="/"><span className="brand-mark"><i /><i /><i /></span><span>蓉程智惠<small>RONGCHENG INTELLIGENCE</small></span></Link>;
}

export function Header({ light = false }: { light?: boolean }) {
  return <header className={light ? "site-header light" : "site-header"}><nav className="nav wrap">
    <Brand />
    <div className="nav-links">
      <Link href="/">首页</Link><Link href="/about">公司介绍</Link>
      <div className="nav-dropdown"><Link href="/services">业务服务 <ChevronDown size={14} /></Link><div className="nav-menu">{services.map(s => <Link key={s.slug} href={"/services#" + s.slug}>{s.title}</Link>)}</div></div>
      <Link href="/ecosystem">资源生态</Link><Link href="/cases">活动展示</Link><Link href="/contact">联系我们</Link>
    </div>
    <Link className="nav-cta" href="/contact">发起合作 <ArrowUpRight size={16} /></Link>
  </nav></header>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><Brand /><div><p>成都蓉程智惠科技有限公司</p><p className="muted"><MapPin size={14} /> 立足成都 · 服务全国</p></div><div className="footer-right"><p>© 2026 成都蓉程智惠科技有限公司</p><p>蜀ICP备2026XXXX号-1</p></div></div></footer>;
}

export function PageHero({ eyebrow, title, text, cta = "与我们沟通" }: { eyebrow: string; title: string; text: string; cta?: string }) {
  return <section className="page-hero"><Header /><div className="wrap page-hero-inner"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p><Link className="button primary" href="/contact">{cta}<ArrowUpRight size={18} /></Link></div></section>;
}

export function ContactBand() {
  return <section className="contact"><div className="wrap contact-inner"><div><p className="section-kicker">START A CONVERSATION</p><h2>让 AI 项目更好落地，<br />让产业资源更高效连接。</h2></div><Link href="/contact" className="contact-link">联系我们 <ArrowUpRight size={30} /></Link></div></section>;
}
