import { Check, Users } from "lucide-react";
import { ContactBand, Footer, PageHero } from "../site-shell";
import { services } from "../site-data";

export default function ServicesPage(){return <main><PageHero eyebrow="SERVICES" title="围绕 AI 项目全生命周期，组织关键能力与资源。" text="从技术架构、培训、开发与运营，到人才、资本和政产学研合作，提供清晰、可协同的服务模块。" cta="获取定制方案"/><section className="service-detail-list wrap">{services.map(({slug,no,icon:Icon,title,summary,items,audience})=><article id={slug} className="service-detail" key={slug}><div className="service-detail-title"><span>{no}</span><Icon/><h2>{title}</h2><p>{summary}</p></div><div className="service-detail-body"><h3>服务内容</h3><ul>{items.map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul><div className="audience"><Users size={18}/><div><b>适合对象</b><p>{audience}</p></div></div></div></article>)}</section><ContactBand/><Footer/></main>}
