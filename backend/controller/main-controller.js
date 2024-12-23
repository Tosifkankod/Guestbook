import GuestEntry from "../Schema/guestEnty.js";

export const createEntry = async (req, res) => {
  try {
    const { Name, Comment, Email } = req.body;
    console.log(Name, Comment, Email);

    if (!Name || !Comment || !Email) {
      return res
        .status(400)
        .json({ success: false, message: "provide all required fields" });
    }

    const entry = await GuestEntry.create({ Name, Comment, Email });

    res.status(201).json({
      success: true,
      data: entry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getEntry = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const entries = await GuestEntry.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await GuestEntry.countDocuments();

    res.status(200).json({
      success: true,
      data: entries,
      pagination: {
        totalEntries: total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        pageSize: limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
