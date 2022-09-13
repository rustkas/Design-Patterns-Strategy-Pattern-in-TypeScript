"use strict";
// function login(mode) {
//   if (mode === "account") {
//     loginWithPassword();
//   } else if (mode === "email") {
//     loginWithEmail();
//   } else if (mode === "mobile") {
//     loginWithMobile();
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const authenticator_1 = require("./authenticator");
const local_strategy_1 = require("./local_strategy");
const twitter_strategy_1 = require("./twitter_strategy");
// function login(mode:string) {
//   if (mode === "account") {
//     loginWithPassword();
//   } else if (mode === "email") {
//     loginWithEmail();
//   } else if (mode === "mobile") {
//     loginWithMobile();
//   } else if (mode === "google") {
//     loginWithGoogle();
//   } else if (mode === "facebook") {
//     loginWithFacebook();
//   } else if (mode === "apple") {
//     loginWithApple();
//   } else if (mode === "twitter") {
//     loginWithTwitter();
//   }
// }
// function loginWithPassword(): void {
// }
// function loginWithEmail(): void {
// }
// function loginWithMobile() {
// }
// function loginWithGoogle() {
// }
// function loginWithFacebook() {
// }
// function loginWithApple() {
// }
// function loginWithTwitter() {
// }
const auth = new authenticator_1.Authenticator();
auth.use("twitter", new twitter_strategy_1.TwitterStrategy());
auth.use("local", new local_strategy_1.LocalStrategy());
function login(mode, ...args) {
    return auth.authenticate(mode, args);
}
login("twitter", "123");
login("local", "bytefer", "666");
