import User from "../models/User";
import Post from "../models/Post";
import PostExercise from "../models/PostExercise";
import PostCategory from "../models/PostCategory";
import PostDifficultyLevel from "../models/PostDifficultyLevel";
import ExerciseOption from "../models/ExerciseOption";

class PostController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const posts = await Post.findAll({
      order: ["createdAt"],
      attributes: ["title", "text"],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: "post_author",
          attributes: ["name"]
        },
        {
          model: PostCategory,
          as: "post_category",
          attributes: ["category"]
        },
        {
          model: PostDifficultyLevel,
          as: "post_difficulty",
          attributes: ["level"]
        }
      ]
    });

    res.json(posts);
  }

  async store(req, res) {
    try {
      const user = await User.findByPk(req.userID);

      if (user.user_type != 1) {
        return res
          .status(401)
          .json({ error: "Only developer can create posts." });
      }

      const { title, text, category, difficulty, exercises } = req.body;

      const { id: postID } = await Post.create({
        title,
        text,
        category,
        difficulty,
        author: req.userID
      });

      if (postID && exercises) {
        exercises.map(async exercise => {
          exercise.post = postID;

          const createdExercise = await PostExercise.create(exercise);

          if (createdExercise && exercise.options) {
            exercise.options.map(async option => {
              option.exercise = createdExercise.id;

              await ExerciseOption.create(option);
            });
          }
        });
      }

      return res.json({ message: "Post created successfully." });
    } catch (error) {
      return res.status(500).json({ error: "Internal error." });
    }
  }
}

export default new PostController();
