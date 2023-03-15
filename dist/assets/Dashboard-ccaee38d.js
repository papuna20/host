import {
  a as c,
  b as e,
  g as t,
  w as s,
  h as o,
  o as i,
  f as l,
} from "./index-5a816d9d.js";
const _ = { class: "flex bg-white h-screen overflow-hidden" },
  d = { class: "w-[13%] h-screen overflow-hidden pl-9 pt-9 bg-slate-600" },
  h = e(
    "p",
    {
      class:
        "font-bold mb-20 text-white text-[30px] cursor-pointer hover:text-black",
    },
    "Profile",
    -1
  ),
  p = e(
    "p",
    {
      class:
        "font-bold mb-20 text-white text-[30px] cursor-pointer hover:text-black",
    },
    "Security",
    -1
  ),
  m = {
    __name: "Dashboard",
    setup(u) {
      return (
        l(),
        (f, b) => {
          const r = o("RouterLink"),
            n = o("router-link"),
            a = o("RouterView");
          return (
            i(),
            c("div", _, [
              e("div", d, [
                t(
                  r,
                  { to: "/dashboard/profile" },
                  { default: s(() => [h]), _: 1 }
                ),
                t(
                  n,
                  { to: "/dashboard/security" },
                  { default: s(() => [p]), _: 1 }
                ),
              ]),
              e("div", null, [t(a)]),
            ])
          );
        }
      );
    },
  };
export { m as default };
