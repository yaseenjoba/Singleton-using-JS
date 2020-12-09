class ThemeSettings{
    constructor(){
        if(ThemeSettings.instance instanceof ThemeSettings){
            return ThemeSettings.instance;
        }
        this.font = "Arial";
        this.color ="black";
        this.layout = "UD";
        ThemeSettings.instance = this;
    };

}
let theme1 = new ThemeSettings();
let theme2 = new ThemeSettings();

document.getElementById("print").innerHTML = (theme1===theme2);