import TabContent from "./content/TabContent";
import TabTitle from "./content/TabTitle";

const Tab = () => {
    return (
        <div class="flex-1 min-w-0 h-full flex flex-col overflow-y-auto">
            <TabTitle/>
            <TabContent/>
        </div>
    );
};

export default Tab;