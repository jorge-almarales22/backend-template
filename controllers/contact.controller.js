import sgMail from "../services/sendgrid.js";

export const getEmail = async(req, res) => {

    const { email, name, message, sandbox_mode = false } = req.body;

    const msg = {
        to: "jorgealmarales22@gmail.com",
        subject: "Formulario de contacto de mi página web",
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        from: "jalmarales@unicesar.edu.co",
        mail_settings: {
            sandbox_mode: {
                enable: sandbox_mode
            }
        }
    }

    try {
        await sgMail.send(msg)        
    } catch (error) {
        return res.status(500).json({status: false, msg: error.message})
    }

    res.status(200).json({status: true, msg: "Email enviado"})

}

export const pong = (req, res) => {
    res.json({msg: "pong"})
}