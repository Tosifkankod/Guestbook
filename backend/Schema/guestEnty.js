import mongoose from "mongoose";

const guestEntrySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please provide Name"],
    },
    Comment: {
      type: String,
      required: [true, "Please provide Comment"],
    },
    Email: {
      type: String,
      required: [true, "Please provide Email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        "Please provide a valid email address",
      ],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const GuestEntry = mongoose.model("GuestEntry", guestEntrySchema);

export default GuestEntry;
