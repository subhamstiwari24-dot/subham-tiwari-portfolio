import React, { useState } from 'react';
import {
  MapPin,
  AlertTriangle,
  Radio,
  ShieldCheck,
  Key,
  Layers,
  FileSpreadsheet,
  CheckCircle,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

interface ProjectMockupProps {
  projectId: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  liveUrl?: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  image,
  imageAlt,
  title,
  liveUrl,
  className,
}) => {
  const [imageError, setImageError] = useState(false);

  // Look up project metadata if not provided directly
  const project = projects.find((p) => p.id === projectId);
  const targetImage = image || project?.image;
  const targetAlt = imageAlt || project?.imageAlt || `${title || project?.title || 'Project'} screenshot`;
  const targetLiveUrl = liveUrl || (project?.links?.liveDemo?.isPlaceholder ? undefined : project?.links?.liveDemo?.url);

  // Derive display host name for browser URL bar
  const displayUrl = targetLiveUrl
    ? targetLiveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${projectId}.local`;

  // If a real screenshot image is configured and hasn't errored, display the sleek browser frame
  if (targetImage && !imageError) {
    return (
      <div
        className={cn(
          'relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0c1020] border border-border-subtle flex flex-col font-mono select-none group/mockup transition-all duration-300 shadow-xl',
          className
        )}
      >
        {/* Browser Chrome Header Bar */}
        <div className="relative z-20 flex items-center justify-between px-3.5 py-2.5 bg-[#12162a]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-2 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-text-muted flex items-center gap-1 min-w-0 max-w-[200px] sm:max-w-xs truncate">
              <span className="text-emerald-400 shrink-0">https://</span>
              <span className="text-text-secondary truncate">{displayUrl}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Application</span>
          </div>
        </div>

        {/* Screenshot Viewport Container */}
        <div className="relative z-10 flex-1 w-full h-full overflow-hidden bg-[#0B0D17]">
          <img
            src={targetImage}
            alt={targetAlt}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-105"
          />

          {/* Vignette & Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17]/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Bottom Floating Info Strip */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] pointer-events-none">
            <div className="px-2 py-1 rounded-md bg-bg-card/90 backdrop-blur-md border border-white/[0.08] text-text-secondary flex items-center gap-1.5 shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
              <span className="font-semibold text-text-primary text-[10px]">{title || project?.title}</span>
            </div>

            {targetLiveUrl && (
              <div className="px-2 py-1 rounded-md bg-bg-card/90 backdrop-blur-md border border-white/[0.08] text-accent-secondary text-[9px] shadow-subtle flex items-center gap-1">
                <span>Production Deployment</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Fallback 1: MoveSmart Blueprint Architecture
  if (projectId === 'movesmart') {
    return (
      <div
        className={cn(
          'relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0e1122] border border-border-subtle p-4 flex flex-col justify-between font-mono select-none group',
          className
        )}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#8B7CFF_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-text-muted ml-2">movesmart://transit-monitor</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-[10px] text-accent-secondary">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            <span>Telemetry Active</span>
          </div>
        </div>

        <div className="relative z-10 flex-1 my-3 flex items-center justify-center">
          <svg className="w-full h-full max-h-36 opacity-70" viewBox="0 0 300 120" fill="none">
            <path
              d="M 20 60 Q 80 15 150 60 T 280 60"
              stroke="#8B7CFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 30 90 C 90 90 120 30 220 40 T 270 80"
              stroke="#42D9E8"
              strokeWidth="2"
            />
            <circle cx="90" cy="40" r="4" fill="#F43F5E" />
            <circle cx="150" cy="60" r="5" fill="#42D9E8" />
            <circle cx="220" cy="40" r="4" fill="#10B981" />
          </svg>

          <div className="absolute top-2 left-4 p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] shadow-subtle max-w-[190px] space-y-1">
            <div className="flex items-center gap-1.5 text-rose-400 text-[10px] font-semibold">
              <AlertTriangle className="w-3 h-3 shrink-0" />
              <span>Route 14 Corridor Delay</span>
            </div>
            <p className="text-[9px] text-text-muted leading-tight">
              Incident reported by user • Verified by traffic ops
            </p>
          </div>

          <div className="absolute bottom-2 right-4 p-2 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] shadow-subtle text-[10px] flex items-center gap-1.5 text-text-secondary">
            <MapPin className="w-3 h-3 text-accent-primary" />
            <span>Sector 4-B Active GPS</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-text-muted border-t border-white/[0.08] pt-2">
          <span>Backend: Java Spring Boot REST</span>
          <span className="text-accent-secondary">Architecture Blueprint</span>
        </div>
      </div>
    );
  }

  // Fallback 2: Stealth Pay Blueprint Architecture
  if (projectId === 'stealth-pay') {
    return (
      <div
        className={cn(
          'relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0c1020] border border-border-subtle p-4 flex flex-col justify-between font-mono select-none group',
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-text-muted ml-2">stealth-pay://erc-5564-protocol</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 text-[10px] text-accent-primary font-medium">
            <ShieldCheck className="w-3 h-3 text-accent-primary" />
            <span>Zero-Knowledge Shielded</span>
          </div>
        </div>

        <div className="relative z-10 my-3 space-y-2">
          <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-text-muted flex items-center gap-1">
                <Key className="w-3 h-3 text-accent-secondary" />
                Ephemeral Key Pair
              </span>
              <span className="text-emerald-400 text-[9px] font-mono">0x4a9f...8b21</span>
            </div>
            <div className="w-full bg-white/[0.04] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-accent-primary to-accent-secondary w-3/4 h-full rounded-full" />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] flex items-center justify-between text-[10px]">
            <div>
              <p className="text-text-secondary text-[10px] font-semibold">Stealth Address Destination</p>
              <p className="text-text-muted text-[9px]">Unlinkable on public explorer</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-border-subtle text-[10px] text-accent-secondary">
              ERC-5564
            </span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-text-muted border-t border-white/[0.08] pt-2">
          <span>ETHGlobal Mumbai Project Sprint</span>
          <span className="text-accent-primary">Privacy Blueprint</span>
        </div>
      </div>
    );
  }

  // Fallback 3: LibraryEase Blueprint
  if (projectId === 'libraryease') {
    return (
      <div
        className={cn(
          'relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0c141d] border border-border-subtle p-4 flex flex-col justify-between font-mono select-none group',
          className
        )}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#42D9E8_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-text-muted ml-2">libraryease://public-catalog</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-[10px] text-accent-secondary">
            <BookOpen className="w-2.5 h-2.5" />
            <span>Digital Archive Active</span>
          </div>
        </div>

        <div className="relative z-10 my-3 grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[10px] text-text-primary font-semibold">
              <Search className="w-3 h-3 text-accent-secondary" />
              <span>Catalog Index</span>
            </div>
            <p className="text-[9px] text-text-muted">Public library archives & multi-category discovery</p>
          </div>

          <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[10px] text-text-primary font-semibold">
              <BookOpen className="w-3 h-3 text-accent-primary" />
              <span>AI Reading Assistant</span>
            </div>
            <p className="text-[9px] text-text-muted">Personalized literature & reading queries</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-text-muted border-t border-white/[0.08] pt-2">
          <span>Frontend: React + Vite + Tailwind</span>
          <span className="text-accent-secondary">Digital Library Blueprint</span>
        </div>
      </div>
    );
  }

  // Fallback 4: Royal Edge Enterprises Blueprint
  return (
    <div
      className={cn(
        'relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0d1224] border border-border-subtle p-4 flex flex-col justify-between font-mono select-none group',
        className
      )}
    >
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#8B7CFF_1px,transparent_1px),linear-gradient(to_bottom,#8B7CFF_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-text-muted ml-2">royaledge://catalogue-b2b</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400">
          <CheckCircle className="w-2.5 h-2.5" />
          <span>Industrial Pipeline</span>
        </div>
      </div>

      <div className="relative z-10 my-3 grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] space-y-1">
          <div className="flex items-center gap-1 text-[10px] text-text-primary font-semibold">
            <Layers className="w-3 h-3 text-accent-primary" />
            <span>Fusible Interlining</span>
          </div>
          <p className="text-[9px] text-text-muted">GSM: 45g – 120g • Woven/Non-Woven</p>
          <div className="pt-1 flex items-center gap-1 text-[9px] text-accent-secondary">
            <span>RFP Specs Ready</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-bg-card/90 backdrop-blur-md border border-white/[0.08] space-y-1">
          <div className="flex items-center gap-1 text-[10px] text-text-primary font-semibold">
            <FileSpreadsheet className="w-3 h-3 text-accent-secondary" />
            <span>Quotation Cart</span>
          </div>
          <p className="text-[9px] text-text-muted">Direct B2B enquiry to sales ops</p>
          <div className="pt-1 flex items-center gap-1 text-[9px] text-accent-primary">
            <span>PostgreSQL Pipeline</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] text-text-muted border-t border-white/[0.08] pt-2">
        <span>Backend: Spring Boot + PostgreSQL</span>
        <span className="text-accent-secondary">B2B Platform Blueprint</span>
      </div>
    </div>
  );
};
