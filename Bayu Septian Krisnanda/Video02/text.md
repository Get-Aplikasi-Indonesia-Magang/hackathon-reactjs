Pada video ke 2 melakuka pemrograman langsung mengenai ReactJS
# PAda step 1 membuat program text sederhana dengan HTML dan CSS
HTML : 
<div class="card">
<p class="title"> Bayu Septian Krisnanda</p>
<p> Mahasiswa</p>
</div>

<div class="card">
<p class="title"> Bayu Septian Krisnanda</p>
<p> Mahasiswa</p>
</div>

<div class="card">
<p class="title"> Bayu Septian Krisnanda</p>
<p> Mahasiswa</p>
</div>

CSS :
,card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  width:200px;
  box-shadow: 0px 2px 2px #ccc;
  display: inline-block;
  margin-right: 10px;
}
.title 
{
  font-weight: bold;
  font-size:18px;
  margin-bottom:8px;

}

p 
{
  margin:0px;
}

# Pada Step 2 Import library React untuk membaca komponen dan React-Dom untuk render komponen yang sudah dibuat. Karen menggunakan JS terbaru maka dibutuhkan Babel untuk membuat komponen JS bekerja pada website.

HTML :
<div id="root"></div>

JS :
const Card = (props) =>{
    return (
      <div class="card">
        <p class="title">{props.name}</p>
        <p>{props.job}</p>
      </div>
    )
  }
  
  const App = () => {
    return (
      <div>
        <Card name="Bayu Septian Krisnanda" job="Mahasiswa"/>
        <Card name="Bagusti Putra" job="Siswa"/>
        <Card name="Meisya Aditya"job="Karyawan"/>
      </div>
    )
  }
  
  ReactDOM.render(<App/>, document.querySelector("#root"))