const functions = require("firebase-functions");
const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/Apply", (req, res) => {
	res.render("apply");
});
app.get("/Benefits", (req, res) => {
	res.render("benefits");
});
app.get("/Committee", (req, res) => {
	res.render("committee");
});
app.get("/Feedback", (req, res) => {
	res.render("feedback");
});
app.get("/Join", (req, res) => {
	res.render("join");
});
app.get("/Mentors", (req, res) => {
	res.render("mentors");
});
app.get("/Quiz", (req, res) => {
	res.render("quiz");
});
app.get("/ExecutiveApplicationFirstYear", (req, res) => {
	res.render("ExecutiveApplicationFirstYear");
});
app.get("/Offline", (req, res) => {
	res.render("offline");
});
app.use((req, res, next) => {
	res.status(404).render("404");
});
exports.app = functions.https.onRequest(app);
