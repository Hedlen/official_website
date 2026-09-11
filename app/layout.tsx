import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "蓉程智惠科技有限公司｜连接每一份价值", description: "立足成都，面向西南的企业数智、产业协同与政企综合服务。", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
