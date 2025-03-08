"use client";
import {
  IconCheck,
  IconCopy,
  IconArrowsMaximize,
  IconArrowsMinimize,
} from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

// Mobile breakpoint - smaller screens will default to horizontal scrolling
const MOBILE_BREAKPOINT = 640; // 640px matches Tailwind's 'sm:' breakpoint

export const CodeBlock = ({
  language,
  filename = "",
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isWrapped, setIsWrapped] = useState(false); // Default to horizontal scroll
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const tabsExist = tabs.length > 0;

  // Check screen size and set appropriate defaults
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      // Always default to scroll mode on mobile and small screens
      setIsWrapped(!mobile);
    };

    // Check on mount
    checkScreenSize();

    // Also check on resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // Clear any previous timeout before setting a new one
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    }
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  // Determine if the code is long enough to warrant wrapping
  const longCode =
    activeCode && activeCode.split("\n").some((line) => line.length > 80);

  return (
    <div className="relative w-full rounded-lg bg-slate-900 dark:bg-slate-950 my-6 overflow-hidden border border-slate-800">
      <div className="flex flex-col">
        {tabsExist && (
          <div className="flex overflow-x-auto border-b border-slate-700 scrollbar-thin">
            {tabs.map((tab, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2 text-xs transition-colors font-sans whitespace-nowrap ${
                  activeTab === index
                    ? "text-white bg-slate-800"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center px-4 py-2 text-xs text-zinc-400 border-b border-slate-800">
          {/* Left side - filename and language */}
          <div className="flex items-center">
            {filename && <div className="mr-2">{filename}</div>}
            <div>{activeLanguage}</div>
          </div>

          {/* Right side - toggle wrap and copy buttons */}
          <div className="flex items-center gap-2">
            {/* Only show the toggle if code is long enough to need it and not on mobile */}
            {longCode && !isMobile && (
              <button
                onClick={() => setIsWrapped(!isWrapped)}
                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors rounded p-1 hover:bg-slate-800"
                aria-label={
                  isWrapped ? "Disable word wrap" : "Enable word wrap"
                }
                title={isWrapped ? "Disable word wrap" : "Enable word wrap"}
              >
                {isWrapped ? (
                  <IconArrowsMaximize size={14} />
                ) : (
                  <IconArrowsMinimize size={14} />
                )}
                <span className="hidden sm:inline">
                  {isWrapped ? "Unwrap" : "Wrap"}
                </span>
              </button>
            )}

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors rounded p-1 hover:bg-slate-800"
              aria-label="Copy code to clipboard"
              title="Copy code"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              <span className="hidden sm:inline">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view: No line numbers, scrollable */}
      {isMobile ? (
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={activeLanguage}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.8rem", // Slightly smaller on mobile
            }}
            showLineNumbers={false} // No line numbers on mobile
            wrapLines={false}
            wrapLongLines={false}
            codeTagProps={{
              style: {
                fontFamily: "var(--font-geist-mono), monospace",
                whiteSpace: "pre",
              },
            }}
          >
            {String(activeCode)}
          </SyntaxHighlighter>
        </div>
      ) : (
        // Desktop view: Line numbers, toggleable wrapping
        <div className={`relative ${!isWrapped ? "overflow-x-auto" : ""}`}>
          <SyntaxHighlighter
            language={activeLanguage}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.875rem",
            }}
            wrapLines={true}
            wrapLongLines={isWrapped}
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: "2.5em",
              paddingRight: "1em",
              textAlign: "right",
              userSelect: "none",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              marginRight: "0.5em",
            }}
            lineProps={(lineNumber) => ({
              style: {
                backgroundColor: activeHighlightLines.includes(lineNumber)
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                display: "block",
                width: "100%",
              },
            })}
            codeTagProps={{
              style: {
                fontFamily: "var(--font-geist-mono), monospace",
                wordBreak: isWrapped ? "break-word" : "normal",
                whiteSpace: isWrapped ? "pre-wrap" : "pre",
              },
            }}
          >
            {String(activeCode)}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
