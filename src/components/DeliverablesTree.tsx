"use client";

import React from 'react';

// Types
export type DeliverableFormat = string;
export type DeliverableNode = {
  name: string;
  type: "folder" | "file";
  formats?: DeliverableFormat[];
  children?: DeliverableNode[];
};
export type DeliverableTreeData = {
  rootName: string;
  topLevelFolders: DeliverableNode[];
};

// SVG Icons matching the reference aesthetic
const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

const FileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

// Recursive Component for Vertical Tree
const VerticalTree = ({ nodes }: { nodes: DeliverableNode[] }) => {
  const [openNodeIdx, setOpenNodeIdx] = React.useState<number | null>(null);

  return (
    <ul className="relative text-sm text-foreground/80 ml-2">
      {nodes.map((node, idx) => {
        const hasChildren = node.children && node.children.length > 0;
        const hasFormats = node.formats && node.formats.length > 0;
        const isExpandable = hasChildren || hasFormats;
        const isOpen = openNodeIdx === idx;

        return (
        <li 
          key={idx} 
          className="relative pt-4 pl-6 before:content-[''] before:absolute before:top-[30px] before:left-0 before:w-5 before:h-[1px] before:bg-border after:content-[''] after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-border last:after:h-[30px]"
        >
          <div 
            className={`flex items-center gap-2 group relative z-10 ${isExpandable ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={(e) => {
              if (isExpandable) {
                e.stopPropagation();
                setOpenNodeIdx(isOpen ? null : idx);
              }
            }}
          >
            <span className={`transition-colors ${isOpen ? 'text-accent' : 'text-foreground/50 group-hover:text-accent'}`}>
              {node.type === 'folder' ? <FolderIcon /> : <FileIcon />}
            </span>
            <span className={`font-mono text-xs md:text-sm whitespace-nowrap transition-colors ${isOpen ? 'text-foreground font-bold' : ''}`}>
              {node.name}
            </span>
          </div>
          
          {isOpen && (
            <div className="animate-in slide-in-from-top-2 fade-in duration-200">
              {hasFormats && !hasChildren && (
                <div className="flex items-center gap-2 ml-4 mt-3 pl-6 relative before:content-[''] before:absolute before:top-[12px] before:left-0 before:w-5 before:h-[1px] before:bg-border after:content-[''] after:absolute after:top-[-10px] after:left-0 after:w-[1px] after:h-[22px] after:bg-border">
                  {node.formats!.map((fmt, i) => (
                    <div key={i} className="flex items-center gap-1 bg-card px-2 py-1 rounded border border-border shadow-sm">
                      <span className="text-accent scale-75"><FileIcon /></span>
                      <span className="font-mono text-[10px] md:text-xs text-foreground font-bold">{fmt}</span>
                    </div>
                  ))}
                </div>
              )}

              {hasChildren && (
                <VerticalTree nodes={node.children!} />
              )}
            </div>
          )}
        </li>
      )})}
    </ul>
  );
};

export default function DeliverablesTree({ data }: { data: DeliverableTreeData }) {
  const [openTopFolderIdx, setOpenTopFolderIdx] = React.useState<number | null>(0);

  if (!data || !data.topLevelFolders) return null;

  return (
    <div className="w-full bg-[#EBE7DF] dark:bg-card border-2 border-border p-8 md:p-16 rounded-[2rem] shadow-hard overflow-x-auto custom-scrollbar">
      <div className="min-w-[800px] flex flex-col items-center">
        
        {/* Root Node */}
        <div className="flex flex-col items-center gap-2 mb-8 relative">
          <div className="text-foreground/70 scale-[1.3]"><FolderIcon /></div>
          <h3 className="font-mono text-sm md:text-base tracking-widest uppercase font-bold text-foreground mt-2">{data.rootName}</h3>
          
          {/* Trunk line down from root */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-8 bg-border" />
        </div>

        {/* Top Level Spread */}
        <div className="relative w-full flex justify-between items-start">
          
          {/* The main horizontal connector line */}
          <div className="absolute top-0 left-[60px] right-[60px] h-[1px] bg-border" />

          {/* Map Top Level Folders */}
          {data.topLevelFolders.map((folder, idx) => {
            const isOpen = openTopFolderIdx === idx;
            return (
            <div 
              key={idx} 
              className="relative flex flex-col items-start cursor-pointer group"
              onClick={() => setOpenTopFolderIdx(isOpen ? null : idx)}
            >
              
              {/* Centered Folder Icon + Text for top level */}
              <div className="flex flex-col items-center w-[120px]">
                {/* Short vertical line dropping from horizontal connector */}
                <div className="w-[1px] h-6 bg-border mb-3" />
                
                <div className={`transition-colors mb-2 scale-110 ${isOpen ? 'text-accent' : 'text-foreground/60 group-hover:text-accent'}`}>
                  <FolderIcon />
                </div>
                <span className={`font-mono text-sm text-center leading-snug transition-colors ${isOpen ? 'font-bold text-foreground' : ''}`}>{folder.name}</span>
              </div>

              {/* If this top folder has children, drop a vertical tree from it */}
              {isOpen && folder.children && folder.children.length > 0 && (
                <div className="w-full mt-1 ml-[60px] relative animate-in slide-in-from-top-4 fade-in duration-300" onClick={e => e.stopPropagation()}> 
                  {/* Stem connecting folder to the tree */}
                  <div className="absolute top-[-4px] left-[0px] w-[1px] h-4 bg-border" />
                  <VerticalTree nodes={folder.children} />
                </div>
              )}
            </div>
          )})}

        </div>
        
        {/* Aesthetic footer branding */}
        <div className="mt-20 pt-8 w-full border-t border-border flex justify-center">
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30 uppercase">Deliverable Asset Structure</span>
        </div>

      </div>
    </div>
  );
}
