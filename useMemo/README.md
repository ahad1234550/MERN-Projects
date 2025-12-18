What is useMemo?

useMemo is a React hook that memorizes the result of an expensive calculation and only recalculates it when its dependencies change. It helps optimize performance by avoiding unnecessary computations on every render.

Why is it used?

To prevent expensive calculations from running on every render.

To improve app performance, especially with large datasets.

To return a memoized value that updates only when needed.

Where is useMemo used in this project?

In this project, useMemo is used to:

Create a large array of numbers with a “magical” item:

const nums = useMemo(() =>
  new Array(30000000).fill(0).map((_, i) => ({
    index: i,
    isMagical: i === 29000000
  }))
, [])


Find the magical number efficiently when numbers change:

const magical = useMemo(() =>
  numbers.find(item => item.isMagical)
, [numbers])


This ensures the expensive .find() operation only runs when numbers change, not on every render.