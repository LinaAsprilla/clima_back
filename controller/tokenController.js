const jwt = require("jsonwebtoken");

exports.crearToken = async (req, res) => {
  //extraer password
  const {password} = req.body;

  // Revisar el password
  if (password !== '1234') {
    return res.status(400).json({
      msg: "Contraseña incorrecta",
    });
  }

  // Si todo es correcto Crear y firmar el JWT
  const payload = {
    usuario: {
      name: "Lina Asprilla",
    },
  };

  // firmar el JWT
  jwt.sign(
    payload,
    process.env.SECRETA,
    {
      expiresIn: 360, // 6 minutos
    },
    (error, token) => {
      if (error) throw error;

      // Mensaje de confirmación
      res.json({ token });
    }
  );
};
