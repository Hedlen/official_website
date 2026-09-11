import { ArrowUpRight, Building2, ChevronRight, CircleCheck, Handshake, MapPin, Network, Sparkles } from "lucide-react";

const services = [
  { icon: Building2, title: "企业数智服务", text: "从业务梳理到系统落地，让经营数据真正服务每一次决策。", no: "01" },
  { icon: Network, title: "产业协同平台", text: "连接园区、商家与服务机构，打造可持续的区域服务网络。", no: "02" },
  { icon: Handshake, title: "政企综合服务", text: "以清晰流程与专属响应，助力项目推进和资源高效匹配。", no: "03" },
];

export default function Home() {
  return <main><section className="hero" id="home">
    <nav className="nav wrap"><a className="brand" href="#home"><span className="brand-mark"><i /><i /><i /></span><span>蓉程智惠<small>RONGCHENG INTELLIGENCE</small></span></a><div className="nav-links"><a href="#services">业务服务</a><a href="#about">关于我们</a><a href="#contact">联系合作</a></div><a className="nav-cta" href="#contact">获取方案 <ArrowUpRight size={16} /></a></nav>
    <div className="wrap hero-content"><div className="eyebrow"><span /> 立足成都 · 服务全国</div><h1>让每一份连接<br /><em>产生更好的价值</em></h1><p>成都蓉程智惠科技有限公司，立足成都，服务全国。我们以数字技术连接企业、园区与城市服务，为发展提供可靠、务实的智慧解决方案。</p><div className="hero-actions"><a className="button primary" href="#services">探索我们的服务 <ChevronRight size={18} /></a><a className="text-link" href="#about">了解蓉程智惠 <ArrowUpRight size={17} /></a></div></div>
    <div className="hero-bottom wrap"><span>SCROLL TO DISCOVER</span><div className="hero-stat"><b>2024</b><span>启程于成都<br />服务全国客户</span></div></div>
  </section>
  <section className="intro wrap" id="about"><p className="section-kicker">WHAT WE BELIEVE</p><div className="intro-grid"><h2>技术的温度，<br />藏在每一次<span>恰到好处</span>的服务里。</h2><div><p>成都蓉程智惠科技有限公司立足成都、服务全国。我们相信，真正有用的科技不止于系统与屏幕，更在于理解每一个具体场景。</p><a className="text-link dark" href="#contact">认识我们 <ArrowUpRight size={17} /></a></div></div></section>
  <section className="services" id="services"><div className="wrap"><div className="section-head"><div><p className="section-kicker">OUR SERVICES</p><h2>面向真实需求的<br />智慧服务能力</h2></div><p>以场景为起点，以结果为导向。<br />从一项服务，到一套长期协同机制。</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text, no }) => <article className="service-card" key={no}><div className="card-top"><span>{no}</span><Icon size={25} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`了解${title}`}><ArrowUpRight size={21} /></a></article>)}</div></div></section>
  <section className="promise wrap"><div className="promise-card"><div className="promise-copy"><p className="section-kicker">OUR APPROACH</p><h2>做好一件事，<br />也做深一段关系。</h2><ul><li><CircleCheck size={18} /> 以客户场景为中心</li><li><CircleCheck size={18} /> 保持清晰透明的协作</li><li><CircleCheck size={18} /> 持续交付可衡量的价值</li></ul></div><div className="promise-art"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="core"><Sparkles size={32} /></div><span>CONNECTED<br />WITH PURPOSE</span></div></div></section>
  <section className="contact" id="contact"><div className="wrap contact-inner"><div><p className="section-kicker">START A CONVERSATION</p><h2>有一个想法？<br />我们一起把它落地。</h2></div><a href="mailto:hello@rongchengzhihui.com" className="contact-link">hello@rongchengzhihui.com <ArrowUpRight size={30} /></a></div></section>
  <footer><div className="wrap footer-grid"><a className="brand footer-brand" href="#home"><span className="brand-mark"><i /><i /><i /></span><span>蓉程智惠<small>RONGCHENG INTELLIGENCE</small></span></a><div><p>成都蓉程智惠科技有限公司</p><p className="muted"><MapPin size={14} /> 立足成都 · 服务全国</p></div><div className="footer-right"><p>© 2026 成都蓉程智惠科技有限公司</p><p>蜀ICP备2026XXXX号-1</p></div></div></footer>
  </main>;
}
