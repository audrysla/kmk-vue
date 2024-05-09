import { createRouter, createWebHashHistory } from 'vue-router'

// 컴포넌트
import Main from '@/page/Main'
import Sub1 from '@/page/Sub1'
import Sub2 from '@/page/Sub2'
import Sub3 from '@/page/Sub3'
import Sub4 from '@/page/Sub4'
import Sub5 from '@/page/Sub5'

const router = createRouter({
    base: '/kmk-vue/',
    history : createWebHashHistory(),
    routes : [
        { path : "/", name : "MainPage", component : Main },
        { path : "/sub1", name : "SubPage1", component : Sub1 },
        { path : "/sub2", name : "SubPage2", component : Sub2 },
        { path : "/sub3", name : "SubPage3", component : Sub3 },
        { path : "/sub4", name : "SubPage4", component : Sub4 },
        { path : "/sub5", name : "SubPage5", component : Sub5 }
    ]
})

export default router;