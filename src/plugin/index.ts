import type { App } from "vue";
import { TabFloat, TabFloatGroup, TabsFloatContent, TabsFloatWrapper } from "../components/VueTailwindFloatTabs/index";
import { TabOutline, TabGroupOutline, TabsContentOutline, TabsWrapperOutline } from "../components/VueTailwindOutlineTabs/index";
export default {
    install: (app: App, options: any) => {
        app.component(TabFloat.name, TabFloat);
        app.component(TabFloatGroup.name, TabFloatGroup);
        app.component(TabsFloatContent.name, TabsFloatContent);
        app.component(TabsFloatWrapper.name, TabsFloatWrapper);
        app.component(TabOutline.name, TabOutline);
        app.component(TabGroupOutline.name, TabGroupOutline);
        app.component(TabsContentOutline.name, TabsContentOutline);
        app.component(TabsWrapperOutline.name, TabsWrapperOutline)
    }
}