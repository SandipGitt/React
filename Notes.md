# Lessions Learned
1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately.

## from bg-changer
onclick = {}  It expects that we would pass a function to it.  we can pass the reference  of the function but if we do that we can't give the parameters (if need more clarity watch bg changer video from timestamp 15:00)

## from pw-generator
useCallback => It is used to cache data between re-renders

## from currency converter
Generally, the data returned by the api calls are in string format
Remember the key in loops
