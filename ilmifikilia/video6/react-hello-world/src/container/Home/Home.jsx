import React, {Component} from "react";
import YtComp from "../../component/YtComp/YtComp";

class Home extends Component {
    render(){
        return(
            <div>
                <p>Ilmi Component</p>
                <hr/>
                <YtComp 
                    time="07.40"
                    title="Eijirou Kirishima"
                    desc="Pria berambut merah yang tamvan"
                    img="https://i.pinimg.com/originals/62/a4/af/62a4afcd2514d0441bceb5a824dd12a2.jpg"/>
                <YtComp 
                    time="08.02"
                    title="Katsuki Bakugou"
                    desc="Laki-laki yang suka meledak ledak"
                    img="https://vignette.wikia.nocookie.net/doblaje/images/c/c1/Katsuki_Bakugo.png/revision/latest?cb=20180127151128&path-prefix=es"/>
                <YtComp 
                    time="05.04"
                    title="Denki Kaminari"
                    desc="Pengendali petir yang Idiot"
                    img="https://stickytrigger.com/wp-content/uploads/2020/12/Denki-Kaminari2.jpg"/>
                <YtComp 
                    time="04.12"
                    title="Hanta Sero"
                    desc="Manusia solasi"
                    img="https://64.media.tumblr.com/e576cc0fff85848dda8f997c436a8e1c/78829c8231d5ee21-13/s1280x1920/ee92bbe2b42473a296c5d3a3ba4c4035f0ce4377.jpg"/>
            </div>
            
        )
    }
}

export default Home;