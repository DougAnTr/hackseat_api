import User from "../models/User";

class Login {
  async index(req, res) {
    const user = await User.findOne({
      where: { email: req.body.email },
      attributes: ["id", "name", "email", "user_type"]
    });

    if (!user) {
      return res.status(401).json({ error: "User not found." });
    }

    res.json(user);
  }
}

export default new Login();
