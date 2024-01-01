import { Component } from "solid-js";

const MainNavbar: Component<{}> = ({ }) => {

    return (
        <nav class="fixed bottom-4 w-[calc(100%-2rem)] left-1/2 -translate-x-1/2 h-[70px] bg-white/50 backdrop-blur-sm 
            rounded-xl customShadow">
            <ul class="flex gap-6">
                <li>notes</li>
                <li>images</li>
                <li>fonts</li>
                <li>svgs</li>
                <li>todos</li>
                <li>open project</li>
                <li>create new - configure template</li>
                <li>components??</li>
                <li>formbuilder?</li>
                <li>api endpoint</li>
                <li>settings</li>
                <li>dark mode toggle</li>
                <li>open copyPaste window</li>
            </ul>
        </nav>
        // <nav class="fixed right-4 h-[calc(100%-2rem)] top-1/2 -translate-y-1/2 w-[70px] bg-white/50 backdrop-blur-sm 
        //     rounded-lg customShadow">

        // </nav>
    );
};

export default MainNavbar