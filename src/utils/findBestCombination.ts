interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export const findBestCombination = (products: Product[], budget: number): Product[] => {
    let bestCombination: Product[] = [];
    let bestTotal = 0;
  
    // Generar todas las combinaciones posibles de productos
    const generateCombinations = (current: Product[], remaining: Product[], index: number) => {
      const currentTotal = current.reduce((sum, item) => sum + item.price, 0);
  
      if (currentTotal <= budget && currentTotal > bestTotal) {
        bestCombination = [...current];
        bestTotal = currentTotal;
      }
  
      for (let i = index; i < remaining.length; i++) {
        generateCombinations([...current, remaining[i]], remaining, i + 1);
      }
    };
  
    generateCombinations([], products, 0);
  
    return bestCombination;
  };
  