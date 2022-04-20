const app = new Vue({
            el: '#root',
            data: {
                message: 'Hello World!',
                img: "https://unsplash.it/600/400?image=278",
            },
            methods: {
                changeImage() {
                    this.img = `https://unsplash.it/600/400?image=${Math.floor(Math.random() * 300)}`;
        }
    }
})