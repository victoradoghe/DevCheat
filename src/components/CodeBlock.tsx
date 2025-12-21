
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="relative group rounded-md overflow-hidden bg-[#282c34] text-sm">
      <pre className="m-0 p-4 overflow-x-auto custom-scrollbar">
        <code ref={codeRef} className={`language-${language} font-mono text-gray-200`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
