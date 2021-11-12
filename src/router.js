class Router {
    /**
     * app = 어디에 그려질지 ?
     * routes = 어떤 경로로왔을 때 어떤 컴포넌트가 그려질지 ?
     */
    constructor({ app, routes }) {  
       this.app = app
       this.routes = routes

       // 최초에 한 번 그린다 ..!
       this.render()
       this.componentBindEvent()
    }

    componentBindEvent() {
        window.onhashchange = () => {
            this.render()
        }
    }

    render() {
        const path = window.location.hash.replace('#', '/') || '/'

        const Component = this.routes[path]

        if (!Component) {
            window.alert('정의되지 않은 페이지입니다.')
            
            window.history.back()
        }

        if (Component) {
            this.app.innerHTML = new Component().render()
        }
    }
}

export default Router