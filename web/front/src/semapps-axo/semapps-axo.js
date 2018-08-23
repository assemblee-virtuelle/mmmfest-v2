Polymer({
    is: 'semapps-axo',

    // Wait all HTML to be loaded.
    attached() {
        SemAppsCarto.ready(this.start.bind(this));
    },

    start(){
        //Lance la methode axoReady du map handler TODO: a transformer en observer
        this.domHost.axoReady();

        let zones = this.querySelectorAll('path');

        zones.forEach(element => {
            element.addEventListener('click', this.zoneClickHandler)
        });
    },

    zoneClickHandler(e){
        let zone = e.target.id;
        let uri = "";
        switch(zone){
            case 'orangerie-cour':
                uri = 'http://mmmfest.fr:9000/ldp/7593108505-4956513132'
            break;
            case 'camping':
                uri = 'http://mmmfest.fr:9000/ldp/2195514397-3841521013'
            break;
            case 'ptchateau':
                uri = 'http://mmmfest.fr:9000/ldp/9957842305-4672559670'
            break;
            case 'grchateau':
                uri = 'http://mmmfest.fr:9000/ldp/2530103351-1902985985'
            break;
            case 'cochets':
                uri = 'http://mmmfest.fr:9000/ldp/4625740610-8487523130'
            break;
        }
        semapps.scrollToContent();
        semapps.myRoute = "detail";
        semapps.goToPath('detail', {
            uri: window.encodeURIComponent(uri)
        });
    }


});