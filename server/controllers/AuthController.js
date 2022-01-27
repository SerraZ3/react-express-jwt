const jwt = require("../helpers/jwt");
const users = [
  {
    id: 1,
    email: "henrique@gmail.com",
    senha: "cuscuzétop",
  },
  {
    id: 2,
    email: "marcelo@gmail.com",
    senha: "gostadefarofa",
  },
  {
    id: 3,
    email: "altair@gmail.com",
    senha: "pizza",
  },
];
const AuthController = {
  login: (req, res) => {
    const { email, senha } = req.body;
    const user = users.find((user) => user.email === email);
    if (user && senha === user.senha) {
      const token = jwt.generateToken(user.id);
      return res.status(200).json({ token });
    }
    return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
  },
  checkLogin: (req, res) => {
    const { token } = req.body;
    try {
      const decoded = jwt.verifyToken(token);
      const { sub } = decoded;
      return res.status(200).json({ user: users[sub - 1] });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },
};
module.exports = AuthController;
