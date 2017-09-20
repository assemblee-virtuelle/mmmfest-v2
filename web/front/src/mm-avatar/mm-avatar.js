Polymer({
  is: 'mm-avatar',
  properties: {
    image: String,
    uri: String,
    label: String
  },
    attached() {
        this.cutlabel =(this.label.length > 15)? gvc.capitalize(this.label,true).substr(0,10)+'...' : gvc.capitalize(this.label,true);
    },
  handleClickAvatar(e) {
    e.preventDefault();
    gvc.goToPath('detail', {
      uri: window.encodeURIComponent(e.currentTarget.getAttribute('rel'))
    });
  },
    showName(e){
      log(e.target);
  }
  });

