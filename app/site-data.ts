import { BrainCircuit, GraduationCap, Network, Handshake, Code2, Users, Landmark } from "lucide-react";

export const services = [
  { slug: "ai-delivery", no: "01", icon: BrainCircuit, title: "AI 技术与项目落地", summary: "从技术判断到工程交付，为 AI 项目提供全周期落地支持。", items: ["AI 技术架构设计与咨询", "AI 应用项目落地支持", "AI 模型开发与部署", "企业 AI 解决方案设计", "技术选型、架构评审与项目陪跑"], audience: "有 AI 转型、产品创新或技术落地需求的企业、政府机构与创业团队" },
  { slug: "training", no: "02", icon: GraduationCap, title: "企业 AI 培训与团队赋能", summary: "围绕业务场景建立可复用的 AI 认知、工具与工作流能力。", items: ["企业 AI 培训与团队能力赋能", "AI 工具与工作流培训", "管理层 AI 战略认知培训", "讲师授课与定制化 AI 内训课程"], audience: "企业管理层、业务团队、技术团队、高校及产业园区" },
  { slug: "ecosystem", no: "03", icon: Network, title: "AI 社区及产业生态运营", summary: "连接开发者、企业与产业伙伴，持续运营有价值的 AI 生态网络。", items: ["AI 社区与社群运营支持", "社区活动策划、执行与品牌运营", "活动商务赞助对接", "产业生态运营与社区共建", "线上线下活动组织"], audience: "AI 社区、技术品牌、产业园区、平台型企业与生态合作机构" },
  { slug: "brokerage", no: "04", icon: Handshake, title: "项目居间与资源对接", summary: "围绕真实项目需求，促进供需匹配与商业合作高效达成。", items: ["软件及 AI 应用项目居间", "短剧项目居间", "产业资源撮合与商业合作对接", "投融资及政府、高校合作资源链接"], audience: "项目需求方、技术服务商、内容团队、投资机构及产业伙伴" },
  { slug: "development", no: "05", icon: Code2, title: "软件外包与 AI 开发", summary: "以项目制或团队制合作，提供稳定、透明的技术交付能力。", items: ["软件及 AI 应用开发", "AI 模型开发", "系统集成", "技术团队外包", "项目制开发合作"], audience: "需要快速组建交付能力或补充技术资源的企业与项目团队" },
  { slug: "talent", no: "06", icon: Users, title: "人力服务与人才支持", summary: "链接专业人才与项目机会，提供灵活、匹配的组织支持。", items: ["猎头服务与人才招聘", "劳务外包与灵活用工", "FDE 人才支持", "活动人员支持", "项目制用人服务"], audience: "科技企业、创业团队、活动主办方及有弹性用人需求的组织" },
  { slug: "capital", no: "07", icon: Landmark, title: "投融资与政府 / 高校合作", summary: "链接资本、政策与产学研资源，帮助优质项目获得关键支持。", items: ["投融资对接", "政府及高校合作资源链接", "产业政策对接与项目申报支持", "产学研合作"], audience: "成长型企业、创新项目、高校团队、投资机构及政府合作部门" },
];

export const metrics = [
  { value: "1000万+", label: "开发者及产业资源", note: "链接技术人才、企业决策者与产业协同伙伴" },
  { value: "200万+", label: "私域社群资源", note: "连接多层次 AI 与科技行业社群网络" },
  { value: "100+", label: "AI 行业活动", note: "持续组织技术交流、产业论坛与生态活动" },
  { value: "10万+", label: "累计参会人次", note: "形成线上线下深度互动与合作触点" },
  { value: "1亿+", label: "线上传播曝光", note: "相关活动及项目获得广泛行业关注" },
  { value: "多方协同", label: "政产学研合作", note: "具备政府、高校、园区、社区及企业合作经验" },
];

export const ecosystemPartners = [
  { name: "火山引擎", mark: "火", category: "AI 企业与技术平台" },
  { name: "AWS", mark: "AWS", category: "AI 企业与技术平台" },
  { name: "Workbuddy", mark: "WB", category: "AI 企业与技术平台" },
  { name: "字节跳动", mark: "字节", category: "AI 企业与技术平台" },
  { name: "智谱 AI", mark: "ZP", category: "AI 企业与技术平台" },
  { name: "阶跃星辰", mark: "STEP", category: "AI 企业与技术平台" },
  { name: "月之暗面", mark: "KIMI", category: "AI 企业与技术平台" },
  { name: "MiniMax", mark: "MM", category: "AI 企业与技术平台" },
  { name: "商汤科技", mark: "ST", category: "AI 企业与技术平台" },
  { name: "旷视科技", mark: "MEG", category: "AI 企业与技术平台" },
  { name: "TGO", mark: "TGO", category: "开发者与产业社区" },
  { name: "WaytoAGI", mark: "WAI", category: "开发者与产业社区" },
  { name: "Linkloud", mark: "LI", category: "开发者与产业社区" },
  { name: "ClawHunt", mark: "CH", category: "开发者与产业社区" },
  { name: "OneOPC", mark: "OPC", category: "开发者与产业社区" },
];
export const collaborations = [
  ["AI 项目合作", "让技术方案进入真实场景，共同完成从验证到交付。"],
  ["企业 AI 培训", "为团队定制课程，让 AI 能力真正进入日常业务。"],
  ["社区与产业生态共建", "连接开发者与产业伙伴，共建长期活跃的生态网络。"],
  ["活动赞助与商务合作", "围绕精准人群与优质内容，拓展品牌影响力。"],
  ["软件外包与 AI 开发", "按项目或团队协作，快速补齐技术交付能力。"],
  ["猎头、招聘与人力服务", "为关键岗位和阶段性项目匹配合适人才。"],
  ["投融资对接", "帮助优质项目连接适配的资本与产业资源。"],
  ["政府 / 高校合作", "推动政策、科研与产业场景形成有效协同。"],
  ["产业资源链接", "把明确需求带入可信网络，促成高效合作。"],
];
