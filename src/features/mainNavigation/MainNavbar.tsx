import { Component } from "solid-js";

const MainNavbar: Component<{}> = ({ }) => {

    return (
        <nav class="fixed bottom-4 w-[calc(100%-2rem)] left-1/2 -translate-x-1/2 h-[70px] bg-white/50 backdrop-blur-sm 
            rounded-xl customShadow">
            <ul class="flex gap-6">
                <li><a class="text-blue-600" href="/">notes</a></li>
                <li><a class="text-blue-600" href="/components">components</a></li>
                <li><a class="text-blue-600" href="/images">images</a></li>
                <li><a class="text-blue-600" href="/fonts">fonts</a></li>
                <li><a class="text-blue-600" href="/svgs">svgs</a></li>
                <li><a class="text-blue-600" href="/todos">todos</a></li>
                <li><a class="text-blue-600" href="/projects">projects</a></li>
                <li>create new - configure template</li>
                <li>formbuilder?</li>
                <li>api endpoint</li>
                <li><a class="text-blue-600" href="/settings">settings</a></li>
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