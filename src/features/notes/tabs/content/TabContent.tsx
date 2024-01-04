import { Component } from "solid-js";
import NoteSection from "../NoteSection";
// import CodeSnippet from "../CodeSnippet";

const TabContent: Component<{}> = () => {

    return (
        <div class="flex flex-col px-4 pb-32 gap-4 flex-1 bg-black pt-4 border-x-2 border-gray-600 text-white">
            <NoteSection title="Anonymous functions" />
            <div class="border-gray-600 border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                <h3 class="font-medium text-lg">Pointers</h3>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">summary</h4>
                <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit, distinctio doloribus esse excepturi soluta voluptates placeat tempore provident voluptatibus, quam atque laudantium! Nihil quia eaque expedita nobis laborum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere inventore doloribus totam explicabo. Vitae error, nulla, cupiditate et velit suscipit, praesentium doloribus molestiae necessitatibus voluptatem nisi placeat perspiciatis sapiente.</p>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">array pointers</h4>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem odit cumque voluptatum mollitia iusto eos quaerat similique eligendi recusandae, autem magni nesciunt ad totam tempore tempora, voluptas non neque?</p>
            </div>
            <div class="border-gray-600 border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                <h3 class=" text-lg font-medium">Anonymous functions</h3>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi?</p>
                {/* <CodeSnippet code='const javascript = "working?"' /> */}
            </div>
            <div class="border-gray-600 border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                <h3 class=" text-lg font-medium">Anonymous functions</h3>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi?</p>
            </div>
            <div class="border-gray-600 border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                <h3 class="font-medium text-lg">Pointers</h3>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">summary</h4>
                <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit, distinctio doloribus esse excepturi soluta voluptates placeat tempore provident voluptatibus, quam atque laudantium! Nihil quia eaque expedita nobis laborum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere inventore doloribus totam explicabo. Vitae error, nulla, cupiditate et velit suscipit, praesentium doloribus molestiae necessitatibus voluptatem nisi placeat perspiciatis sapiente.</p>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">array pointers</h4>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem odit cumque voluptatum mollitia iusto eos quaerat similique eligendi recusandae, autem magni nesciunt ad totam tempore tempora, voluptas non neque?</p>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">array pointers</h4>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem odit cumque voluptatum mollitia iusto eos quaerat similique eligendi recusandae, autem magni nesciunt ad totam tempore tempora, voluptas non neque?</p>
                <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                <h4 class="font-medium">array pointers</h4>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem odit cumque voluptatum mollitia iusto eos quaerat similique eligendi recusandae, autem magni nesciunt ad totam tempore tempora, voluptas non neque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cum incidunt esse, excepturi temporibus, suscipit ipsa magni aliquam reprehenderit exercitationem saepe, asperiores explicabo ad! Deserunt porro ea ratione quaerat laudantium.</p>
            </div>
        </div>
    );
};

export default TabContent;


