const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://payment:eebxbQt6jb4wqwhS@cluster0.5ri0bhc.mongodb.net/payment?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MongoDB connected`.bgGreen.black.bold.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
