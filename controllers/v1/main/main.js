const mainfunc = async (req, res, next) => {
    try {
        res.render("index.ejs")
    } catch (error) {
      next(error);
    }
  };

module.exports={mainfunc};