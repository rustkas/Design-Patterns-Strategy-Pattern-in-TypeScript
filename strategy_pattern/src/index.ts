import { Authenticator } from "./authenticator";
import { LocalStrategy } from "./local_strategy";
import { TwitterStrategy } from "./twitter_strategy";

// function login(mode) {
//   if (mode === "account") {
//     loginWithPassword();
//   } else if (mode === "email") {
//     loginWithEmail();
//   } else if (mode === "mobile") {
//     loginWithMobile();
//   }
// }


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

const auth = new Authenticator();
auth.use("twitter", new TwitterStrategy());
auth.use("local", new LocalStrategy());

function login(mode: string, ...args: any) {
  return auth.authenticate(mode, args);
}
login("twitter", "123");
login("local", "bytefer", "666");
