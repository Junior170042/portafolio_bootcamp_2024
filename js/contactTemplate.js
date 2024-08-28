const contactTemplate = `
     <div  class="forms animate__animated animate__slow">
        <h1>Contact me</h1>
        <div class="contact-form">
            <form id="send-message">
                <div class="form-control">
                    <input type="text" id="name" name="name"/>
                    <span class="name">Name</span>
                </div>
                <div class="form-control">
                    <input type="text" id="email" name="email" />
                    <span class="email">Email</span>
                </div>
                <div class="form-control">
                    <textarea name="message" id="message" cols="30" rows="10" ></textarea>
                    <span class="message">Message</span>
                </div>
                        
                <button type="submit" id="btn-message">Send message</button>
            </form>

            <div class="toast" id="toast-modal">
                <div class="toast-header">
                    <strong class="me-auto error "><i class="fa-solid fa-circle-exclamation"></i></strong>
                    <strong class="me-auto success "><i class="fa-solid fa-circle-check"></i></strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                    <p >Some text inside the toast body</p>
                </div>
            </div>

        </div>
    </div>

`