import { readable, writable, derived } from "svelte/store";

export const count = writable(0);

export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start: any = new Date();
export const elapsed = derived(time, ($time: any) =>
  Math.round(($time - start) / 1000)
);

const createCustomStoreCounter = () => {
  const { set, subscribe, update } = writable(0);

  return {
    subscribe,
    inc: () => update((n) => n + 1),
    dec: () => update((n) => n - 1),
    reset: () => set(0),
  };
};

export const altCount = createCustomStoreCounter();

// my fuckn custom store

// function fuck(value) {
//   function subc(cb) {
//     console.log(value );

//     cb(value);
//     return {
//       unsubscribe: () => {},
//     };
//   }
//   function set(val) {
//     value = val;
//   }
//   return {
//     subscribe: subc,
//     set,
//   };
// }

// export const fucknValue = fuck(10);

// setTimeout(() => {
//   fucknValue.set(100);
// }, 3000);
