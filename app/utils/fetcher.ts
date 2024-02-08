export const fetcher = () => fetch("/api/cars.json").then((res) => res.json());
