import CodeSnippet from "../CodeSnippet";


const Tab = () => {
    return (
        <div class="flex-1 h-full flex flex-col pt-1">
            <div class="border-black border-2 p-2 text-sm">C++</div>
            <div class="flex flex-col px-2 pb-4 gap-4 overflow-scroll flex-1 bg-blue-300 pt-2 border-x-2 border-black">
                <div class="border-black border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                    <h3 class=" text-lg font-medium">Anonymous functions</h3>
                    <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                    <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi?</p>
                </div>
                <div class="border-black border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                    <h3 class="font-medium text-lg">Pointers</h3>
                    <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                    <h4 class="font-medium">summary</h4>
                    <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit, distinctio doloribus esse excepturi soluta voluptates placeat tempore provident voluptatibus, quam atque laudantium! Nihil quia eaque expedita nobis laborum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere inventore doloribus totam explicabo. Vitae error, nulla, cupiditate et velit suscipit, praesentium doloribus molestiae necessitatibus voluptatem nisi placeat perspiciatis sapiente.</p>
                    <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                    <h4 class="font-medium">array pointers</h4>
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem odit cumque voluptatum mollitia iusto eos quaerat similique eligendi recusandae, autem magni nesciunt ad totam tempore tempora, voluptas non neque?</p>
                </div>

                <div class="border-black border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                    <h3 class=" text-lg font-medium">Anonymous functions</h3>
                    <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                    <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi?</p>
                    <CodeSnippet />
                </div>
                <div class="border-black border-2 rounded-md px-2 pb-2 py-1" contentEditable>
                    <h3 class=" text-lg font-medium">Anonymous functions</h3>
                    <div class="my-1 h-[1px] bg-gray-600 mr-8" />
                    <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et eius, expedita, repellat recusandae vel consequatur dolores dolorum nulla corrupti natus, iusto odit tenetur! Ipsum officiis natus unde dolorum modi?</p>
                </div>
                <div class="border-black border-2 rounded-md px-2 pb-2 py-1" contentEditable>
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
        </div>
    );
};

export default Tab;