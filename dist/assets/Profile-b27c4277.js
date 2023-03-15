import {
  f as u,
  i as f,
  o as c,
  a as d,
  b as t,
  j as w,
  v,
  c as r,
  t as g,
  u as i,
  k as _,
  d as b,
} from "./index-5a816d9d.js";
const U = {
    class:
      "fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex items-center justify-center px-8",
  },
  k = {
    class: "flex items-center relative justify-center bg-white w-[20%] h-[40%]",
  },
  E = {
    __name: "changeName",
    setup(m) {
      const e = u(),
        s = f(""),
        l = () => {
          e.commit("switchButtons/toggleUpdatePopup");
        },
        a = () => {
          e.dispatch("registration/updateUsername", s.value),
            e.commit("switchButtons/toggleUpdatePopup");
        };
      return (p, o) => (
        c(),
        d("div", U, [
          t("div", k, [
            t("div", null, [
              t(
                "p",
                {
                  onClick: l,
                  class: "absolute font-bold cursor-pointer top-3 right-6",
                },
                "X"
              ),
              w(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      o[0] || (o[0] = (n) => (s.value = n)),
                    class:
                      "border-2 block mb-9 w-[250px] h-[40px] border-x-0 border-t-0 focus:outline-0",
                    placeholder: "Enter new username",
                  },
                  null,
                  512
                ),
                [[v, s.value]]
              ),
              t(
                "button",
                {
                  onClick: a,
                  class: "bg-blue-700 w-[120px] text-white h-[30px]",
                },
                "Save changes"
              ),
            ]),
          ]),
        ])
      );
    },
  },
  P = {
    class:
      "fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex items-center justify-center px-8",
  },
  B = {
    class: "flex items-center relative justify-center bg-white w-[20%] h-[40%]",
  },
  y = {
    __name: "changeEmail",
    setup(m) {
      const e = u(),
        s = f(""),
        l = () => {
          e.commit("switchButtons/toggleEmailUpdatePopup");
        },
        a = () => {
          e.dispatch("registration/updateEmail", s.value),
            e.commit("switchButtons/toggleEmailUpdatePopup");
        };
      return (p, o) => (
        c(),
        d("div", P, [
          t("div", B, [
            t("div", null, [
              t(
                "p",
                {
                  onClick: l,
                  class: "absolute font-bold cursor-pointer top-3 right-6",
                },
                "X"
              ),
              w(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      o[0] || (o[0] = (n) => (s.value = n)),
                    class:
                      "border-2 block mb-9 w-[250px] h-[40px] border-x-0 border-t-0 focus:outline-0",
                    placeholder: "Enter new email",
                  },
                  null,
                  512
                ),
                [[v, s.value]]
              ),
              t(
                "button",
                {
                  onClick: a,
                  class: "bg-blue-700 w-[120px] text-white h-[30px]",
                },
                "Save changes"
              ),
            ]),
          ]),
        ])
      );
    },
  },
  C = { class: "ml-[20%] mt-14" },
  S = t(
    "div",
    { class: "mb-[100px]" },
    [
      t("p", { class: "font-bold text-[40px]" }, "ACCOUNT SETTINGS"),
      t("p", { class: "text-[17px]" }, "Manage your account "),
    ],
    -1
  ),
  I = { class: "flex" },
  N = { class: "flex items-center mr-5" },
  T = {
    class: "bg-slate-300 border-2 flex border-black w-[300px] mr-5 h-[45px]",
  },
  $ = t("p", { class: "text-[10px] font-bold ml-2 mt-1" }, "USERNAME", -1),
  j = { class: "ml-[15%] font-bold" },
  D = { class: "flex items-center mr-5" },
  M = {
    class: "bg-slate-300 border-2 flex border-black w-[300px] mr-5 h-[45px]",
  },
  V = t("p", { class: "text-[10px] font-bold ml-2 mt-1" }, "EMAIL", -1),
  A = { class: "ml-[15%] font-bold" },
  L = {
    __name: "Profile",
    setup(m) {
      const e = u(),
        s = r(() => e.getters["registration/userInfo"]),
        l = r(() => e.getters["switchButtons/toggleUserUpdatePopup"]),
        a = r(() => e.getters["switchButtons/toggleEmailUpdatePopup"]),
        p = () => {
          e.commit("switchButtons/toggleUpdatePopup");
        },
        o = () => {
          e.commit("switchButtons/toggleEmailUpdatePopup");
        };
      return (n, X) => {
        var x, h;
        return (
          c(),
          d("div", C, [
            S,
            t("div", I, [
              t("div", N, [
                t("div", T, [
                  t("div", null, [
                    $,
                    t(
                      "p",
                      j,
                      g((x = i(s)[0]) == null ? void 0 : x.username),
                      1
                    ),
                  ]),
                ]),
                t(
                  "button",
                  {
                    onClick: p,
                    class:
                      "text-[12px] text-white bg-blue-700 w-[50px] h-[30px]",
                  },
                  "EDIT"
                ),
              ]),
              i(l) ? (c(), _(E, { key: 0 })) : b("", !0),
              t("div", D, [
                t("div", M, [
                  t("div", null, [
                    V,
                    t("p", A, g((h = i(s)[0]) == null ? void 0 : h.email), 1),
                  ]),
                ]),
                t(
                  "button",
                  {
                    onClick: o,
                    class:
                      "text-[12px] text-white bg-blue-700 w-[50px] h-[30px]",
                  },
                  "EDIT"
                ),
              ]),
              i(a) ? (c(), _(y, { key: 1 })) : b("", !0),
            ]),
          ])
        );
      };
    },
  };
export { L as default };
