import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import CardKegiatan from "./CardKegiatan";
import jurusan1 from "./../asset/jurusan1.jpg"
import jurusan2 from "./../asset/jurusan2.jpg"
import jurusan3 from "./../asset/jurusan3.jpg"
import kegiatan1 from "./../asset/kegiatan1.jpg"
import kegiatan2 from "./../asset/kegiatan2.jpg"
import kegiatan3 from "./../asset/kegiatan3.jpg"
import kegiatan4 from "./../asset/kegiatan4.jpg"


const MainContent = ()=>{
    return(
        <div>
        <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={jurusan1} jurusan ="Teknik Jaringan Komputer" deskripsi="ini merupakan salah satu jurusan ternama dalam negeri ini yakni TKJ"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={jurusan2} jurusan ="Teknik Kendaraan Ringan" deskripsi="ini merupakan salah satu jurusan ternama dalam negeri ini yakni TKR"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={jurusan3} jurusan ="Akuntasi dan Perkantoran" deskripsi="ini merupakan salah satu jurusan ternama dalam negeri ini yakni AP"/>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-6 my-3">
                        <CardKegiatan image={kegiatan1}/>
                    </div>
                    <div className="col-6 my-3">
                        <CardKegiatan image={kegiatan2}/>
                    </div>
                    <div className="col-6 my-3">
                        <CardKegiatan image={kegiatan3}/>
                    </div>
                    <div className="col-6 my-3">
                        <CardKegiatan image={kegiatan4}/>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MainContent;