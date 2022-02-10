const contVideos = document.getElementById('contVideos')

async function getVideos (){
    try{
        const resp = await fetch('http://localhost:4000/videos')
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

async function pintarVideos() {
    const data = await getVideos()
    data.forEach((videos)=> {
        
        const { name, publisher, views, date, poster } = video;

        contVideos.innerHTML +=`
        <div class="contVideo">
                <img class="imgPortada" src="${poster}" alt="...">
                <!-- <p class="TextMinutos">13:55</p> -->
                <div class="contInfo">
                    <img class="avatar" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="..."
                    <div class="contDescription">
                        <h2 class ="tittleVideo">${name}</h2>
                        <h4 class ="tittleAutor">${publisher}</h2>
                        <h4 class ="views">${views} vistas - ${date}</h2>
                </div>
            </div>            
        </div>
    `
    });
}

pintarVideos