import { Component } from "solid-js";
import CodeSnippet from "./CodeSnippet";

type Props = { title: string }

const NoteSection: Component<Props> = ({ title }) => {
    return (
        <div class="border-gray-600 border-2 rounded-md px-2 pb-2 py-1" contentEditable>
            <h3 class=" text-lg font-medium">{title}</h3>
            <div class="my-1 h-[1px] bg-gray-600 mr-8" />
            <p class="text-sm">In C++, anonymous functions are created using lambda expressions, which were introduced in C++11. Lambda expressions allow you to define functions inline, without the need for a separate function declaration. Here's a summary of key points related to anonymous functions (lambda expressions) in C++</p>
            <div class="flex gap-4">
                <CodeSnippet code='const soup = () => console.log("soup")' />
                <CodeSnippet code='const soup = () => console.log("soup")' />
                <CodeSnippet code='const soup = () => console.log("soup")' />
            </div>
        </div>
    );
};

export default NoteSection