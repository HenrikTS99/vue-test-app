import { ref, computed, watch } from 'vue';

export function useCounter(initial = 0) {
  const count = ref(initial)

  const doubled = computed(() => count.value * 2);

  watch(count, (newValue, oldValue) => console.log('Count updated to: ' + newValue + ". Old value was " + oldValue));

  const increment = () => count.value++;

  const decrement = () => count.value--;

  return { count, doubled, increment, decrement }
}
