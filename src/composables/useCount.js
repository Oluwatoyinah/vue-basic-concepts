import { ref } from 'vue'


// A composable that allows reusability of our logic in differnt components 
export const useCount = (initialValue = 0) => {
  let count = ref(initialValue)

  const increase = () => count.value++
  const decrease = () => count.value--

  return { count, increase, decrease }
}
