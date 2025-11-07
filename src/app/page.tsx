"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const GroupLogo = "/icons/Group.png";
const UpperRightLogo = "/images/Upper-right_Logo.png";
const SettingsIcon = "/icons/Settings.png";
const WadeWarrenImg = "/images/Wade_Warren.png";
const AvaWrightImg = "/images/Ava_Wright.png";
const CodyFisherImg = "/images/Cody_Fisher.png";
const OliviaRhye = "/images/Olivia_Rhye.png";
const PhoenixBaker = "/images/Phoenix_Baker.png";
const LanaSteiner = "/images/Lana_Steiner.png";
const DemiWilkinson = "/images/Demi_Wilkinson.png";
const CandiceWu = "/images/Candice_Wu.png";
const BearLogo = "/icons/Bear_Logo.png";
const FileTypePdf = "/icons/File-Type-Pdf.png";
const FileTypeDoc = "/icons/File-Type-Doc.png";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ClientOnlyInput = dynamic(() => import("@/components/ui/input").then((m) => m.Input), { ssr: false });

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen md:grid md:grid-cols-[260px_1fr] bg-secondary">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed md:static top-0 left-0 h-full w-[260px] transform transition-transform duration-300 ease-in-out z-50 md:transform-none ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex flex-col gap-2 px-4 pt-1 pb-4 border-r bg-gradient-to-b from-sky-900 to-slate-800 text-white`}>
        <div className="px-2 pt-2 pb-3 relative">
          {/* Mobile Close Button */}
          <button 
            className="md:hidden absolute top-2 right-2 p-2 text-white hover:bg-white/10 rounded-md transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsSidebarOpen(false);
            }}
            aria-label="Close menu"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-[64px]">
            <Image src={GroupLogo} alt="WeFrameTech" fill className="object-contain" priority />
          </div>
        </div>
        <nav className="space-y-1 text-sm">
          {[
            "Home",
            "Stages & Checklist",
            "Upload Docs",
            "Preferred Vendors",
            "Tech Stack",
            "Targets",
            "Zee Sales Targets",
            "M&I Settings",
            "Pending Questions",
          ].map((item, idx) => (
            <a key={idx} className={`block rounded-md px-3 py-2 ${idx===0?"bg-white/10":"hover:bg-white/10"}`} href="#">
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-auto px-3 py-2 text-sm/6 opacity-80">Logout</div>
      </aside>
      
      <main className="p-0 md:p-0">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="px-4 md:px-6 lg:px-8 h-[64px] flex items-center justify-between md:justify-end">
            {/* Mobile Hamburger Menu */}
            <button 
              className="md:hidden flex flex-col gap-1 p-2"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-foreground"></span>
              <span className="w-5 h-0.5 bg-foreground"></span>
              <span className="w-5 h-0.5 bg-foreground"></span>
            </button>
            <div className="flex items-center gap-5">
              <div className="relative size-5">
                <Image src={SettingsIcon} alt="Settings" fill className="object-contain" priority />
              </div>
              <div className="relative size-9 border rounded-full overflow-hidden">
                <Image src={UpperRightLogo} alt="Company" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </header>
        <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 space-y-6">

        <section className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:items-start">
          {/* Left Column - Account Progress */}
          <Card className="md:col-span-2 xl:col-span-1 xl:h-[500px] xl:overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
            <CardHeader className="pb-0 text-center xl:pb-2">
              <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 xl:text-lg">Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="pt-3 xl:overflow-y-auto xl:h-[420px]">
              <div className="flex flex-col items-center">
                <div className="relative size-24 xl:size-20 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 36 36" className="size-24 xl:size-20">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#e9edf1" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#1f8acb" strokeWidth="3" strokeDasharray="85 100" pathLength="100" strokeLinecap="round" transform="rotate(-90 18 18)" className="group-hover:stroke-blue-500 transition-colors duration-300" />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-[16px] xl:text-[14px] font-semibold group-hover:text-blue-600 transition-colors duration-300">85%</div>
                </div>
              </div>
              <div className="mt-3 xl:mt-2 mx-4 xl:mx-2 border-t" />
              <div className="mt-3 xl:mt-2 space-y-2 xl:space-y-2">
                <div className="rounded-lg xl:rounded-lg bg-gray-100 p-2.5 xl:p-2.5 group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="text-sm xl:text-sm font-medium mb-2 xl:mb-2 group-hover:text-gray-800 transition-colors duration-300">Steps Completed</div>
                  <ul className="space-y-2 xl:space-y-2 text-sm xl:text-sm">
                    {[
                      "Profile Setup",
                      "Initial Training",
                      "Legal Documents",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center justify-between hover:bg-white/50 rounded-lg px-1.5 xl:px-2 py-1 xl:py-1 transition-colors duration-200">
                        <div className="flex items-center gap-2 xl:gap-2 text-muted-foreground">
                          <span className="size-2 xl:size-2 rounded-full bg-muted-foreground/30 inline-block" />
                          {item}
                        </div>
                        <span className="inline-grid size-5 xl:size-5 place-items-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-200">
                          <svg viewBox="0 0 24 24" className="size-3 xl:size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg xl:rounded-lg bg-gray-100 p-2.5 xl:p-2.5 group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="text-sm xl:text-sm font-medium mb-2 xl:mb-2 group-hover:text-gray-800 transition-colors duration-300">Steps Remaining</div>
                  <ul className="space-y-2 xl:space-y-2 text-sm xl:text-sm">
                    {[
                      "Financial Integration",
                      "Final Review",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center justify-between hover:bg-white/50 rounded-lg px-1.5 xl:px-2 py-1 xl:py-1 transition-colors duration-200">
                        <div className="flex items-center gap-2 xl:gap-2 text-muted-foreground">
                          <span className="size-2 xl:size-2 rounded-full bg-muted-foreground/30 inline-block" />
                          {item}
                        </div>
                        <span className="inline-grid size-5 xl:size-5 place-items-center rounded-full bg-emerald-50 text-emerald-400 border border-emerald-100 hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-200">
                          <svg viewBox="0 0 24 24" className="size-3 xl:size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Middle Column - Total Franchisees Onboard + Financial Wellbeing */}
          <div className="space-y-4 md:col-span-1 xl:col-span-1 xl:h-[500px] xl:space-y-[16px]">
            <Card className="xl:h-[240px] xl:overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardHeader className="pb-7 xl:pb-4">
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">Total Franchisees Onboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 xl:space-y-2.5 xl:pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 xl:gap-2.5">
                    <div className="text-[34px] xl:text-[32px] font-semibold leading-none tracking-tight group-hover:text-blue-600 transition-colors duration-300">14</div>
                    <Badge className="rounded-full px-2.5 py-0.5 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300">+7.4%</Badge>
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 group-hover:scale-110 transition-transform duration-300">
                      {[
                        { src: OliviaRhye, name: "Olivia Rhye" },
                        { src: PhoenixBaker, name: "Phoenix Baker" },
                        { src: LanaSteiner, name: "Lana Steiner" },
                        { src: DemiWilkinson, name: "Demi Wilkinson" },
                        { src: CandiceWu, name: "Candice Wu" },
                      ].map((item, i, arr) => (
                        <div key={i} className={`relative size-7 rounded-full overflow-hidden ring-2 ring-white dark:ring-background ${i === arr.length - 1 ? 'z-0' : ''} hover:ring-blue-300 hover:z-20 hover:scale-125 transition-all duration-200`} title={item.name}>
                          <Image src={item.src} alt={item.name} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="-ml-1.5 z-10 grid place-items-center size-6 rounded-full border bg-background text-[11px] text-muted-foreground group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300">+7</span>
                  </div>
                </div>

                {/* segmented progress bar */}
                <div className="h-2 xl:h-1.5 rounded-full bg-sky-100 overflow-hidden flex group-hover:h-3 xl:group-hover:h-1.5 transition-all duration-300">
                  <div className="h-full bg-sky-600 hover:bg-sky-700 transition-colors duration-200" style={{width: `${(2/14)*100}%`}} />
                  <div className="h-full bg-sky-500 hover:bg-sky-600 transition-colors duration-200" style={{width: `${(7/14)*100}%`}} />
                  <div className="h-full bg-sky-400 hover:bg-sky-500 transition-colors duration-200" style={{width: `${(5/14)*100}%`}} />
                </div>

                {/* labels and counts list */}
                <div className="space-y-3 xl:space-y-2.5">
                  {[
                    { label: "Stage 1 (Initial Inquiry)", value: 2, color: "bg-sky-600" },
                    { label: "Stage 2 (Document Submission)", value: 7, color: "bg-sky-500" },
                    { label: "Stage 3 (Training)", value: 5, color: "bg-sky-400" },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm hover:bg-gray-50 rounded-lg px-2 py-1 xl:py-0.5 transition-colors duration-200">
                      <div className="flex items-center gap-3 xl:gap-2.5 text-muted-foreground flex-1 min-w-0">
                        <span className={`size-2.5 rounded-full ${row.color} inline-block hover:scale-125 transition-transform duration-200`} />
                        <span className="truncate">{row.label}</span>
                      </div>
                      <div className="w-8 text-right font-semibold tracking-tight hover:text-blue-600 transition-colors duration-200">{String(row.value).padStart(2,'0')}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="xl:h-[240px] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardHeader className="pb-8">
                <CardTitle className="group-hover:text-green-600 transition-colors duration-300">Financial Wellbeing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[34px] font-semibold leading-none tracking-tight group-hover:text-green-600 transition-colors duration-300">20</div>
                    <div className="text-sm text-muted-foreground mt-1 group-hover:text-green-500 transition-colors duration-300">Total Franchisees</div>
                  </div>
                  <Badge className="rounded-full px-2.5 py-0.5 group-hover:bg-green-100 group-hover:text-green-800 transition-colors duration-300">+2.1%</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border p-3 bg-gray-100 hover:bg-green-50 hover:border-green-200 transition-all duration-300 hover:shadow-md hover:scale-105">
                    <div className="text-sm text-muted-foreground">Target</div>
                    <div className="text-xl font-semibold mt-1 hover:text-green-600 transition-colors duration-300">$500,000</div>
                  </div>
                  <div className="rounded-lg border p-3 bg-gray-100 hover:bg-green-50 hover:border-green-200 transition-all duration-300 hover:shadow-md hover:scale-105">
                    <div className="text-sm text-muted-foreground">Current</div>
                    <div className="text-xl font-semibold mt-1 hover:text-green-600 transition-colors duration-300">$450,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Key Insights & Feedback + Prospect Leads */}
          <div className="space-y-4 md:col-span-1 xl:col-span-1 xl:h-[500px] xl:space-y-[16px]">
            <Card className="xl:h-[240px] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">Key Insights & Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[34px] font-semibold leading-none tracking-tight group-hover:text-purple-600 transition-colors duration-300">10%</div>
                    <div className="text-sm text-muted-foreground mt-1 group-hover:text-purple-500 transition-colors duration-300">Sales Growth</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative size-9 rounded-full overflow-hidden border border-white hover:border-purple-300 hover:scale-110 transition-all duration-300">
                      <Image src={BearLogo} alt="Top Performer Logo" fill className="object-cover" />
                    </div>
                    <Badge className="rounded-full px-2.5 py-0.5 bg-blue-500 text-white group-hover:bg-purple-500 transition-colors duration-300">Top Performer</Badge>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-100 p-4 group-hover:bg-purple-50 hover:shadow-md transition-all duration-300">
                  <div className="text-sm font-medium mb-2 group-hover:text-purple-700 transition-colors duration-300">Feedback</div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-purple-600 transition-colors duration-300">
                    <span className="size-1.5 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0 group-hover:bg-purple-400 transition-colors duration-300" />
                    <span>Franchisees are requesting more detailed training materials.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="xl:h-[240px] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="text-base group-hover:text-orange-600 transition-colors duration-300">Prospect Leads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "Wade Warren", stage: "Initial Inquiry", avatar: "👨‍💼" },
                  { name: "Ava Wright", stage: "Initial Inquiry", avatar: "👨‍💻" },
                  { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "🧢" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 px-2 rounded-lg bg-gray-100 hover:bg-orange-50 hover:border hover:border-orange-200 hover:shadow-sm hover:scale-102 transition-all duration-200 cursor-pointer">
                    {p.name === "Wade Warren" && (
                      <div className="relative size-5 rounded-full overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-orange-300 hover:scale-110 transition-all duration-200">
                        <Image src={WadeWarrenImg} alt={p.name} fill className="object-cover" />
                      </div>
                    )}
                    {p.name === "Ava Wright" && (
                      <div className="relative size-5 rounded-full overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-orange-300 hover:scale-110 transition-all duration-200">
                        <Image src={AvaWrightImg} alt={p.name} fill className="object-cover" />
                      </div>
                    )}
                    {p.name === "Cody Fisher" && (
                      <div className="relative size-5 rounded-full overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-orange-300 hover:scale-110 transition-all duration-200">
                        <Image src={CodyFisherImg} alt={p.name} fill className="object-cover" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs truncate hover:text-orange-600 transition-colors duration-200">{p.name}</div>
                    </div>
                    <div className="text-xs text-muted-foreground flex-shrink-0">
                      <span className="truncate hover:text-orange-500 transition-colors duration-200">{p.stage}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>My Uploads</CardTitle>
              <CardDescription>Documents that are uploaded by you.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
                <div className="max-w-sm w-full"><ClientOnlyInput placeholder="Search here.." /></div>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-4 h-0.5 bg-gray-600"></div>
                    <div className="w-3 h-0.5 bg-gray-600"></div>
                    <div className="w-2 h-0.5 bg-gray-600"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Filters</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Document Name
                        </div>
                      </TableHead>
                      <TableHead className="hidden sm:table-cell w-40">Document Type</TableHead>
                      <TableHead className="hidden md:table-cell w-36">AI App Inclusion</TableHead>
                      <TableHead className="hidden md:table-cell w-44">Dashboard Inclusion</TableHead>
                      <TableHead className="hidden xl:table-cell w-40">Stage Access</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Tech requirements.pdf", size: "200 KB", type: "PDF", category: "Legal", aiOn: true, dashboardOn: true, stage: "Full" },
                      { name: "Dashboard screenshot.jpg", size: "720 KB", type: "JPG", category: "Vendors & Assets", aiOn: false, dashboardOn: true, stage: "Onboarding" },
                      { name: "Dashboard prototype recording.mp4", size: "16 MB", type: "MP4", category: "Technology", aiOn: true, dashboardOn: true, stage: "Franchisee" },
                      { name: "Financial Overview", size: "4.2 MB", type: "DOC", category: "Financial", aiOn: true, dashboardOn: false, stage: "Prospect" },
                      { name: "UX Design Guidelines.docx", size: "400 KB", type: "DOCX", category: "Legal", aiOn: true, dashboardOn: true, stage: "Onboarding" },
                      { name: "Dashboard interaction.aep", size: "12 MB", type: "AEP", category: "Legal", aiOn: false, dashboardOn: true, stage: "Onboarding" },
                      { name: "Briefing call recording.mp3", size: "18.6 MB", type: "MP3", category: "Financial", aiOn: true, dashboardOn: true, stage: "Prospect" },
                    ].map((doc, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="rounded" />
                            <div className="flex items-center gap-3">
                              <div className="relative size-8">
                                {doc.type === 'PDF' || doc.type === 'JPG' || doc.type === 'AEP' || doc.type === 'MP3' ? (
                                  <Image src={FileTypePdf} alt={doc.type} fill className="object-contain" />
                                ) : (
                                  <Image src={FileTypeDoc} alt={doc.type} fill className="object-contain" />
                                )}
                              </div>
                              <div>
                                <div className="font-medium">{doc.name}</div>
                                <div className="text-xs text-muted-foreground">{doc.size}</div>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge variant="outline" className={`${doc.category === 'Legal' ? 'bg-blue-50 text-blue-700 border-blue-200' : doc.category === 'Vendors & Assets' ? 'bg-green-50 text-green-700 border-green-200' : doc.category === 'Technology' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-pink-50 text-pink-700 border-pink-200'}`}>
                            {doc.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Switch defaultChecked={doc.aiOn} />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Switch defaultChecked={doc.dashboardOn} />
                        </TableCell>
                        <TableCell className="hidden xl:table-cell">
                          <div className="relative">
                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue={doc.stage}>
                              <option value="Full">Full</option>
                              <option value="Onboarding">Onboarding</option>
                              <option value="Franchisee">Franchisee</option>
                              <option value="Prospect">Prospect</option>
                            </select>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-1 sm:space-y-0 items-end">
                            <a className="text-black font-semibold text-sm" href="#">Delete</a>
                            <a className="text-blue-400 font-semibold text-sm" href="#">Edit</a>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
        </div>
      </main>
    </div>
  );
}
