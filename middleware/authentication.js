import localforage from "localforage";

// export default function({ route, redirect }) {
//   let resultToken;
//   localforage.getItem("user-flavorit", (err, value) => console.log(value)).then(res => {

//   });

//   console.log(resultToken);

//   // .then(res => {
//   //   resultToken = res;
//   //   return resultToken;
//   // });

//   return !localforage.getItem("user-flavorit")
//     ? console.log("Não tem TOKENNNN!!!!")
//     : console.log("tem TOKEN SIM");

//   // localforage.getItem("user-flavorit")
//   //   ? localforage.getItem("user-flavorit").then(response => {
//   //       return !JSON.parse(response).token.length &&
//   //         route.path !== "/" &&
//   //         route.path !== "/signup"
//   //         ? redirect("/")
//   //         : true;
//   //     })
//   //   : true;
//   // if (route !== "/" && route !== "/signup" && !token) {
//   //   return redirect("/");
//   // }
// }

// export default function({ route, redirect }) {
//   async function handleRouting() {
//     let responseKey = await localforage
//       .getItem("user-flavorit")
//       .then(response => JSON.parse(response).token);

//     return responseKey === "" ? true : false;
//   }

//   return !handleRouting() ? true : redirect("/");
//   // return !localforage.getItem("user-flavorit")
//   //   ? console.log("Não tem token")
//   //   : console.log("Tem token");
// }

// export default function({ route, redirect }) {
//   localforage
//     .getItem("user-flavorit") // Promise
//     .catch(() => {
//       return null;
//     })
//     .then(user => {
//       // Anonymous users
//       if (
//         !JSON.parse(user).token &&
//         route.path !== "/" &&
//         route.path !== "/signup"
//       ) {
//         redirect("/");
//       }

//       // Authenticated users
//       // if (JSON.parse(user).token && route.path === "/user") {
//       //   console.log("Loguei com sucesso");
//       // }
//     });

//   // This does not seem to change anything at the moment
//   return Promise.resolve;
// }

// export default function({ store, state }) {
//   let token = store.state.token;
//   console.log(token);
// }
