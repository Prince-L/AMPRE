// const Home = {
//     template: `<div>111111111</div>`
// }
//
// const Serve = {
//     template: `<div>22222</div>`
// }
// const Team = {
//     template: `<div>3333</div>`
// }
// const News = {
//     template: `<div>4444</div>`
// }
// const About = {
//     template: `<div>555</div>`
// }
// const Us = {
//     template: `<div>666</div>`
// }
const Home = {
    template: "#h"
}
const Serve = {
    template: "#s"
}
const Team = {
    template: "#t"
}
const News = {
    template: "#n"
}
const About = {
    template: "#a"
}
const Us = {
    template: "#u"
}

//2.定义路由 (每个路由应该映射一个组件)
const routes = [{
        path: "/home",
        component: Home
    },
    {
        path: "/serve",
        component: Serve
    },
    {
        path: "/team",
        component: Team
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/us",
        component: Us
    }
]

//3.创建router实例 ，然后传‘routes’ 配置
const router = new VueRouter({
    linkActiveClass: 'active',
    /*mode:"history",*/
    routes // 相当于   routes:routes
})

//4.创建和挂载根实例，从而让整个应用都有路由功能
const vm = new Vue({
    router   //相当于 router:router
}).$mount(".topNav")


$('.navText li').click(function(){
    $('.navText li').eq($(this).index()).addClass('active').siblings().removeClass('active')
})

// $('.navText li').mouseover(function(){
//     $(this).css({
//
//     })
// })

$('.navText li').hover(function(){
    $(this).children('i').css({
        'width':'200px',
        'transform':"scaleX(2)"
    })
})
































