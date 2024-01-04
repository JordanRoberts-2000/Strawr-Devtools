import { Component } from "solid-js";
import Tab from "../features/notes/tabs/Tab";

const NotesPage: Component<{}> = ({ }) => {
    return (
        <div class="w-full h-screen flex">
            <div class="w-[300px] h-full bg-black text-white">
                <ul>
                    <li>code</li>
                    <li>cycle through code?</li>
                    <li>compare code</li>
                    <li>copy code</li>
                    <li>code text size</li>
                    <li>cycle through notes eg: 1/8</li>
                    <li>read more</li>
                    <li>click to blur everything but</li>
                    <li>lists?</li>
                    <li>excalladraw</li>
                    <li>images</li>
                    <li>responsive design</li>
                </ul>
                <ul class="mt-8">
                    <li>tab:</li>
                    <li>close</li>
                    <li>go to - menu of sections</li>
                    <li>mouse pad shortcut to go up/down folder??</li>
                </ul>
            </div>
            <div class="flex-1 flex overflow-hidden">
                <Tab/>
                <Tab/>
                <Tab/>
            </div>
        </div>
    );
};

export default NotesPage