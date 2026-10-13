import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Footer, PageHero } from "../site-shell";
import { collaborations } from "../site-data";

export default function ContactPage(){return <main><PageHero eyebrow="CONTACT & COOPERATION" title="带着明确需求来，我们负责组织合适的下一步。" text="无论是 AI 项目、培训、开发、人才、活动还是产业资源合作，都欢迎与我们建立联系。" cta="发送合作邮件"/><section className="contact-page wrap"><div className="contact-info"><p className="section-kicker">CONTACT US</p><h2>联系我们</h2><a href="mailto:tjhedlen@163.com"><Mail/>tjhedlen@163.com</a><p><MapPin/>中国 · 四川 · 成都<br/>服务范围覆盖全国</p><small>来信请简要说明合作背景、需求方向、预计时间与联系人信息，我们将尽快回复。</small></div><div className="contact-directions"><p className="section-kicker">COOPERATION DIRECTIONS</p>{collaborations.map(([title,text])=><a href={"mailto:tjhedlen@163.com?subject="+encodeURIComponent(title)} key={title}><div><b>{title}</b><p>{text}</p></div><ArrowUpRight/></a>)}</div></section><Footer/></main>}
