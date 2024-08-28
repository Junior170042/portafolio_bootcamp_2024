function getTemplateProject(data) {
    return `
    
         <div  class="container-card card-project animated__animated animate_slow">

            <div class="left">
                <div class="img-container">
                    <img
                        src="http://127.0.0.1:5500/${data.foto}"
                        alt="No image"
                    />
                </div>

                <div class="mobile">
                    <h3 class="title-content"> ${data.title} </h3>
                    <hr />
                    <div class="description">
                        <p >
                            ${data.description}
                        </p>
                    </div>

                </div>

                <div class="link_icon">
                     <a class="page" href="${data.url}" target="_blank"><i class="fa-brands fa-chrome"></i></a>
                     <a class="code" href="${data.code}" target="_blank"> <i class="fa-brands fa-github"></i> </a>
                </div> 

               

            </div>

            <div class="right">
                <h3 class="title-content">  ${data.title} </h3>
                <hr />
                <div class="description">
                    <p >
                        ${data.description}
                    </p>
                </div>

            </div>

        </div>
    
    `
}
