import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Building2,
  Network,
  Brain,
  Workflow,
  Code2,
  Cloud,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NodeNetwork } from "@/components/ui/NodeNetwork";
import { Button } from "@/components/ui/Button";
import { SITE, PARENT_COMPANY } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Xeltrio Technologies — Parent Company of HamiaWorks",
  description:
    "Xeltrio Technologies is the parent company of hamiaiworks, building intelligent AI, automation, and software solutions.",
  alternates: {
    canonical: `${SITE.url}/parent-company`,
  },
};

// Focus areas as stated directly on the Xeltrio Technologies brand mark —
// not expanded on or embellished beyond what's shown there.
const FOCUS_AREAS = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Workflow, label: "Automation Solutions" },
  { icon: Code2, label: "Software Development" },
  { icon: Cloud, label: "Cloud & Enterprise" },
  { icon: TrendingUp, label: "Digital Transformation" },
];

export default function ParentCompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-14 md:pb-20 px-6 md:px-10">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <NodeNetwork className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base pointer-events-none" />
        <div className="relative mx-auto max-w-content text-center">
          <RevealOnScroll>
            <span className="eyebrow">Parent Company</span>

            <div className="mt-7 mx-auto w-full max-w-md">
              <div className="relative w-full aspect-[1078/456] rounded-xl2 overflow-hidden glass-strong">
                <Image
                  src={PARENT_COMPANY.logo}
                  alt={`${PARENT_COMPANY.name} — ${PARENT_COMPANY.tagline}`}
                  fill
                  sizes="(min-width: 768px) 448px, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mt-8 font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              {PARENT_COMPANY.name}
            </h1>
            <p className="mt-3 eyebrow !text-accent-violet">Parent Company of {SITE.name}</p>
            <p className="mt-5 text-ink-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {PARENT_COMPANY.tagline} hamiaiworks operates under {PARENT_COMPANY.name} as its AI
              automation agency brand.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <a
                href={PARENT_COMPANY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-violet overflow-hidden isolate bg-signal-gradient text-white shadow-glow-violet hover:shadow-[0_0_55px_rgba(110,91,255,0.5)] hover:scale-[1.02] active:scale-[0.98] px-8 py-4 text-base"
              >
                Visit {PARENT_COMPANY.shortName} Technologies
                <ExternalLink size={18} />
              </a>
              <Button href="/" variant="secondary" size="lg">
                Explore hamiaiworks
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Xeltrio Technologies */}
      <section className="section !pt-0">
        <div className="section-inner max-w-3xl">
          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">About {PARENT_COMPANY.name}</h2>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed">
              {PARENT_COMPANY.name} is an AI product company focused on building intelligent solutions
              across artificial intelligence, automation, software development, cloud &amp; enterprise
              systems, and digital transformation. For full details on the company, its offerings, and
              its work, visit the official {PARENT_COMPANY.name} website linked throughout this page.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {FOCUS_AREAS.map((area) => (
                <div
                  key={area.label}
                  className="glass rounded-xl2 p-4 text-center flex flex-col items-center gap-2.5"
                >
                  <area.icon className="text-accent-cyan" size={22} />
                  <span className="text-xs text-ink-muted leading-snug">{area.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Relationship / Ecosystem */}
      <section className="section bg-base-soft/40">
        <div className="section-inner">
          <SectionHeading
            eyebrow="How they connect"
            title="hamiaiworks is part of the Xeltrio Technologies ecosystem"
            description={`${PARENT_COMPANY.name} is the parent company behind hamiaiworks. hamiaiworks operates as its dedicated AI automation agency brand, while ${PARENT_COMPANY.name} builds AI products more broadly.`}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
            <RevealOnScroll>
              <GlassCard glow="violet" className="h-full text-center">
                <div className="relative mx-auto h-12 w-20">
                  <Image
                    src={PARENT_COMPANY.logo}
                    alt={`${PARENT_COMPANY.name} logo`}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{PARENT_COMPANY.name}</h3>
                <p className="mt-1 eyebrow !text-accent-violet">Parent Company</p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  An AI product company building intelligent solutions across AI, automation, software,
                  cloud, and digital transformation.
                </p>
                <a
                  href={PARENT_COMPANY.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-accent-cyan hover:gap-1.5 transition-all"
                >
                  Official website <ExternalLink size={11} />
                </a>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.06} className="flex md:flex-col items-center justify-center gap-3 py-2">
              <span className="h-px w-10 md:h-10 md:w-px bg-line-strong" aria-hidden="true" />
              <span className="flex h-9 w-9 items-center justify-center rounded-full glass shrink-0">
                <Network className="text-accent-cyan" size={16} />
              </span>
              <span className="h-px w-10 md:h-10 md:w-px bg-line-strong" aria-hidden="true" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <GlassCard glow="cyan" className="h-full text-center">
                <div className="mx-auto h-12 w-20 flex items-center justify-center">
                  <Building2 className="text-accent-cyan" size={28} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{SITE.name}</h3>
                <p className="mt-1 eyebrow">AI Automation Agency</p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{SITE.tagline}</p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-accent-cyan hover:gap-1.5 transition-all"
                >
                  Back to hamiaiworks <ArrowRight size={11} />
                </Link>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="section-inner">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-xl2 glass-strong px-8 py-16 md:px-16 md:py-20 text-center">
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <NodeNetwork className="w-full h-full" />
              </div>
              <div className="relative">
                <span className="eyebrow">Learn more</span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ink leading-tight max-w-2xl mx-auto">
                  Explore the wider {PARENT_COMPANY.name} ecosystem
                </h2>
                <p className="mt-5 text-ink-muted max-w-xl mx-auto">
                  Visit the official {PARENT_COMPANY.name} website, head back to hamiaiworks, or book a
                  free consultation to talk about your project directly with the team.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <a
                    href={PARENT_COMPANY.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-violet overflow-hidden isolate bg-signal-gradient text-white shadow-glow-violet hover:shadow-[0_0_55px_rgba(110,91,255,0.5)] hover:scale-[1.02] active:scale-[0.98] px-8 py-4 text-base"
                  >
                    Visit {PARENT_COMPANY.name}
                    <ExternalLink size={18} />
                  </a>
                  <Button href="/" variant="secondary" size="lg">
                    Explore hamiaiworks
                  </Button>
                  <Button href="/contact" variant="ghost" size="lg">
                    Book a consultation
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
