import { createRouter, createWebHistory } from 'vue-router'

// 컴포넌트
import Main from '@/components/Main'
import Sub1 from '@/components/Sub1'
import Sub2 from '@/components/Sub2'
import Sub3 from '@/components/Sub3'

// const routes = [
//     { path : "/", name : "MainPage", component : Main },
//     { path : "/sub1", name : "SubPage1", component : Sub1 },
//     { path : "/sub2", name : "SubPage2", component : Sub2 },
//     { path : "/sub3", name : "SubPage3", component : Sub3 }
// ]

const router = createRouter({
    mode: 'history',
    history : createWebHistory(),
    routes : [
        { path : "/", name : "MainPage", component : Main },
        { path : "/sub1", name : "SubPage1", component : Sub1 },
        { path : "/sub2", name : "SubPage2", component : Sub2 },
        { path : "/sub3", name : "SubPage3", component : Sub3 }
    ]
})

export default router;