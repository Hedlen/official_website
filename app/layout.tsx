import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "成都蓉程智惠科技有限公司｜AI 项目落地与产业资源链接", description: "专注 AI 产业生态运营、项目落地、企业培训、软件开发、人才服务及资源链接，让 AI 项目更好落地，让产业资源更高效连接。", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
