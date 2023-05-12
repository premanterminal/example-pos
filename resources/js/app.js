// import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import route from 'ziggy-js';

// Plugin
import { Notification } from 'notiwind';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { fab } from '@fortawesome/free-solid-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-solid-svg-icons';
library.add(far);

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue");
        return ( await pages[`./Pages/${name}.vue`]()).default;
    },
    setup({ el, App, props, plugin}) {
        createApp({ render: () => h(App, props) })
        .mixin({ methods: { route } })
        .use(plugin)
        .use(Notification)
        .component("font-awesome-icon", FontAwesomeIcon)
        .mount(el);
    }
});

InertiaProgress.init();