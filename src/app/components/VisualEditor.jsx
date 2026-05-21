"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const isLocalEnv =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.startsWith("192.168."));

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function rgbToHex(rgb) {
  if (!rgb || rgb === "transparent" || rgb === "rgba(0, 0, 0, 0)") return "#ffffff";
  const m = rgb.match(/\d+/g);
  if (!m) return "#ffffff";
  return (
    "#" +
    m.slice(0, 3)
      .map((x) => parseInt(x).toString(16).padStart(2, "0"))
      .join("")
  );
}

function getStyle(el, prop) {
  if (!el) return "";
  const inline = el.style[prop];
  if (inline) return inline;
  return window.getComputedStyle(el)[prop] || "";
}

// ─── Unit Parsing Helper ──────────────────────────────────────────

function parseUnitValue(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return { num: 0, unit: "" };
  const unit = val.replace(/[0-9.-]/g, "").trim();
  return { num, unit };
}

// ─── Sub-components ───────────────────────────────────────────────

function Row({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#94a3b8] px-1">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder }) {
  const onKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const { num, unit } = parseUnitValue(value || (placeholder?.includes("px") ? "0px" : "0"));
      const step = e.shiftKey ? 10 : 1;
      const direction = e.key === "ArrowUp" ? 1 : -1;
      
      // Precision handling for decimals (e.g. tracking)
      const isDecimal = value?.includes(".") || unit === "em" || unit === "rem";
      const nextNum = isDecimal 
        ? parseFloat((num + direction * (e.shiftKey ? 1 : 0.1)).toFixed(2))
        : num + direction * step;
        
      onChange(`${nextNum}${unit}`);
    }
  };

  return (
    <Row label={label}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full h-8 px-3 text-[11px] rounded-lg border border-slate-100 bg-slate-50/50 text-slate-800 outline-none focus:border-indigo-500/50 focus:bg-white transition-all placeholder:text-slate-300"
      />
    </Row>
  );
}

function ColorInput({ label, value, onChange }) {
  const hex = rgbToHex(value);
  return (
    <Row label={label}>
      <div className="flex items-center gap-2 w-full">
        <div className="relative w-8 h-8 rounded-lg border border-slate-100 overflow-hidden shrink-0 shadow-sm">
          <input
            type="color"
            value={hex}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-[-10px] w-[200%] h-[200%] cursor-pointer p-0 m-0 bg-transparent outline-none"
          />
        </div>
        <input
          type="text"
          value={hex}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 h-8 px-3 text-[11px] font-mono rounded-lg border border-slate-100 bg-slate-50/50 text-slate-800 outline-none focus:border-indigo-500/50 focus:bg-white transition-all min-w-0"
        />
      </div>
    </Row>
  );
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <Row label={label}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-8 px-2.5 text-[11px] rounded-lg border border-slate-100 bg-slate-50/50 text-slate-800 outline-none focus:border-indigo-500/50 focus:bg-white transition-all appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '12px' }}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </Row>
  );
}

function Section({ title, id, open, onToggle, children }) {
  return (
    <div className="w-full border border-slate-100 rounded-lg overflow-hidden mb-2 bg-white/50">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50/80 transition-colors"
      >
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
            <span className="text-[10px] font-black uppercase tracking-[1px] text-slate-400">{title}</span>
        </div>
        <span className="text-[10px] text-slate-300 font-bold">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <div className="px-3 py-4 bg-white border-t border-slate-50 flex flex-col gap-4">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────

const VisualEditor = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [editingText, setEditingText] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tick, setTick] = useState(0); 
  const [pos, setPos] = useState({ x: window.innerWidth - 300, y: 100 });
  const [sections, setSections] = useState({
    text: false,
    typography: false,
    spacing: false,
    appearance: false,
    layout: false,
  });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const panelRef = useRef(null);
  const prevSelected = useRef(null);

  // ── Keyboard Shortcuts ──
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey && e.shiftKey && e.code === "KeyE") {
        e.preventDefault();
        setVisible((v) => !v);
      }
      if (e.key === "Escape") {
        if (editingText && selected) {
          selected.contentEditable = "false";
          selected.style.outline = "2px solid #6366f1";
          selected.style.outlineOffset = "2px";
          setEditingText(false);
        } else {
          setVisible(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [editingText, selected]);

  // ── Cleanup on hide ──
  useEffect(() => {
    if (!visible) {
      if (prevSelected.current) {
        prevSelected.current.style.outline = "";
        prevSelected.current.style.outlineOffset = "";
        prevSelected.current.contentEditable = "false";
      }
      setSelected(null);
      setHovered(null);
      setEditingText(false);
    }
  }, [visible]);

  // Handle constraints
  useEffect(() => {
    if (visible) {
        const handleResize = () => {
            setPos(prev => ({
                x: Math.min(prev.x, window.innerWidth - 280),
                y: Math.min(prev.y, window.innerHeight - 100)
            }));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
  }, [visible]);

  // ── Selection + Hover ──
  useEffect(() => {
    if (!visible) return;
  
    // Add active class to body for scrollbar hiding (optional but good idea if needed)
    document.body.classList.add("visual-editor-active");

    const onMouseOver = (e) => {
      if (e.target.closest("#ve-panel")) return;
      setHovered(e.target);
    };

    const onMouseOut = (e) => {
      if (e.target.closest("#ve-panel")) return;
      setHovered(null);
    };

    const onClick = (e) => {
      if (e.target.closest("#ve-panel")) return;
      
      const el = e.target;
      if (el === selected) return; 

      e.preventDefault();
      e.stopPropagation();

      // deselect prev
      if (prevSelected.current) {
        prevSelected.current.style.outline = "";
        prevSelected.current.style.outlineOffset = "";
        prevSelected.current.contentEditable = "false";
        setEditingText(false);
      }

      prevSelected.current = el;
      setSelected(el);
      setTick((t) => t + 1);
      el.style.outline = "2px solid #6366f1";
      el.style.outlineOffset = "2px";
    };

    const onDblClick = (e) => {
      if (e.target.closest("#ve-panel")) return;
      const el = e.target;
      if (el === selected) {
        e.preventDefault();
        e.stopPropagation();
        el.contentEditable = "true";
        el.focus();
        setEditingText(true);
        el.style.outline = "2px dashed #6366f1";
        el.style.outlineOffset = "4px";
      }
    };

    const onBlurDoc = (e) => {
      if (editingText && selected && e.target === selected) {
        selected.contentEditable = "false";
        selected.style.outline = "2px solid #6366f1";
        selected.style.outlineOffset = "2px";
        setEditingText(false);
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick, true);
    document.addEventListener("dblclick", onDblClick, true);
    document.addEventListener("blur", onBlurDoc, true);

    return () => {
      document.body.classList.remove("visual-editor-active");
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("dblclick", onDblClick, true);
      document.removeEventListener("blur", onBlurDoc, true);
    };
  }, [visible, selected, editingText]);

  // ── Drag ──
  const onHeaderMouseDown = (e) => {
    isDragging.current = true;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    const onMove = (e) => {
      if (!isDragging.current) return;
      setPos({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y });
    };
    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  // ── Style helpers ──
  const S = useCallback((prop) => getStyle(selected, prop), [selected, tick]);

  const setS = (prop, val) => {
    if (!selected) return;
    selected.style[prop] = val;
    setTick((t) => t + 1);
  };

  const toggleSection = (id) =>
    setSections((prev) => ({ ...prev, [id]: !prev[id] }));

  // ── Hover rect ──
  const hoverRect = hovered && selected !== hovered ? hovered.getBoundingClientRect() : null;

  // ── Tag label ──
  const tagLabel = selected
    ? `${selected.tagName.toLowerCase()}${selected.id ? `#${selected.id}` : selected.className && typeof selected.className === "string" ? `.${selected.className.trim().split(/\s+/)[0]}` : ""}`
    : "";

  const handleCopy = async () => {
    if (!selected) return;
    const style = selected.getAttribute('style') || "";
    if (!style) return;
    
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(style);
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = style;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error("Copy failed", err);
    }
  };

  if (!isLocalEnv || !visible) return null;

  return createPortal(
    <div
      id="ve-panel"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 999999, fontFamily: '"DM Sans", sans-serif' }}
    >
      {/* Hover outline */}
      {hoverRect && (
        <div
          className="pointer-events-none fixed transition-all duration-150"
          style={{
            top: hoverRect.top + window.scrollY,
            left: hoverRect.left + window.scrollX,
            width: hoverRect.width,
            height: hoverRect.height,
            outline: "2px solid rgba(99, 102, 241, 0.4)",
            outlineOffset: "2px",
            zIndex: 999998,
          }}
        />
      )}

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed bg-white/95 backdrop-blur-2xl rounded-lg flex flex-col pointer-events-auto overflow-hidden border border-slate-200/50"
        style={{
          top: pos.y,
          left: pos.x,
          width: 280,
          maxWidth: 'calc(100vw - 40px)',
          minWidth: 200,
          minHeight: 320,
          maxHeight: "85vh",
          resize: "both",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Header (Studio Style) */}
        <div
          onMouseDown={onHeaderMouseDown}
          className="shrink-0 flex items-center justify-between px-5 cursor-move bg-slate-50/80 border-b border-slate-100 transition-colors hover:bg-slate-100/80"
          style={{ height: 44 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/30" />
            <span className="text-[12px] font-black text-slate-800 tracking-tight uppercase">
              STUDIO
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setVisible(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-200/50 hover:bg-white transition-all text-slate-500 hover:text-indigo-600 shadow-sm border border-transparent hover:border-slate-100"
            >
              <span className="text-[10px]">✕</span>
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden px-3.5 py-4 space-y-2 scrollbar-thin"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#e2e8f0 transparent" }}
        >
          {/* Element badge (Selection Info) */}
          {selected ? (
            <div className="mb-4 pt-4 pb-4 px-4 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl relative w-full overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-[11px] font-black text-indigo-600 truncate uppercase tracking-[1px]">{tagLabel}</span>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-100/80 rounded-full shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span className="text-[8px] text-indigo-700 font-black uppercase tracking-widest">Active</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-1.5 items-center overflow-x-auto scrollbar-hide pb-1">
                <button
                  onClick={() => {
                      if (selected?.parentElement) {
                        const p = selected.parentElement;
                        prevSelected.current.style.outline = "";
                        prevSelected.current.style.outlineOffset = "";
                        prevSelected.current = p;
                        setSelected(p);
                        setTick((t) => t + 1);
                        p.style.outline = "2px solid #6366f1";
                        p.style.outlineOffset = "2px";
                      }
                  }}
                  className="whitespace-nowrap h-8 px-2.5 bg-white border border-slate-100 rounded-full text-[9px] font-bold text-slate-600 hover:text-slate-900 transition-all shadow-sm active:scale-95 flex items-center gap-1"
                >
                  <span className="text-[10px] mb-0.5">↑</span> Parent
                </button>
                <button
                  onClick={handleCopy}
                  className={cn(
                    "whitespace-nowrap h-8 px-2.5 transition-all rounded-full text-[9px] font-bold shadow-sm border active:scale-95",
                    copied ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-slate-100 text-slate-600 hover:text-slate-900"
                  )}
                >
                  {copied ? "Copied!" : "Copy CSS"}
                </button>
                <button
                  onClick={() => {
                    selected.removeAttribute("style");
                    selected.style.outline = "2px solid #6366f1";
                    selected.style.outlineOffset = "2px";
                    setTick((t) => t + 1);
                  }}
                  className="whitespace-nowrap h-8 px-2.5 bg-white border border-slate-100 rounded-full text-[9px] font-bold text-rose-500 hover:bg-rose-50 transition-all shadow-sm active:scale-95"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-4 py-8 px-4 border-2 border-dashed border-slate-100 rounded-lg text-center flex flex-col items-center gap-2 opacity-60">
                <MousePointer2 size={24} className="text-slate-300" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select an element</p>
            </div>
          )}

          {/* ── Sections ── */}

          {selected && (
            <div className="space-y-1 w-full overflow-hidden pb-4">
              <Section id="text" title="Content" open={sections.text} onToggle={toggleSection}>
                <textarea
                  value={selected.innerText || ""}
                  onChange={(e) => {
                    selected.innerText = e.target.value;
                    setTick((t) => t + 1);
                  }}
                  rows={3}
                  className="w-full px-3 py-2.5 text-[11px] rounded-lg border border-slate-100 bg-slate-50/50 text-slate-800 outline-none focus:border-indigo-500/50 focus:bg-white resize-none leading-relaxed transition-all"
                  placeholder="Element text..."
                />
              </Section>

              <Section id="typography" title="Typography" open={sections.typography} onToggle={toggleSection}>
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  <TextInput label="Size" value={S("fontSize")} onChange={(v) => setS("fontSize", v)} placeholder="16px" />
                  <TextInput label="Weight" value={S("fontWeight")} onChange={(v) => setS("fontWeight", v)} placeholder="400" />
                  <TextInput label="Spacing" value={S("letterSpacing")} onChange={(v) => setS("letterSpacing", v)} placeholder="0px" />
                  <TextInput label="L-Height" value={S("lineHeight")} onChange={(v) => setS("lineHeight", v)} placeholder="1.5" />
                  <div className="col-span-2">
                    <ColorInput label="Text Color" value={S("color")} onChange={(v) => setS("color", v)} />
                  </div>
                </div>
              </Section>

              <Section id="spacing" title="Spacing" open={sections.spacing} onToggle={toggleSection}>
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  <TextInput label="Padding" value={S("padding")} onChange={(v) => setS("padding", v)} placeholder="12px" />
                  <TextInput label="Margin" value={S("margin")} onChange={(v) => setS("margin", v)} placeholder="0 auto" />
                  <TextInput label="Width" value={S("width")} onChange={(v) => setS("width", v)} placeholder="100%" />
                  <TextInput label="Height" value={S("height")} onChange={(v) => setS("height", v)} placeholder="auto" />
                </div>
              </Section>

              <Section id="appearance" title="Visuals" open={sections.appearance} onToggle={toggleSection}>
                <div className="space-y-3">
                    <ColorInput label="Background" value={S("backgroundColor")} onChange={(v) => setS("backgroundColor", v)} />
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                        <TextInput label="Radius" value={S("borderRadius")} onChange={(v) => setS("borderRadius", v)} placeholder="8px" />
                        <TextInput label="Opacity" value={S("opacity")} onChange={(v) => setS("opacity", v)} placeholder="1" />
                    </div>
                    <TextInput label="Border" value={S("border")} onChange={(v) => setS("border", v)} placeholder="1px solid #eee" />
                    <TextInput label="Shadow" value={S("boxShadow")} onChange={(v) => setS("boxShadow", v)} placeholder="0 4px 12px..." />
                </div>
              </Section>

              <Section id="layout" title="Structure" open={sections.layout} onToggle={toggleSection}>
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    <SelectInput
                        label="Display"
                        value={S("display")}
                        onChange={(v) => setS("display", v)}
                        options={["block", "flex", "grid", "inline", "none"]}
                    />
                    <SelectInput
                        label="Position"
                        value={S("position")}
                        onChange={(v) => setS("position", v)}
                        options={["static", "relative", "absolute", "fixed"]}
                    />
                </div>
              </Section>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 py-3 text-center border-t border-slate-50 bg-slate-50/30">
          <p className="text-[9px] text-slate-300 uppercase tracking-widest font-black">
            Studio Local Build v3.0
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');
        #ve-panel *::-webkit-scrollbar { width: 3px; }
        #ve-panel *::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        #ve-panel input[type=range] { -webkit-appearance: none; background: transparent; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>,
    document.body
  );
};

const MousePointer2 = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/>
    </svg>
);

export default VisualEditor;
