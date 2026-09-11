import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "成都蓉程智惠科技有限公司｜立足成都，服务全国", description: "成都蓉程智惠科技有限公司，立足成都，服务全国，提供企业数智、产业协同与政企综合服务。", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
