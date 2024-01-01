import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
// import "highlight.js/styles/vs2015.min.css";
import "highlight.js/styles/vs.min.css";
import { createEffect } from "solid-js";

hljs.registerLanguage("javascript", javascript);

const CodeSnippet = () => {
    let codeBlock: HTMLElement | undefined;
    createEffect(() => {
        hljs.highlightElement(codeBlock!);;
    });
    return (
        <pre>
            <code ref={codeBlock} class="javascript text-sm rounded-md !bg-blue-300 !p-0 mt-2">
                const javascript = "working?"
            </code>
        </pre>
    );
};

export default CodeSnippet;