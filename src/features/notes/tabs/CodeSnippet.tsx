import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/vs2015.min.css";
// import "highlight.js/styles/vs.min.css";
import { createEffect } from "solid-js";

hljs.registerLanguage("javascript", javascript);

const CodeSnippet = ({code}: {code: string}) => {
    let codeBlock: HTMLElement | undefined;
    createEffect(() => {
        hljs.highlightElement(codeBlock!);;
    });
    return (
        <pre class="flex-1 min-w-0">
            <code ref={codeBlock} class="javascript text-sm rounded-md !bg-black !p-0 mt-2">
                {code}
            </code>
        </pre>
    );
};

export default CodeSnippet;