
import React, { useEffect, useRef } from 'react';

// NOTE: For a local React project, run: npm install highlight.js
// Then uncomment the imports below and remove the window usage.
// import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if hljs is available (via CDN in preview or import in local)
    const hljs = (window as any).hljs; 
    
    if (codeRef.current && hljs) {
      codeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="relative group rounded-md overflow-hidden bg-[#282c34] text-sm">
      <pre className="m-0 p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language} font-mono text-gray-200`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
